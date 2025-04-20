import AboutSection from '../../components/AboutSection';
import HeroSection from '../../components/HeroSection';
import Navbar from '../../components/Navbar';

function Home() {
  return (
    <>
      <Navbar className="fixed left-1/2 transform -translate-x-1/2" />
      <div className="w-full h-full min-h-screen bg-base px-8 pt-4">
        <HeroSection />
        <AboutSection />
      </div>
    </>
  );
}

export default Home;
