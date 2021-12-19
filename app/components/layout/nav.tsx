import {AnimatePresence, motion} from "framer-motion"
import {Fragment} from "react"
import {Link} from "remix"

import useMatchScreenSize from "~/hooks/match.screen.size"
import useToggle from "~/hooks/toggle"
import {mainPageRoutes} from "~/routes.data"

import WikiGoLogo from "../common/wiki.go.logo"
import MenuIcon from "../icons/menu.icon"
import Spacer from "../styles/spacer"

const Nav = (): JSX.Element => {
  const [isOn, {toggle}] = useToggle()
  const isAboveTablet = useMatchScreenSize("(min-width: 768px)")

  return (
    <nav className="p-3 flex justify-start h-24 relative">
      <div className="flex w-2/3 m-auto py-5">
        <Spacer size="2xs" unit="horizontal" />
        <WikiGoLogo />
        {isAboveTablet ? <NavList /> : <NavIcon isOn={isOn} toggle={toggle} />}
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

const NavIcon = ({isOn, toggle}: NavIconProps): JSX.Element => (
  <button
    type="button"
    className="z-20 absolute top-0 right-20"
    onClick={toggle}
  >
    <MenuIcon isOn={isOn} />
  </button>
)

const NavList = (): JSX.Element => (
  <ul className="flex items-center flex-1 justify-end px-2">
    {mainPageRoutes.map(({title, slug}) => (
      <NavListItem key={slug} title={title} slug={slug} unit="horizontal" />
    ))}
  </ul>
)

const SideMenu = (): JSX.Element => {
  return (
    <motion.ul
      className="fixed z-10 bg-slate-600 text-cyan-200 dark:text-cyan-800 dark:bg-slate-200 flex flex-col items-center justify-center top-0 left-0 h-full w-full sm:w-7/12"
      initial={{x: -60, opacity: 0.45}}
      animate={{x: 0, opacity: 1}}
      exit={{x: -400, opacity: 0.35}}
      transition={{
        type: "spring",
        stiffness: 200,
        duration: 1.3,
      }}
    >
      {mainPageRoutes.map(({title, slug}) => (
        <NavListItem key={slug} unit="vertical" slug={slug} title={title} />
      ))}
    </motion.ul>
  )
}

const NavListItem = ({
  slug,
  title,
  unit,
}: {
  slug: string
  title: string
  unit: "horizontal" | "vertical"
}): JSX.Element => {
  return (
    <Fragment>
      <Spacer size="2xs" unit={unit} />
      <motion.li className="text-lg" whileHover={{scale: 1.1}}>
        <Link to={slug}>{title}</Link>
      </motion.li>
    </Fragment>
  )
}

export default Nav
