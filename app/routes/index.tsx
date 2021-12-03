import type {MetaFunction, LoaderFunction} from "remix"
import {useLoaderData, json, Link} from "remix"

// https://remix.run/guides/routing#index-routes
export default function Index() {
  return <h1 className="h-12 w-12 m-10 text-red-900 p-20">Hello</h1>
}
