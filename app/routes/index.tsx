import type {MetaFunction, LoaderFunction} from "remix"
import {useLoaderData, json, Link} from "remix"
import Waves from "~/components/bg.images/waves"
import WavesUp from "~/components/bg.images/waves.up"

type IndexData = {
  resources: Array<{name: string; url: string}>
  demos: Array<{name: string; to: string}>
}

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export const loader: LoaderFunction = () => {
  const data: IndexData = {
    resources: [
      {
        name: "Remix Docs",
        url: "https://remix.run/docs",
      },
      {
        name: "React Router Docs",
        url: "https://reactrouter.com/docs",
      },
      {
        name: "Remix Discord",
        url: "https://discord.gg/VBePs6d",
      },
    ],
    demos: [
      {
        to: "demos/actions",
        name: "Actions",
      },
      {
        to: "demos/about",
        name: "Nested Routes, CSS loading/unloading",
      },
      {
        to: "demos/params",
        name: "URL Params and Error Boundaries",
      },
    ],
  }

  // https://remix.run/api/remix#json
  return json(data)
}

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!",
  }
}

const WavesUpWrapper = () => {
  return (
    <div>
      <WavesUp />
    </div>
  )
}
const WavesWrapper = () => {
  return (
    <div className="mt-auto">
      <Waves />
    </div>
  )
}

const Cta = () => {
  return (
    <div className="border w-2/5 m-auto flex flex-col jus items-center	justify-center py-5">
      <h1 className="text-5xl mb-2">Wiki go</h1>
      <p>
        Your <span className="text-blue-700 font-bold dark:text-blue-400">Go</span> documentation{" "}
      </p>
      <div className="actions border w-2/5 flex justify-evenly p-2">
        <Link to="/topics">Topics</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  )
}

// https://remix.run/guides/routing#index-routes
export default function Index() {
  const data = useLoaderData<IndexData>()

  return (
    <div className="min-h-[calc(100vh-20rem)] flex flex-col">
      <WavesUpWrapper />
      <Cta />
      <WavesWrapper />
    </div>
  )
}
