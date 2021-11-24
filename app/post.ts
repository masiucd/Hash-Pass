import path from "path"
import fs from "fs/promises"
import parseFrontMatter from "front-matter"
export interface Post {
  slug: string
  title: string
}

const postPath = path.join(__dirname, "..", "posts")
export const getPosts = async (): Promise<Post[]> => {
  const dir = await fs.readdir(postPath)
  console.log("dir", dir)
  console.log("postsPath", postPath)

  return Promise.all(
    dir.map(async fileName => {
      let file = await fs.readFile(path.join(postPath, fileName))
      let {attributes} = parseFrontMatter(file.toString())
      console.log(attributes)
      return {
        slug: fileName.replace(/\.md$/, ""),
        title: attributes.title,
      }
    })
  )
}
