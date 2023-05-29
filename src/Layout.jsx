import React, { useContext, Suspense } from 'react'

import { CarsContext } from './Context'
import Form from './Form'
import Loading from './Loading'

import './Layout.css'

const Layout = () => {
    const context = useContext(CarsContext)
    const Cars = React.lazy(() => import('./Cars'))

    return (
        <div className='layout'>
            <div className='layout__image'></div>
            <div className='layout__content'>
                <Suspense fallback={<Loading />}>
                    { context.showComponent ? <Cars /> : <Form /> }
                </Suspense>
            </div>
        </div>
    )
}

export default Layout