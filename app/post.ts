import parseFrontMatter from "front-matter"
import fs from "fs/promises"
import path from "path"
import invariant from "tiny-invariant"

export interface PostFrontMatter {
  title: string
  description: string
  tags: string[]
  category: string
  created: string
  updated: string
  slug: string
}

export type PostMarkdownAttributes = {
  title: string
}

export const postsPath = path.join(__dirname, "..", "posts")

function isValidPostAttributes(
  attributes: any
): attributes is PostMarkdownAttributes {
  return attributes?.title
}

export async function getPosts(): Promise<PostFrontMatter[]> {
  const dir = await fs.readdir(postsPath)
  return Promise.all(
    dir.map(async filename => {
      const file = await fs.readFile(path.join(postsPath, filename))
      const {attributes} = parseFrontMatter<PostFrontMatter>(file.toString())
      invariant(isValidPostAttributes(attributes))
      return {
        slug: filename.replace(/\.md$/, ""),
        title: attributes.title,
        description: attributes.description,
        tags: attributes.tags,
        category: attributes.category,
        created: attributes.created,
        updated: attributes.updated,
      }
    })
  )
}
