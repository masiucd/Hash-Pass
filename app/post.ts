export interface Post {
  slug: string
  title: string
}
export const getPosts = (): Post[] => {
  return [
    {slug: "first-post", title: "First Post"},
    {slug: "go-pointers", title: "Pointers in Go"},
  ]
}
