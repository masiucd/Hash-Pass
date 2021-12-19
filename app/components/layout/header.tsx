import {AnimatePresence, motion} from "framer-motion"
import {Fragment} from "react"
import {
  json,
  Link,
  LoaderFunction,
  useLoaderData,
} from "remix"
import useMatchScreenSize from "~/hooks/match.screen.size"
import useDarkMode from "~/hooks/theme"
import useToggle from "~/hooks/toggle"
import {mainPageRoutes} from "~/routes.data"
import MenuIcon from "../icons/menu.icon"
import Moon from "../icons/moon"
import Sun from "../icons/sun"
import Spacer from "../styles/spacer"

const Header = () => {
  const [theme, changeTheme, mounted] = useDarkMode()
  return (
    <header className="bg-transparent py-5 mb-5 relative border border-red-500 h-32 ">
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
  const [isOn, {toggle}] = useToggle()
  const isAboveTablet = useMatchScreenSize(
    "(min-width: 768px)"
  )

  return (
    <nav className="p-3 flex justify-start h-24 relative">
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
        {isAboveTablet ? (
          <NavList />
        ) : (
          <NavIcon isOn={isOn} toggle={toggle} />
        )}
      </div>
    </nav>
  )
}

interface NavIconProps {
  isOn: boolean
  toggle: () => void
}

const NavIcon = ({isOn, toggle}: NavIconProps) => {
  return (
    <button
      type="button"
      className="absolute top-0 right-20"
      onClick={toggle}
    >
      <MenuIcon isOn={isOn} />
    </button>
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
