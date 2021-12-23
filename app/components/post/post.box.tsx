import {format} from "date-fns"

import {PostFrontMatter} from "~/post"

import LinkButton from "../common/link.button"

interface Props {
  post: PostFrontMatter
}

const formatDate = (dateString: string, formatType = "yyyy MMM co"): string => {
  const [year, month, day] = dateString.split("-")
  return format(
    new Date(parseInt(year, 10), parseInt(month, 10), parseInt(day, 10)),

    formatType
  )
}

const Capture = ({children}: {children: React.ReactNode}): JSX.Element => {
  return (
    <strong className="text-slate-900 dark:text-cyan-200 border-b  dark:border-cyan-200 border-cyan-600">
      {children}
    </strong>
  )
}

const PostBox = ({post}: Props): JSX.Element => (
  <li key={post.slug} className="p-2 min-w-max shadow-md rounded-sm my-3">
    <div className="flex mb-5 items-center py-2">
      <p className="mr-3">
        <Capture>Title:</Capture> {post.title}
      </p>

      <p>
        <Capture>Updated: </Capture>
        {formatDate(post.updated)}
      </p>

      <ul className="ml-auto w-2/5 flex gap-2 flex-wrap justify-end ">
        {post.tags.map(tag => (
          <li
            key={tag}
            className="text-sm dark:bg-cyan-300 text-slate-900  rounded-md p-1"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>

    <div className="flex items-center">
      <p className="grow flex-wrap">
        <Capture>Description:</Capture> {post.description}
      </p>
      <LinkButton
        to={post.slug}
        className="w-1/4 dark:border-cyan-500 dark:hover:border-slate-100"
      >
        Read more
      </LinkButton>
    </div>
  </li>
)

export default PostBox
