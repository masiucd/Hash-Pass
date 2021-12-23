import {motion} from "framer-motion"
import React from "react"

interface Props {
  width?: number
  height?: number
  isOn: boolean
}

const MenuIcon: React.FC<Props> = ({width = 30, height = 30, isOn}) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 256 256"
  >
    <path fill="none" d="M0 0H256V256H0z" />
    {/* MIDDLE */}
    <motion.path
      stroke={isOn ? "#38bdf8" : "currentColor"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M40 128L216 128"
      initial={{opacity: 0.45}}
      animate={{
        opacity: 1,
        x: isOn ? 1000 : 0,
      }}
      exit={{
        opacity: 0.2,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        duration: 2,
      }}
    />
    {/* MIDDLE */}
    {/* TOP */}
    <motion.path
      stroke={isOn ? "#38bdf8" : "currentColor"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M40 64L216 64"
      initial={{opacity: 0.25}}
      animate={{
        opacity: 1,
        rotate: isOn ? -50 : 0,
        y: isOn ? 64 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        duration: 2,
      }}
    />
    {/* TOP */}
    <motion.path
      stroke={isOn ? "#38bdf8" : "currentColor"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M40 192L216 192"
      initial={{opacity: 0.55}}
      animate={{
        opacity: 1,
        rotate: isOn ? 50 : 0,
        x: isOn ? 12 : 0,
        y: isOn ? -70 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        duration: 2,
      }}
    />
  </motion.svg>
)
export default MenuIcon
