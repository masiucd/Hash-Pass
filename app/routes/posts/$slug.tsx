import {useLoaderData} from "remix"
import type {LoaderFunction} from "remix"
import {getPost, Post} from "~/post"
import invariant from "tiny-invariant"

export const loader: LoaderFunction = async ({params}) => {
  invariant(params.slug, "expected params.slug")
  return getPost(params.slug)
}

const PostSlug = () => {
  const post = useLoaderData<Post>()

  return (
    <div>
      <h1> Post {post.title}</h1>
      {post.html && <div dangerouslySetInnerHTML={{__html: post.html}} />}
    </div>
  )
}

export default PostSlug
