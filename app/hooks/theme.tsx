import {useEffect} from "react"
import {Theme} from "~/context/theme/theme.context"
import useLocalStorage from "./localstorage"

const useDarkMode = (themeKey = "theme", themeValue: Theme = "light") => {
  const [storedValue, setValue] = useLocalStorage(themeKey, themeValue)

  const changeTheme = () => {
    const nextTheme = storedValue === "light" ? "dark" : "light"
    setValue(nextTheme)
  }

  useEffect(() => {
    // document.documentElement.classList.remove(
    //   storedValue === "dark" ? "light" : "dark"
    // )
    // document.documentElement.classList.add(storedValue)

    if (
      storedValue === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [storedValue])

  return {storedValue, setValue, changeTheme}
}

export default useDarkMode
