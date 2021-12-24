// import theme from "prism-react-renderer/themes/nightOwl"
// import Prism from "prismjs"
// import {Prism as SyntaxHighlighter} from "react-syntax-highlighter"
// import {dark} from "react-syntax-highlighter/dist/esm/styles/prism"
import {LoaderFunction, MetaFunction, useLoaderData} from "remix"
import invariant from "tiny-invariant"

import PageWrapper from "~/components/common/page"
import {getPost, Post} from "~/post"
import codeStyles from "~/styles/code.css"

export const loader: LoaderFunction = async ({params}) => {
  invariant(params.slug, "expected params.slug")
  return getPost(params.slug)
}

export const links = (): {rel: string; href: string}[] => {
  return [{rel: "stylesheet", href: codeStyles}]
}

export const meta: MetaFunction = ({params}) => ({
  title: `Go post ${params.slug}`,
  description: `Let's learn more about ${params.slug} in Go`,
})

const TopicSlug = (): JSX.Element => {
  const post = useLoaderData<Post>()

  return (
    <PageWrapper className="max-w-screen-md	border mx-auto flex flex-col">
      <div
        className="post language-go"
        dangerouslySetInnerHTML={{__html: post.html}}
      />
    </PageWrapper>
  )
}

export default TopicSlug
