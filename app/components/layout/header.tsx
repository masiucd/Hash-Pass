import {AnimatePresence, motion} from "framer-motion"

import useDarkMode from "~/hooks/theme"

import Moon from "../icons/moon"
import Sun from "../icons/sun"
import Nav from "./nav"

const Header = (): JSX.Element => {
  const [theme, changeTheme, mounted] = useDarkMode()
  return (
    <header className="bg-transparent py-5 mb-5 relative  h-32 ">
      <Nav />
      <motion.button
        type="button"
        name="theme-button"
        className="absolute top-5 right-10 z-20"
        onClick={changeTheme}
      >
        <AnimatePresence>
          {theme === "dark" && mounted ? <Sun /> : <Moon />}
        </AnimatePresence>
      </motion.button>
    </header>
  )
}

export default Header
