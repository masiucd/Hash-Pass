import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "remix"
import type {LinksFunction} from "remix"

// import darkStylesUrl from "~/styles/dark.css"
import globalStylesUrl from "~/styles/global.css"
import styles from "~/styles/tailwind.css"
import {Fragment} from "react"

// https://remix.run/api/app#links
export let links: LinksFunction = () => {
  return [
    {rel: "stylesheet", href: globalStylesUrl},
    // {
    //   rel: "stylesheet",
    //   href: darkStylesUrl,
    //   media: "(prefers-color-scheme: dark)",
    // },
    {
      rel: "stylesheet",
      href: styles,
      // media: "(prefers-color-scheme: dark)",
    },
  ]
}

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({error}: {error: Error}) {
  console.error(error)
  return (
    <Document title="Error!">
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>
            Hey, developer, you should replace this with what you want your
            users to see.
          </p>
        </div>
      </Layout>
    </Document>
  )
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
  let caught = useCatch()

  let message
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      )
      break
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      )
      break

    default:
      throw new Error(caught.data || caught.statusText)
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  )
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;1,300;1,400&family=Poppins:ital,wght@0,400;0,500;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-blue-400">
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  )
}

const Header = () => {
  return (
    <header className="bg-transparent py-5 mb-5">
      <Nav />
    </header>
  )
}

const navItems = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/",
  },
  {
    name: "home",
    path: "/",
  },
]
const Nav = () => {
  return (
    <nav className="p-3 flex justify-center shadow h-24">
      <Link to="/">
        <strong
          className={`
          transition-all 
          duration-200
          text-3xl
          font-sans
          py-2
          px-3
          border-b-2
          hover:border-b-4
          hover:px-2
          hover:py-1
          hover:text-4xl
          `}
        >
          Wiki Go
        </strong>
      </Link>
    </nav>
  )
}

const Footer = () => (
  <footer
    className={`
      bg-transparent
      h-24
      p-2
      shadow-2xl
      `}
  >
    <Link to="/">
      <strong
        className={`
          transition-all 
          duration-200
          text-3xl
          font-sans
          `}
      >
        Wiki Go
      </strong>
    </Link>
  </footer>
)
function Layout({children}: {children: React.ReactNode}) {
  return (
    <Fragment>
      <Header />
      <main className="min-h-[calc(100vh-12rem)]">{children}</main>
      <Footer />
    </Fragment>
  )
}
