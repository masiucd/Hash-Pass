import {AnimatePresence, motion} from "framer-motion"
import {Fragment} from "react"
import {json, Link, LoaderFunction, useLoaderData} from "remix"
import useDarkMode from "~/hooks/theme"
import {mainPageRoutes} from "~/routes.data"
import Moon from "../icons/moon"
import Sun from "../icons/sun"
import Spacer from "../styles/spacer"

const Header = () => {
  const [theme, changeTheme, mounted] = useDarkMode()
  return (
    <header className="bg-transparent py-5 mb-5 relative  header-height">
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

const Nav = () => {
  return (
    <nav className="p-3 flex justify-start h-24">
      <div className="flex w-2/3 m-auto py-5">
        <Spacer size="2xs" unit="horizontal" />
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
        <NavList />
      </div>
    </nav>
  )
}

const NavList = () => (
  <ul className="flex items-center flex-1 justify-end px-2">
    {mainPageRoutes.map(({title, slug}) => (
      <Fragment key={slug}>
        <Spacer size="2xs" unit="horizontal" />
        <li>
          <Link to={slug}>{title}</Link>
        </li>
      </Fragment>
    ))}
  </ul>
)
export default Header
