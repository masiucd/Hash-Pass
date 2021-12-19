import {FC} from "react"
import {Link} from "remix"

interface Props {
  to: string
  className?: string
}

const LinkButton: FC<Props> = ({to, children, className}) => {
  return (
    <Link
      to={to}
      className={`min-w-fit p-1 flex flex-1 justify-center rounded-md border-2 border-blue-500 mx-2 hover:border-blue-300 hover:shadow-xl ${
        className ? className : null
      }`}
    >
      {children}
    </Link>
  )
}

export default LinkButton
