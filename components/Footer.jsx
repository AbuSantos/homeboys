import Image from 'next/image'
import star from '@/public/images/star.svg'
const services = [
  'Massage',
  'Manicure & Services',
  'Barbing',
  'Spa & Massage',
  'Massage',
  'Barbing',
]
export const Footer = () => {
  return (
    <>
      <div className="bg-black p-10 w-screen bottom-0 left-0 absolute transform -skew-y-2">
        <div className="flex space-x-12 justify-center">
          {services.map((service, index) => (
            <div key={index} className="flex space-x-12">
              <p className="text-gray-100 flex text-2xl">{service}</p>
              <Image src={star} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Footer
