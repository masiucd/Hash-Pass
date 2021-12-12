import {
  createContext,
  Dispatch,
  FC,
  useContext,
  useEffect,
  useState,
} from "react"

interface ThemeCtxType {
  theme: Theme
  changeTheme: (t: Theme) => void
}

const ThemeContext = createContext<ThemeCtxType | undefined>(undefined)

export type Theme = "dark" | "light"

export const ThemeProvider: FC = ({children}) => {
  const [theme, setTheme] = useState<Theme>("light")

  const changeTheme = (t: Theme): void => {
    const root = window.document.documentElement
    const isDark = t === "dark"
    setTheme(isDark ? "light" : "dark")
    root.classList.remove(isDark ? "light" : "dark")
    root.classList.add(t)
    localStorage.setItem("theme", t)
  }

  // useEffect(() => {
  //   changeTheme(theme)
  // }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeCtxType => {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error("useTheme needs to be wrapped inside ThemeProvider")
  }
  return ctx
}
