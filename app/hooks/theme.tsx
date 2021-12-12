import {useEffect} from "react"
import {Theme} from "~/context/theme/theme.context"
import useLocalStorage from "./localstorage"
import useHasMounted from "./mounted"

const useDarkMode = (
  themeKey = "theme",
  themeValue: Theme = "light"
): [Theme, () => void, boolean] => {
  const hasMounted = useHasMounted()
  const [storedValue, setValue] = useLocalStorage(themeKey, themeValue)

  const changeTheme = (): void => {
    if (hasMounted) {
      const nextTheme = storedValue === "light" ? "dark" : "light"
      setValue(() => nextTheme)
    }
  }

  useEffect(() => {
    if (hasMounted) {
      document.documentElement.classList.remove(
        storedValue === "dark" ? "light" : "dark"
      )
      document.documentElement.classList.add(storedValue)
    }
  }, [storedValue, hasMounted])

  return [storedValue, changeTheme, hasMounted]
}

export default useDarkMode
