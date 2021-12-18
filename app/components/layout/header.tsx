import {AnimatePresence, motion} from "framer-motion"
import {Link} from "remix"
import useDarkMode from "~/hooks/theme"
import Moon from "../icons/moon"
import Sun from "../icons/sun"

const Header = () => {
  const [theme, changeTheme, mounted] = useDarkMode()
  return (
    <header className="bg-transparent py-5 mb-5 relative border-2 border-red-500 header-height">
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

const Nav = () => (
  <nav className="p-3 flex justify-start h-24">
    <div className="border border-red-300 w-2/3 m-auto py-5">
      <Link to="/">
        <strong
          className={`
          transition-all 
          w-32
          flex
          duration-150
          text-3xl
          font-title
          py-2
          px-3
          border-b-2
          border-black
          dark:border-white	
          dark:hover:border-blue-300
          hover:border-blue-300
          hover:text-blue-300
          hover:rotate-2
          
          `}
        >
          Wiki Go
        </strong>
      </Link>
    </div>
  </nav>
)
export default Header
