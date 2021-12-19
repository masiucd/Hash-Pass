import {AnimatePresence, motion} from "framer-motion"
import {Fragment} from "react"
import {Link} from "remix"
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
      <AnimatePresence>
        {isOn && !isAboveTablet && <SideMenu />}
      </AnimatePresence>
    </nav>
  )
}

interface NavIconProps {
  isOn: boolean
  toggle: () => void
}

const NavIcon = ({isOn, toggle}: NavIconProps) => (
  <button
    type="button"
    className="z-10 absolute top-0 right-20"
    onClick={toggle}
  >
    <MenuIcon isOn={isOn} />
  </button>
)

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

const SideMenu = () => {
  return (
    <motion.ul
      initial={{x: -60, opacity: 0.45}}
      animate={{x: 0, opacity: 1}}
      exit={{x: -400, opacity: 0.35}}
      transition={{
        type: "spring",
        stiffness: 200,
        duration: 3,
      }}
      className="fixed bg-slate-600 text-cyan-200 dark:text-cyan-900 dark:bg-slate-400 flex flex-col items-center justify-center top-0 left-0 h-full w-full sm:w-5/12"
    >
      {mainPageRoutes.map(({title, slug}) => (
        <Fragment key={slug}>
          <Spacer size="2xs" unit="vertical" />
          <motion.li
            className="text-lg"
            whileHover={{scale: 1.1}}
          >
            <Link to={slug}>{title}</Link>
          </motion.li>
        </Fragment>
      ))}
    </motion.ul>
  )
}
export default Header
