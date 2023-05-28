import React from 'react'

import { CarsProvider } from './Context'
import Layout from './Layout'

const App = () => {
  
  return (
    <CarsProvider>
      <Layout />
    </CarsProvider>
  )
}

export default App