function useDebounce(callback, delay) {
  const callbackRef = React.useRef(callback)

  // Keep update the ref to the latest ref
  // Because the callback can be the previous callback from previous render
  React.useLayoutEffect(() => {
    callbackRef.current = callback
  })

  return React.useMemo(
    () => debounce((...args) => callbackRef.current(...args), delay),
    [delay],
  )
}