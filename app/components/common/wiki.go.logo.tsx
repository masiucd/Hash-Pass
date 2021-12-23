import {Link} from "remix"

const WikiGoLogo = (): JSX.Element => {
  return (
    <Link to="/">
      <strong
        className="transition-all 
        cursor-pointer
        z-50
        w-32
        flex
        duration-150
        text-3xl
        font-title
        py-2
        px-3
        dark:hover:border-blue-300
        hover:border-blue-300
        hover:text-blue-300
        hover:rotate-1
        justify-center
        items-center"
      >
        Wiki{" "}
        <span className="italic inline-block text-cyan-600 dark:text-cyan-400	">
          {" "}
          Go
        </span>
      </strong>
    </Link>
  )
}

export default WikiGoLogo
