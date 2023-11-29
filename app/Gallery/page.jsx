'use client'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useState } from 'react'

const data = [
  {
    img:
      'https://images.unsplash.com/photo-1579748138140-ce9ef2c32db1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    title: 'title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodiaccusamus molestias quidem iusto',
  },
  {
    img:
      'https://images.unsplash.com/photo-1579639782539-15cc6c0be63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    title: 'title',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    img:
      'https://images.unsplash.com/photo-1603984362497-0a878f607b92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
    title: 'title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.',
  },
  {
    img:
      'https://images.unsplash.com/photo-1579748138140-ce9ef2c32db1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
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

const page = () => {
  const [selectImage, setSelectedImage] = useState(0)
  const handleimage = (index) => {
    setSelectedImage(index)
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
      <div className=" md:hidden">
        <Slider {...settings} className="gallery-container  w-screen">
          {data.map((item, index) => {
            return (
              <div className="box" key={index}>
                <div className="imgBx">
                  <img src={item.img} alt="" srcset="" />
                </div>
                <div className="content">
                  <button onClick={() => handleimage(index)}>
                    {item.title}
                  </button>
                </div>
              </div>
            )
          })}
        </Slider>

        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto mt-10 rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
          <div className="flex flex-col justify-between">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold leadi lg:text-5xl">
                Let's talk!
              </h2>
              <div className="dark:text-gray-400">
                Great choice !!, send us a message to proceed with your
                appointment:
              </div>
            </div>
            <img src={data[selectImage].img} alt="" className="p-6 h-44 " />
          </div>
          <form novalidate="" className="space-y-6">
            <div>
              <label for="name" className="text-sm">
                Full name
              </label>
              <input
                id="name"
                type="text"
                placeholder=""
                className="w-full p-3 rounded dark:bg-gray-800"
              />
            </div>
            <div>
              <label for="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-3 rounded dark:bg-gray-800"
              />
            </div>
            <div>
              <label for="message" className="text-sm">
                Message
              </label>
              <textarea
                id="message"
                rows="3"
                className="w-full p-3 rounded dark:bg-gray-800"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 text-sm font-bold tracki uppercase rounded dark:bg-violet-400 dark:text-gray-900"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default page
