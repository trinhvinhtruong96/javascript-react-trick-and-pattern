function useSwitch(initialState = false) {
  const [state, setState] = React.useState(initialState)

  // PAY ATTENTION HERE
  const handlers = React.useMemo(
    () => ({
      on: () => {
        setState(true)
      },
      off: () => {
        setState(false)
      },
      toggle: () => {
        setState(s => !s)
      },
      reset: () => {
        setState(initialState)
      },
    }),
    [initialState]
  )

  return [state, handlers]
}