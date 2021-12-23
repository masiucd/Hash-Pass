import {FC} from "react"

interface Props {
  className?: string
}
const PageWrapper: FC<Props> = ({className, children}): JSX.Element => (
  <div
    className={`flex flex-1 flex-col xs-small:min-h-[75vh] md:min-h-[55vh] ${className}`}
  >
    {children}
  </div>
)

export default PageWrapper
