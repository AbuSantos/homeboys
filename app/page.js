import HeroPage from "../app/home/HeroPage";
import HomeGallery from "../app/home/HomeGallery";

export const HomePage = () => {
  return (
    <div className="text-black md:flex sm:flex">
      <HeroPage />
      <HomeGallery />
    </div>
  );
};
export default HomePage;
