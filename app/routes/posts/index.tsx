import {Link, useLoaderData} from "remix"
import {getPosts, Post} from "~/post"

export const loader = (): Post[] => getPosts()

const Posts = () => {
  const posts = useLoaderData()
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
