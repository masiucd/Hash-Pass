import {format, parseISO} from "date-fns"

import {PostFrontMatter} from "~/post"

import LinkButton from "../common/link.button"

interface Props {
  post: PostFrontMatter
}

const formatDate = (dateString: string, formatType = "yy MMM do"): string =>
  format(parseISO(dateString), formatType)

const Capture = ({children}: {children: React.ReactNode}): JSX.Element => (
  <strong className="text-slate-900 dark:text-cyan-200 italic ">
    {children}
  </strong>
)

const UpperSection = ({
  title,
  tags,
  updated,
}: {
  title: string
  tags: string[]
  updated: string
}): JSX.Element => (
  <div className="flex flex-col sm:flex-row mb-5 items-center py-2">
    <p className="mr-3">
      <Capture>Title:</Capture> {title}
    </p>
    <p>
      <Capture>Updated: </Capture>
      {formatDate(updated)}
    </p>

    <ul className="sm:ml-auto  my-2 sm:my-0  sm:w-2/5  sm:justify-end  w-full justify-center flex gap-2 flex-wrap">
      {tags.map(tag => (
        <li
          key={tag}
          className="text-sm dark:bg-cyan-300 text-slate-900  rounded-md p-1"
        >
          {tag}
        </li>
      ))}
    </ul>
  </div>
)

const LowerSection = ({
  slug,
  description,
}: {
  description: string
  slug: string
}): JSX.Element => (
  <div className="flex items-center">
    <p className="grow-[3] flex-wrap">
      <Capture>Description:</Capture> {description}
    </p>
    <div className="max-w-32 px-1">
      <LinkButton
        to={`/topics/${slug}`}
        className=" dark:border-cyan-500 dark:hover:border-slate-100 dark:hover:bg-cyan-400  dark:hover:text-cyan-900 text-xs"
      >
        Read more
      </LinkButton>
    </div>
  </div>
)

const PostBox = ({post}: Props): JSX.Element => (
  <li
    key={post.slug}
    className="flex flex-col flex-wrap p-2 min-w-max shadow-md rounded-sm my-3"
  >
    <UpperSection tags={post.tags} updated={post.updated} title={post.title} />
    <LowerSection slug={post.slug} description={post.description} />
  </li>
)

export default PostBox
