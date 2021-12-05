import React, {Fragment, useEffect, useState} from "react"
import {Link} from "remix"
import useTheme from "~/hooks/theme"

const navData = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/content",
    name: "content",
  },
  {
    path: "/about",
    name: "about",
  },
]

const NavIcon = () => {
  return (
    <div className="p-2">
      <strong className="text-2xl">Wiki Go</strong>
    </div>
  )
}

const Nav = () => {
  const {storedTheme, handleTheme} = useTheme()
  return (
    <nav className="border-solid	border-4 border-green-900 w-full md:w-6/12">
      <ul className="w-full px-10 py-2 flex border-solid	border-4 border-red-600 justify-between">
        {navData.map(({path, name}) => (
          <li key={name} className="text-lg capitalize">
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleTheme}>Dark mode</button>
    </nav>
  )
}

const Header = () => (
  <header className="border-solid	border-4 border-black px-3 py-2 flex flex-col items-center justify-center">
    <Link to="/">
      <NavIcon />
    </Link>
    <Nav />
  </header>
)

const Footer = () => {
  return (
    <footer className="remix-app__footer">
      <div className="container remix-app__footer-content">
        <p>&copy; You!</p>
      </div>
    </footer>
  )
}

function Layout({children}: React.PropsWithChildren<{}>) {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  )
}

export default Layout
