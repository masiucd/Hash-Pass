import {motion} from "framer-motion"
import {Fragment} from "react"
import type {LoaderFunction, MetaFunction} from "remix"
import {useLoaderData} from "remix"

import PageWrapper from "~/components/common/page"
import PostBox from "~/components/post/post.box"
import Spacer from "~/components/styles/spacer"
import {getPosts, PostFrontMatter} from "~/post"

interface Topic {
  title: string
  route: string
}
interface Data {
  topics: Array<Topic>
  posts: Array<PostFrontMatter>
}

export const loader: LoaderFunction = async () => ({
  posts: await getPosts(),
})

export const meta: MetaFunction = () => ({
  title: "Wiki Go topics",
  description: "Choose yur topic and post",
})

const Categories = ({topics}: {topics: string[]}): JSX.Element => (
  <div className="shadow h-full bg-slate-700 rounded-l-md">
    <ul className="py-2 px-4 overflow-y-auto rounded-l-md">
      {topics.map(title => (
        <Fragment key={title}>
          <Spacer size="2xs" unit="vertical" />
          <motion.li
            whileHover={{scale: 1.025}}
            className="text-2xl cursor-pointer text-cyan-200 "
          >
            {title}
          </motion.li>
        </Fragment>
      ))}
    </ul>
  </div>
)

const Posts = ({posts}: {posts: Array<PostFrontMatter>}): JSX.Element => (
  <div className="shadow w-full col-span-3 rounded-r-md dark:border-slate-100 flex flex-col  items-center">
    <ul className="rounded-md w-full md:w-4/5 ">
      {posts.map(post => (
        <PostBox key={post.slug} post={post} />
      ))}
    </ul>
  </div>
)

const Topics = (): JSX.Element => {
  const {posts} = useLoaderData<Data>()
  const uniqCategories = [...new Set(posts.map(p => p.tags.map(p => p)).flat())]
  return (
    <PageWrapper className="max-w-7xl relative m-auto p-2">
      <section className="flex flex-col  md:grid md:grid-cols-4 mt-10">
        <Categories topics={uniqCategories} />
        <div className="col-span-3 rounded-r-md dark:border-slate-100 flex flex-col  items-center">
          <Posts posts={posts} />
        </div>
      </section>
    </PageWrapper>
  )
}

export default Topics
