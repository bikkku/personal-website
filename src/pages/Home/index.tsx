import AboutSection from '../../components/AboutSection';
import HeroSection from '../../components/HeroSection';
import MediaSection from '../../components/MediaSection';
import Navbar from '../../components/Navbar';

function Home() {
  return (
    <>
      <Navbar className="fixed left-1/2 transform -translate-x-1/2" />
      <div className="w-full h-full min-h-screen bg-primary px-8 pt-4">
        <HeroSection />
        <AboutSection />
        <MediaSection />
      </div>
    </>
  );
}

export default Home;
