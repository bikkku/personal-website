import clsx from 'clsx';
import Text from './Text';

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

type NavbarProps = {
  className?: string;
};

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <div
      className={clsx(
        className,
        'w-[96.5%] h-12 bg-primary-dark shadow-2xl flex items-center px-12 rounded-4xl rounded-t-none z-20'
      )}
    >
      {tabs.map((tab) => {
        return (
          <button key={tab.value}>
            <Text className="!text-sm font-bold mx-4 !text-accent hover:!text-accent-dark cursor-pointer">
              {tab.label}
            </Text>
          </button>
        );
      })}
    </div>
  );
};

export default Navbar;
