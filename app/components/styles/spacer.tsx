import React from "react"

const spacerSizesVertical = {
  "3xs": "h-6 lg:h-8",
  "2xs": "h-10 lg:h-12",
  xs: "h-20 lg:h-24",
  sm: "h-32 lg:h-36",
  base: "h-40 lg:h-48",
  lg: "h-56 lg:h-64",
}

const spacerSizesHorizontal = {
  "3xs": "w-6 lg:w-8",
  "2xs": "w-10 lg:w-12",
  xs: "w-20 lg:w-24",
  sm: "w-32 lg:w-36",
  base: "w-40 lg:w-48",
  lg: "w-56 lg:w-64",
}

interface Props {
  size: keyof typeof spacerSizesVertical
  unit: "horizontal" | "vertical"
  className?: string
}
const Spacer: React.FC<Props> = ({size, unit, className = ""}) => {
  const spacer =
    unit === "horizontal" ? spacerSizesHorizontal : spacerSizesVertical
  return <div className={`${className} ${spacer[size]}`} />
}
export default Spacer
