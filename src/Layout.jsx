import React, { useContext, Suspense } from 'react'

import { CarsContext } from './Context'
import Form from './Form'

const Layout = () => {
    const context = useContext(CarsContext)
    const Cars = React.lazy(() => import('./Cars'))

    return (
        <>
            <Form />
            <Suspense fallback={<div>Cargando...</div>}>
                { context.showComponent ? <Cars /> : null }
            </Suspense>
        </>
    )
}

export default Layout