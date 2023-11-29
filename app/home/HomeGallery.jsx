import React from 'react'
import ThreeImageStack from '@/components/ThreeImageStack'
import barb from '@/public/images/barb.jpg'
import cut from '@/public/images/cut.jpg'
import Image from 'next/image'
const images = [
  cut,
  barb,
  // 'https://images.unsplash.com/photo-1576398289164-c48dc021b4e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80',
  // 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
  // 'https://images.unsplash.com/photo-1524593166156-312f362cada0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',

  // 'https://images.unsplash.com/photo-1506917728037-b6af01a7d403?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80',
]

const HomeGallery = () => {
  return (
    <div className="flex justify-center items-center mr-40">
      <div style={{ width: 500, height: 500 }} className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center justify-start p-4 z-10">
          <p className="text-red-300">This is</p>
        </div>

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
    </div>
  )
}

export default HomeGallery
