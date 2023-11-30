import { Assistant, Poppins, Satisfy, Dancing_Script } from 'next/font/google'
const poppins = Poppins({
  weight: '600',
  subsets: ['latin'],
  display: 'swap',
})
const satisfy = Satisfy({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const HeroPage = () => {
  return (
    <div className="w-full">
      <div className=" mt-7 md:ml-10 p-4">
        <h1
          className={`${poppins.className} md:text-8xl sm:text-4xl md:text-left text-center text-5xl  sm:w-9/12 leading-none `}
        >
          Find The best Barber Shop
        </h1>
        <span className={`${satisfy.className} text-8xl text-color mb-4 `}>
          for you
        </span>

        <p className={`md:p-4 text-center text-lg md:w-8/12 w-full mb-6`}>
          Haircut services for men and women. Here, the customers hair,
          scalp,Face and Body can be pampered with the best services and
          facilities
        </p>

        <button className="w-48 md:ml-52 ml-12 font-semibold text-xl p-4 bg-color text-gray-100 mt-4 mb-8">
          Book Now
        </button>

        <div className="flex justify-center items-center md:p-4 space-x-6">
          <div className="vertical-line">
            <div className="flex justify-center mr-4">
              <span className="text-color">+</span>
              <p className="font-bold md:text-3xl text-xl">10</p>
            </div>

            <small className="mr-4 text-center text-xs md:text-base">
              Years of experience
            </small>
          </div>

          <div className="vertical-line p-4 flex flex-col w-full md:w-2/6 ">
            <div className="flex justify-center ">
              <span className="text-color">+</span>
              <p className="font-bold md:text-3xl text-xl">70</p>
            </div>

            <small className=" text-center text-xs md:text-base">
              Our Awesome experts
            </small>
          </div>

          <div className="p-4 flex flex-col items-center w-full md:w-2/6">
            <div className="flex justify-center">
              <span className="text-color">+</span>
              <p className="font-bold md:text-3xl text-xl">10K</p>
            </div>
            <small className="mr-4 flex text-xs md:text-base">
              Happy customers
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroPage
