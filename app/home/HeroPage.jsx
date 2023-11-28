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
      <div className=" mt-14 ml-10 p-4">
        <h1 className={`${poppins.className} text-9xl w-8/12 leading-none `}>
          Find The best Barber Shop
        </h1>
        <span className={`${satisfy.className} text-8xl text-color mb-4 `}>
          for you
        </span>

        <p className={`p-4 text-lg w-5/12`}>
          Haircut services for men and women. Here, the customers hair,
          scalp,Face and Body can be pampered with the best services and
          facilities
        </p>

        <button className="w-32 ml-28 font-semibold p-3 bg-color text-gray-100">
          Book Now
        </button>

        <div className="flex p-4 space-x-6">
          <div className="vertical-line p-4 ">
            <div className="flex justify-center mr-4">
              <span>+</span>
              <h1>10</h1>
            </div>
            <small className="mr-4 w-16 text-base">Years of experience</small>
          </div>
          <div className="vertical-line p-4 ">
            <div className="flex justify-center ">
              <span>+</span>
              <h1 className="font-semibold">70</h1>
            </div>
            <small>Our Awesome experts</small>
          </div>
          <div className="p-4">
            <div className="flex justify-center">
              <span>+</span>
              <h1 className="font-semibold">10K</h1>
            </div>
            <small>Happy customers</small>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default HeroPage
