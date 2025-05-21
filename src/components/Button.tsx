import clsx from 'clsx';
import React from 'react';
import Text from './Text';

type ButtonProps = {
  children: string;
  className?: string;
  variant?: 'primary' | 'inverted';
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  onClick,
}) => {
  return variant === 'primary' ? (
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
  ) : (
    <button
      className={clsx(
        className,
        'text-lg font-bold px-6 py-2 bg-accent-dark hover:bg-accent group rounded-l-full rounded-r-full max-w-fit cursor-pointer'
      )}
      onClick={() => onClick()}
    >
      <Text className="!text-primary group-hover:!text-primary-dark">
        {children}
      </Text>
    </button>
  );
};

export default Button;
