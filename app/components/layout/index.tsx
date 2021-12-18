import {AnimatePresence, motion} from "framer-motion"
import {FC, Fragment} from "react"
import Footer from "./footer"
import Header from "./header"

const Layout: FC = ({children}) => (
  <Fragment>
    <Header />
    <main className="min-h-[calc(100vh-13.5rem)]">{children}</main>
    <Footer />
  </Fragment>
)

export default Layout
