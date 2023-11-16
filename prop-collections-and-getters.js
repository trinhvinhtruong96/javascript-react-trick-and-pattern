// Prop Collections and Getters
// The Prop Collections and Getters Pattern allows your hook to support common use cases for UI elements people build with your hook.
// Instead you have to remember a lot of property follow by different state of state, you can handle it in the hook with Prop Collections and Getters. In the example below you just need to pass getTogglerProps to component and it's already have aria-pressed value link to on state and the onClick handle
// http://localhost:3000/isolated/final/04.extra-1.js from epic react

import * as React from 'react'
import {Switch} from './components/switch'

const callAll = (...fns) => (...args) => fns.forEach(fn => fn?.(...args))

function useToggle() {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  function getTogglerProps({onClick, ...props} = {}) {
    return {
      'aria-pressed': on,
      onClick: callAll(onClick, toggle),
      ...props,
    }
  }

  return {
    on,
    toggle,
    getTogglerProps,
  }
}

function App() {
  const {on, getTogglerProps} = useToggle()
  return (
    <div>
      <Switch {...getTogglerProps({on})} />
      <hr />
      <button
        {...getTogglerProps({
          'aria-label': 'custom-button',
          onClick: () => console.info('onButtonClick'),
          id: 'custom-button-id',
        })}
      >
        {on ? 'on' : 'off'}
      </button>
    </div>
  )
}

export default App
