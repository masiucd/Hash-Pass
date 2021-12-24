import {LoaderFunction, MetaFunction, useLoaderData} from "remix"

import PageWrapper from "~/components/common/page"

export const loader: LoaderFunction = async ({params}) => {
  return params.slug
}

export const meta: MetaFunction = ({params}) => ({
  title: `Go post ${params.slug}`,
  description: `Let's learn more about ${params.slug} in Go`,
})

const TopicSlug = (): JSX.Element => {
  const slug = useLoaderData()
  return (
    <PageWrapper className="max-w-7xl relative m-auto">
      <h1>Yo {slug}</h1>
    </PageWrapper>
  )
}

export default TopicSlug
