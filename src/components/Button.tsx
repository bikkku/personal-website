import clsx from 'clsx';
import React from 'react';
import Text from './Text';

type ButtonProps = {
  children: string;
  className?: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      className={clsx(
        className,
        'text-lg font-bold px-6 py-2 bg-primary-dark hover:bg-secondary group rounded-l-full rounded-r-full max-w-fit cursor-pointer'
      )}
      onClick={() => onClick()}
    >
      <Text className="!text-accent group-hover:!text-accent-dark">
        {children}
      </Text>
    </button>
  );
};

export default Button;
