import React, { lazy, Suspense } from 'react'

import { CarsProvider } from './Context'
import Loading from './Loading'

const App = () => {
  const Layout = lazy(() => import('./Layout'))
  
  return (
    <Suspense fallback={<Loading />}>
      <CarsProvider>
        <Layout />
      </CarsProvider>
    </Suspense>
  )
}

export default App