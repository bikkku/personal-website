import Button from '../Button';
import NameDisplay from '../NameDisplay';
import Text from '../Text';

function HeroSection() {
  const onContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    <div className="flex justify-between gap-12 min-h-screen mt-12">
      <div className="w-full h-screen relative pb-40">
        <img
          alt="heroimg"
          src={'/personal-website/assets/trike.jpg'}
          className="object-cover w-full h-full mt-4 rounded-4xl"
        />
      </div>
      <div className="w-fit ml-auto flex flex-col py-4 text-right my-auto">
        <NameDisplay />
        <Text className="!text-xl !text-accent-dark font-bold !font-mono">
          Software Engineer based in AU/NZ
        </Text>
        <Button
          onClick={onContact}
          className="ml-auto mt-12"
          variant="inverted"
        >
          Contact Me
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
