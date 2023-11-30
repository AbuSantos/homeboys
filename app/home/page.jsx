import HeroPage from './HeroPage'
import HomeGallery from './HomeGallery'

export const HomePage = () => {
  return (
    <div className="text-black md:flex sm:flex">
      <HeroPage />
      <HomeGallery />
    </div>
  )
}
export default HomePage
