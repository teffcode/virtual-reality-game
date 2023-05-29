import React, { useEffect, useState } from 'react'

import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component'
import { Blurhash } from 'react-blurhash'

import 'react-lazy-load-image-component/src/effects/blur.css'
import './Cars.css'

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
    fetch('/cars.json')
        .then(res => res.json())
        .then(data => {
            setImages(data)
        })
        .catch(error => {
        console.error('Error:', error);
        });
}, []);

  return (
    <div className='cars'>
        <h2 className='cars__title'>CHOOSE YOUR CAR:</h2>
        <div className='cars__content'>
            {
                images?.map((image, index) => (
                    <LazyLoadComponent key={image.id+index+index}>
                        <div className='cars__image-container'>
                            <Blurhash
                                key={image.id+index}
                                hash={image.hash}
                                width={300}
                                height={300}
                                resolutionX={32}
                                resolutionY={32}
                                className='cars__blur' />
                            <LazyLoadImage
                                key={image.id}
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