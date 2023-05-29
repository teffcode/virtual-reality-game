import React, { useEffect, useState } from 'react'

import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component'
import { Blurhash } from 'react-blurhash'

import 'react-lazy-load-image-component/src/effects/blur.css'
import './styles.css'

const Cars = () => {
    const [images, setImages] = useState()
    const [imageLoaded, setImageLoaded] = useState([])

    const handleImageLoad = (index) => {
        setImageLoaded((prevLoaded) => {
            const loaded = [...prevLoaded]
            loaded[index] = true
            return loaded
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/cars.json')
                const data = await response.json()
                setImages(data)
            } catch (error) {
                console.error('Error:', error)
            }
        }

        fetchData()
    }, [])

  return (
    <div className='cars'>
        <h2 className='cars__title'>CHOOSE YOUR VIRTUAL CAR</h2>
        <div className='cars__content'>
            {
                images?.map((image, index) => (
                    <LazyLoadComponent key={image.id}>
                        <div className='cars__image-container'>
                            <Blurhash
                                hash={image.hash}
                                width={300}
                                height={300}
                                resolutionX={32}
                                resolutionY={32}
                                className='cars__blur' />
                            <LazyLoadImage
                                alt={image.alt_description}
                                width={300}
                                height={300}
                                src={`${image.urls.small}`}
                                srcSet={`${image.urls.small} 400w, ${image.urls.regular} 1080w`}
                                sizes="(min-width: 1280px) 1080w, (max-width: 1280px) 1080vw, (max-width: 768px) 400vw"
                                afterLoad={() => handleImageLoad(index)}
                                className={imageLoaded[index] ? 'cars__lazy-load visible' : 'cars__lazy-load non-visible'} />
                            <p className='cars__name'>{image.alt_description}</p>
                        </div>
                    </LazyLoadComponent>
                ))
            }
        </div>
    </div>
  )
}

export default Cars