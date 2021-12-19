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

export const getPosts = async (): Promise<any> => {
  const dir = await fs.readdir(postsPath)

  return Promise.all(
    dir.map(async filename => {
      const file = await fs.readFile(path.join(postsPath, filename))
      const {attributes} = parseFrontMatter<PostFrontMatter>(file.toString())

      invariant(
        isValidPostAttributes(attributes),
        `${filename} has bad meta data!`
      )
      return {
        title: attributes.title,
        slug: filename.replace(/\.md$/, ""),
        description: "string",
        tags: [""],
        category: "",
        created: "",
        updated: "",
      }
    })
  )
}
