import clsx from 'clsx';
import Text from '../Text';

const tabs = [
  {
    label: 'Home',
    value: 'home',
  },
  {
    label: 'About',
    value: 'about',
  },
  {
    label: 'Media',
    value: 'media',
  },
  {
    label: 'Contact',
    value: 'contact',
  },
];

const socials = [
  {
    title: 'Github',
    link: 'https://github.com/bikkku',
    src: 'github',
  },
  {
    title: 'Linkedin',
    link: 'https://www.linkedin.com/in/jchuiwnl/',
    src: 'linkedin',
  },
  {
    title: 'X / Twitter',
    link: 'https://x.com/bikkkkku',
    src: 'twitter',
  },
  {
    title: 'YouTube',
    link: 'https://www.youtube.com/@bikkku',
    src: 'youtube',
  },
  {
    title: 'Download CV',
    link: '/personal-website/JackChuCV.pdf',
    src: 'download',
  },
];

type NavbarProps = {
  className?: string;
};

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const onTabClick = (tab: string) => {
    const offset = 80;

    if (tab === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(tab);
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <div
      className={clsx(
        className,
        'w-[96.5%] h-12 bg-primary-dark shadow-2xl flex items-center px-12 rounded-4xl rounded-t-none z-20 flex justify-between'
      )}
    >
      <div className="flex h-fit -mt-2">
        {tabs.map((tab) => {
          return (
            <button key={tab.value} onClick={() => onTabClick(tab.value)}>
              <Text className="!text-sm font-bold mx-4 !text-accent hover:!text-accent-dark cursor-pointer">
                {tab.label}
              </Text>
            </button>
          );
        })}
      </div>
      <div className="flex h-fit -mt-2">
        {socials.map((social) => {
          return (
            <a
              key={social.src}
              href={social.link}
              target={social.src === 'download' ? '_self' : '_blank'}
              title={social.title}
              download={social.src === 'download' ? true : undefined}
            >
              <img
                src={`/personal-website/svg/socials/${social.src}.svg`}
                className="max-h-7 mx-4"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
