import React, { lazy, Suspense } from 'react'

import { CarsProvider } from './Context'

const App = () => {
  const Layout = lazy(() => import('./Layout'))
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CarsProvider>
        <Layout />
      </CarsProvider>
    </Suspense>
  )
}

export default App