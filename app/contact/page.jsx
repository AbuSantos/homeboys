'use client'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useEffect, useState } from 'react'
import '../../styles/globall.css'
import barb from '../../public/images/barb.jpg'
import cut from '../../public/images/cut.jpg'
import hair from '../../public/images/hair.jpg'
import gal1 from '../../public/images/gal1.jpg'
import { Poppins, Dancing_Script } from 'next/font/google'
import Completed from '@/components/Completed'

const satisfy = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
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

const Contact = () => {
  const [selectImage, setSelectedImage] = useState(null)
  const [show, setShow] = useState(false)
  const [complete, setComplete] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const initial = {
    fullname: '',
    email: '',
    message: '',
    selectStyle: selectImage,
  }

  const [details, setDetails] = useState({ ...initial })

  const handleImage = (index) => {
    setShow(false)
    setTimeout(() => {
      setSelectedImage(index)
      setDetails((details.selectStyle = index))
      setShow(true)
    }, 500)
  }
  const handleShow = () => {
    setShowModal(true)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(details),
      })

      const data = await res.json()
      if (data.success) {
        setShowModal(true)
        console.log('Form submitted successfully!')
        // Add any additional logic or redirect after successful submission
      } else {
        console.error('Error submitting form.')
        // Handle the error appropriately
      }
    } catch (error) {
      console.error('Error submitting form.', error)
    }

    console.log(details)
    setDetails({
      fullname: '',
      email: '',
      message: '',
      selectStyle: null,
    })
  }

  return (
    <div>
      <div className="mt-8 hidden md:inline-flex items-center justify-center  md">
        <div className="gallery mt-30 md:w-5/6 ">
          <ul className="list-none grid grid-cols-2 md:grid-cols-7 items-center">
            {data.map((item, index) => {
              return (
                <li key={index}>
                  <img src={item.img.src} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="md:hidden">
        <h1
          className={`${satisfy.className} md:text-4xl  md:text-left text-center text-xl  sm:w-9/12 leading-none `}
        >
          Please scroll down to select a hair Style
        </h1>
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
          {showModal && <Completed data={data} selectImage={selectImage} />}

          <form noValidate="" className="space-y-2" onSubmit={handleSubmit}>
            <div>
              <input
                onChange={(e) =>
                  setDetails((s) => ({ ...s, fullname: e.target.value }))
                }
                value={details.fullname}
                type="text"
                placeholder=" Full Name"
                className="w-full p-3 rounded dark:bg-gray-800 "
              />
            </div>
            <div>
              <input
                onChange={(e) =>
                  setDetails((s) => ({ ...s, email: e.target.value }))
                }
                value={details.email}
                className="w-full p-3 rounded dark:bg-gray-800"
                placeholder="email/phone number"
              />
            </div>
            <div>
              <textarea
                onChange={(e) => {
                  setDetails((s) => ({ ...s, message: e.target.value }))
                }}
                value={details.message}
                id="message"
                rows="3"
                className="w-full p-3 rounded dark:bg-gray-800 text-gray-400"
                placeholder=" any special request?  "
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 text-sm font-bold tracki uppercase rounded bg-color dark:text-gray-100"
            >
              Send Message
            </button>
          </form>
        </div>
        <Slider {...settings} className="gallery-container  w-screen ">
          {data.map((item, index) => {
            return (
              <div className="box" key={index}>
                <div className="imgBx">
                  <img src={item.img.src} alt="this is an alt" srcset="" />
                </div>
                <div className="content ">
                  <button onClick={() => handleImage(index)}>
                    {item.title}
                  </button>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default Contact
