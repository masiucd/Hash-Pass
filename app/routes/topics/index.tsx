import type {LoaderFunction, MetaFunction} from "remix"
import {json, useLoaderData} from "remix"

import PageWrapper from "~/components/common/page"

interface Topic {
  title: string
  route: string
}
interface Data {
  topics: Array<Topic>
  posts: Array<{name: string; to: string}>
}

export const loader: LoaderFunction = () =>
  json({
    topics: [
      {
        title: "Basics",
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
    posts: [],
  })

export const meta: MetaFunction = () => ({
  title: "Wiki Go topics",
  description: "Choose yur topic and post",
})

const Topics = (): JSX.Element => {
  const {topics} = useLoaderData<Data>()
  console.log("topics", topics)
  return (
    <PageWrapper className="max-w-7xl relative m-auto border border-purple-500">
      <section className="grid grid-cols-4 border border-red-500">
        <div className="border h-full">
          <div className="box">
            {/* render topics here */}
            Topics here
          </div>
        </div>
        <div className="border col-span-3">Posts here</div>
      </section>
    </PageWrapper>
  )
}

export default Topics
