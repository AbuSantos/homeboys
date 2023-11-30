'use client'
import React from 'react'
import barb from '../../public/images/barb.jpg'
import cut from '../../public/images/cut.jpg'
import '../../styles/globall.css'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { useRouter } from 'next/navigation'

const images = [
  cut,
  barb,
  // 'https://images.unsplash.com/photo-1576398289164-c48dc021b4e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80',
  // 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
  // 'https://images.unsplash.com/photo-1524593166156-312f362cada0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',

  // 'https://images.unsplash.com/photo-1506917728037-b6af01a7d403?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80',
]

const HomeGallery = () => {
  const router = useRouter()

  return (
    <div className="flex flex-col justify-center items-center md:mr-40 p-4 md:p-0">
      <div className="relative home-gallery">
        <button
          onClick={() => router.push('/gallery')}
          style={{ borderRadius: '50%', lineHeight: '110%' }}
          className="absolute text-sm  text-gray-100 -left-10 top-56 flex items-center justify-start p-4 z-10 bg-black border-4 border-gray-100 h-20 w-20"
        >
          view more
        </button>

        {images.map((image, i) => (
          <div
            key={i}
            style={{
              backgroundImage: `url(${image.src})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              transform: `rotate(${i * 10}deg)`,
            }}
            className="hu__hu__ "
          ></div>
        ))}
      </div>
      <div className="mt-12 flex items-center space-x-8">
        <button
          style={{ borderRadius: '50%' }}
          className="h-14 w-14 border-color flex items-center justify-center "
        >
          <FaArrowLeftLong />
        </button>
        <p className="span-count text-xl">
          <span className="text-4xl font-bold text-black">02</span>/
          {images.length}
        </p>
        <button
          style={{ borderRadius: '50%' }}
          className="h-14 w-14 border-color flex items-center justify-center "
        >
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  )
}

export default HomeGallery
