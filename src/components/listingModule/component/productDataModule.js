'use client'

import { useState } from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'


// Images
import first from '../../../../public/images/product/product.png'
import second from '../../../../public/images/product/product1.png'
import third from '../../../../public/images/product/product2.png'
import fourth from '../../../../public/images/product/product3.png'

const images = [
  { src: first, alt: 'First' },
  { src: second, alt: 'Second' },
  { src: third, alt: 'Third' },
  { src: fourth, alt: 'Fourth' }
]

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

const ProductDataModule = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <section className='min-h-screen bg-black py-12'>
      <div className='container'>
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={false}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className='h-96 w-full rounded-lg'
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='flex h-full w-full items-center justify-center'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  className='block h-full w-full object-cover'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={12}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className='thumbs mt-3 h-32 w-full rounded-lg'
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} style={{marginLeft: "0px", marginRight:"0px", width: "60px"}}>
              <button className='flex h-full w-full items-center justify-center' style={{margin: "8px 0  0 8px"}}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  className='block h-full w-full object-cover'
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default ProductDataModule;