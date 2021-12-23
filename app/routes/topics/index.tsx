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

export const loader: LoaderFunction = async () => {
  return {
    posts: await getPosts(),
    topics: [
      {
        title: "Basics",
        route: "",
      },
      {
        title: "Slices",
        route: "",
      },
      {
        title: "Maps",
        route: "",
      },
      {
        title: "Structs",
        route: "",
      },
      {
        title: "Concurrency",
        route: "",
      },
      {
        title: "Tips and trics",
        route: "",
      },
    ],
  }
}

export const meta: MetaFunction = () => ({
  title: "Wiki Go topics",
  description: "Choose yur topic and post",
})

const Topics = (): JSX.Element => {
  const {posts, topics} = useLoaderData<Data>()

  return (
    <PageWrapper className="max-w-7xl relative m-auto">
      <section className="grid grid-cols-4 mt-10 ">
        <div className="border h-full bg-slate-700 rounded-md">
          <ul className="py-2 px-4 overflow-y-auto rounded-md">
            {topics.map(({title}) => (
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
        <div className="border col-span-3 rounded-md dark:border-slate-100 flex flex-col  items-center">
          <ul className="rounded-md  w-3/5 ">
            {posts.map(post => (
              <PostBox key={post.slug} post={post} />
            ))}
          </ul>
        </div>
      </section>
    </PageWrapper>
  )
}

export default Topics
