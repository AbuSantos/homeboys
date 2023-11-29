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
      <div className=" mt-7 ml-10 p-4">
        <h1 className={`${poppins.className} text-8xl w-9/12 leading-none `}>
          Find The best Barber Shop
        </h1>
        <span className={`${satisfy.className} text-8xl text-color mb-4 `}>
          for you
        </span>

        <p className={`p-4 text-lg w-8/12 mb-6`}>
          Haircut services for men and women. Here, the customers hair,
          scalp,Face and Body can be pampered with the best services and
          facilities
        </p>

        <button className="w-48 ml-52 font-semibold text-xl p-4 bg-color text-gray-100 mt-12 mb-8">
          Book Now
        </button>

        <div className="flex p-4 space-x-6">
          <div className="vertical-line p-4 ">
            <div className="flex justify-center mr-4">
              <span className="text-color">+</span>
              <p className="font-bold text-3xl">10</p>
            </div>
            <small className="mr-4 w-16 text-base">Years of experience</small>
          </div>

          <div className="vertical-line p-4 ">
            <div className="flex justify-center ">
              <span className="text-color">+</span>
              <p className="font-bold text-3xl">70</p>
            </div>
            <small className="mr-4 w-16 text-base">Our Awesome experts</small>
          </div>

          <div className="p-4">
            <div className="flex justify-center">
              <span className="text-color">+</span>
              <p className="font-bold text-3xl">10K</p>
            </div>
            <small className="mr-4 w-16 text-base">Happy customers</small>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default HeroPage
