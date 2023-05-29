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
    <>
        {
          images?.map((image, index) => (
            <LazyLoadComponent key={image.id+index+index}>
              <div className='container'>
                <Blurhash
                  key={image.id+index}
                  hash={image.hash}
                  width={300}
                  height={300}
                  resolutionX={32}
                  resolutionY={32}
                  className='item-1'
                />
                <LazyLoadImage
                  key={image.id}
                  alt={image.alt_description}
                  width={300}
                  height={300}
                  src={`${image.urls.small}`}
                  srcSet={`${image.urls.small} 400w, ${image.urls.regular} 1080w`}
                  sizes="(min-width: 1280px) 1080w, (max-width: 1280px) 1080vw, (max-width: 768px) 400vw"
                  afterLoad={() => handleImageLoad(index)}
                  className={imageLoaded[index] ? 'item-2 visible' : 'item-2 non-visible'} />
              </div>
            </LazyLoadComponent>
          ))
        }
    </>
  )
}

export default Cars