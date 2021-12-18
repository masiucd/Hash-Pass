import {FC, Fragment} from "react"
import Footer from "./footer"
import Header from "./header"

const Layout: FC = ({children}) => {
  return (
    <Fragment>
      <Header />
      {/* 8rem on header + rem in the footer = 16rem */}
      <main className="min-h-[calc(100vh-16rem)]">{children}</main>
      <Footer />
    </Fragment>
  )
}

export default Layout
