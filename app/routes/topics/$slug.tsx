import {LoaderFunction, useLoaderData} from "remix"

export const loader: LoaderFunction = async ({params}) => {
  return params.slug
}

const TopicSlug = (): JSX.Element => {
  const slug = useLoaderData()

  return (
    <div>
      <h1>Yo {slug}</h1>
    </div>
  )
}

export default TopicSlug
