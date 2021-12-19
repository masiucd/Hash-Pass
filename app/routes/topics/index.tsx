import {motion} from "framer-motion"
import {Fragment} from "react"
import type {LoaderFunction, MetaFunction} from "remix"
import {json, useLoaderData} from "remix"

import PageWrapper from "~/components/common/page"
import Spacer from "~/components/styles/spacer"
import {getPosts} from "~/posts"

interface Topic {
  title: string
  route: string
}
interface Data {
  topics: Array<Topic>
  posts: any
}

export const loader: LoaderFunction = () =>
  json({
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
    posts: getPosts(),
  })

export const meta: MetaFunction = () => ({
  title: "Wiki Go topics",
  description: "Choose yur topic and post",
})

const Topics = (): JSX.Element => {
  const {topics, posts} = useLoaderData<Data>()
  console.log("posts", posts)
  return (
    <PageWrapper className="max-w-7xl relative m-auto">
      <section className="grid grid-cols-4 mt-10 ">
        <div className="border h-full bg-slate-700">
          <ul className="py-2 px-4">
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
        <div className="border col-span-3">Posts here</div>
      </section>
    </PageWrapper>
  )
}

export default Topics
