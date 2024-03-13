
function useDebounce(callback, delay) {
    const callbackRef = React.useRef(callback)
    React.useLayoutEffect(() => {
        //make sure that we're always calling the latest version of the callback rather than one from an old render
        callbackRef.current = callback
    })
    return React.useMemo(
        () => debounce((...args) => callbackRef.current(...args), delay),
        [delay],
    )
}
