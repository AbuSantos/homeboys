'use client'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useEffect, useState } from 'react'
import '../globall.css'
import barb from '../../public/images/barb.jpg'
import cut from '../../public/images/cut.jpg'
import gal from '../../public/images/gal.jpg'
import hair from '../../public/images/hair.jpg'
import gal1 from '../../public/images/gal1.jpg'

const data = [
  {
    img: barb,
    title: 'fades',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodiaccusamus molestias quidem iusto',
  },
  {
    img: cut,
    title: 'fade',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    img: gal,
    title: 'title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.',
  },
  {
    img: hair,
    title: 'title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodiaccusamus molestias quidem iusto',
  },
  {
    img: gal1,
    title: 'title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodiaccusamus molestias quidem iusto',
  },
]

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
}

const colors = [
  'linear-gradient(180deg, rgb(0, 255, 17), #000)',
  'linear-gradient(180deg, rgb(255, 81, 0), #000)',
  'linear-gradient(180deg, rgba(251, 255, 0, 0.742), #000) ',
  'linear-gradient(180deg, rgba(4, 0, 255, 0.742), #000) ',
  'linear-gradient(180deg, rgba(255, 0, 212, 0.742), #000)',
]

const Gallery = () => {
  const [selectImage, setSelectedImage] = useState(null)
  const [show, setShow] = useState(false)

  const handleImage = (index) => {
    setShow(false)
    setTimeout(() => {
      setSelectedImage(index)
      setShow(true)
    }, 500)
  }

  return (
    <div>
      <div className="mt-8 hidden md:inline-flex items-center justify-center  md">
        <div className="gallery mt-30 md:w-5/6 ">
          <ul className="list-none grid grid-cols-2 md:grid-cols-7 items-center">
            <li>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/9.png" />
            </li>
            <li>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/2.png" />
            </li>
            <li>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/3.png" />
            </li>
            <li>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/1.png" />
            </li>
            <li>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/4.png" />
            </li>
            <li>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/5.png" />
            </li>
            <li>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/7.png" />
            </li>
            <li>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/8.png" />
            </li>
            <li>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/6.png" />
            </li>
          </ul>
        </div>
      </div>
      <div className="md:hidden">
        <Slider {...settings} className="gallery-container  w-screen ">
          {data.map((item, index) => {
            return (
              <div className="box" key={index}>
                <div className="imgBx">
                  <img src={item.img.src} alt="this is an alt" srcset="" />
                </div>
                <div className="content">
                  <button onClick={() => handleImage(index)}>
                    {item.title}
                  </button>
                </div>
              </div>
            )
          })}
        </Slider>
        <div
          style={{
            backgroundImage: `url(${hair.src})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%',
          }}
          className={`inset-0 grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-8 mx-auto mt-10 rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  dark:text-gray-100 `}
        >
          <div
            className={`flex flex-col justify-between fadeIn ${
              show ? 'visible' : 'hidden'
            } `}
          >
            <img
              src={data[selectImage]?.img.src}
              alt=""
              className={`p-6 w-60 ${show ? 'visible' : 'hidden'} `}
            />
          </div>
          <form novalidate="" className="space-y-2">
            <div>
              <input
                type="text"
                placeholder=" Full Name"
                className="w-full p-3 rounded dark:bg-gray-800 "
              />
            </div>
            <div>
              <input
                className="w-full p-3 rounded dark:bg-gray-800"
                placeholder="email/phone number"
              />
            </div>
            <div>
              <textarea
                id="message"
                rows="3"
                className="w-full p-3 rounded dark:bg-gray-800 text-gray-400"
                placeholder=" any special request?  "
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 text-sm font-bold tracki uppercase rounded bg-color dark:text-gray-900"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Gallery
