// Code splitting
// Only load GLobal component when showGlobe = true
// http://localhost:3000/isolated/final/01.js

import * as React from 'react'

// With /* webpackPrefetch: true */, webpack tell browser to prefetch dynamic import
// const Globe = React.lazy(() => import(/* webpackPrefetch: true */ '../globe'))
const Globe = React.lazy(() => import('../globe'))

function App() {
  const [showGlobe, setShowGlobe] = React.useState(false)

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        padding: '2rem',
      }}
    >
      <label style={{marginBottom: '1rem'}}>
        <input
          type="checkbox"
          checked={showGlobe}
          onChange={e => setShowGlobe(e.target.checked)}
        />
        {' show globe'}
      </label>
      <div style={{width: 400, height: 400}}>
        <React.Suspense fallback={<div>loading globe...</div>}>
          {showGlobe ? <Globe /> : null}
        </React.Suspense>
      </div>
    </div>
  )
}

export default App
