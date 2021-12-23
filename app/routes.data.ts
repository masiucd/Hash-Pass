export interface PageRoute {
  title: string
  slug: string
}
export const mainPageRoutes: Array<PageRoute> = [
  {title: "about", slug: "/about"},
  {title: "topics", slug: "/topics"},
  {title: "contact", slug: "/contact"},
]
