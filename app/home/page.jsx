import HeroPage from './HeroPage'
import HomeGallery from './HomeGallery'

export const Home = () => {
  return (
    <div className="text-black md:flex sm:flex">
      <HeroPage />
      <HomeGallery />
    </div>
  )
}
export default Home
