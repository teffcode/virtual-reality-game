import { createContext, useState } from 'react'

export const CarsContext = createContext()

export const CarsProvider = ({ children }) => {
    const [password, setPassword] = useState('')
    const [showComponent, setShowComponent] = useState(false)

    return (
        <CarsContext.Provider value={{
            password,
            setPassword,
            showComponent,
            setShowComponent
        }}>
          { children }
        </CarsContext.Provider>
      )
}