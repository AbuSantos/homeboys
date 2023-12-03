import log from '@/public/images/log.png'
import barb from '@/public/images/barb.jpg'
import { useRouter } from 'next/navigation'

import { Assistant, Poppins, Satisfy, Dancing_Script } from 'next/font/google'
const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const Completed = ({ data, selectImage }) => {
  const router = useRouter()
  return (
    <div className="">
      <div
        tabIndex="-1"
        className="overflow-y-auto overflow-x-hidden fixed top-40 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-opacity-70 backdrop-filter backdrop-blur-sm"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative fadeIn bg-white rounded-lg shadow dark:bg-black">
            <button
              type="button"
              className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="popup-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLineJoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 md:p-5 text-center flex items-center flex-col">
              <div className="w-full">
                <img
                  src={data[selectImage]?.img.src}
                  alt="selected image"
                  className="w-full"
                />
              </div>
              <h3
                className={`${poppins.className} mb-5 text-lg font-normal text-gray-100 dark:text-gray-300 mt-3`}
              >
                Great choice, see you soon
              </h3>
              <button
                onClick={() => router.push('/home')}
                type="button"
                className="text-white bg-color focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
              >
                Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Completed
