import {useMemo, useState} from "react"

interface Handlers {
  toggle: () => void
  toTrue: () => void
  toFalse: () => void
}

type UseToggle = [boolean, Handlers]

const useToggle = (initialState = false): UseToggle => {
  const [state, setState] = useState(initialState)

  const fns = useMemo(() => {
    return {
      toggle: (): void => {
        setState(prev => !prev)
      },
      toTrue: (): void => {
        setState(true)
      },
      toFalse: (): void => {
        setState(false)
      },
    }
  }, [])

  return [state, fns]
}

export default useToggle
