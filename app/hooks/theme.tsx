import {useEffect} from "react"

import useLocalStorage from "./local.storage"

export type ThemeValue = "dark" | "light"

const useTheme = (themeKey = "theme", themeValue: ThemeValue = "light") => {
  const {storedValue, setValue} = useLocalStorage(themeKey, themeValue)

  const handleTheme = () => {
    const nextTheme = storedValue === "light" ? "dark" : "light"
    setValue(nextTheme)
  }
  console.log("storedValue", storedValue)
  useEffect(() => {
    if (storedValue === "dark") {
      document.documentElement.classList.add(storedValue)
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [storedValue])

  return {storedTheme: storedValue, setTheme: setValue, handleTheme}
}

export default useTheme
