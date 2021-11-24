import {Link, useLoaderData} from "remix"

interface Post {
  slug: string
  title: string
}
export const loader = (): Post[] => {
  return [
    {slug: "first-post", title: "First Post"},
    {slug: "go-pointers", title: "Pointers in Go"},
  ]
}

const Posts = () => {
  const posts = useLoaderData()
  console.log(posts)
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Posts
