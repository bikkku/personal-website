import clsx from 'clsx';
import React from 'react';
import Text from './Text';

type ButtonProps = {
  children: string;
  className?: string;
  variant?: 'primary' | 'inverted';
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button' | undefined;
};

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  onClick,
  type = undefined,
}) => {
  const buttonStyles =
    'text-lg font-bold px-6 py-2 group rounded-l-full rounded-r-full max-w-fit cursor-pointer';
  return variant === 'primary' ? (
    <button
      type={type}
      className={clsx(
        className,
        buttonStyles,
        'bg-primary-dark hover:bg-secondary'
      )}
      onClick={() => onClick?.()}
    >
      <Text className="!text-accent group-hover:!text-accent-dark">
        {children}
      </Text>
    </button>
  ) : (
    <button
      className={clsx(
        className,
        buttonStyles,
        'bg-accent-dark hover:bg-accent'
      )}
      onClick={() => onClick?.()}
    >
      <Text className="!text-primary group-hover:!text-primary-dark">
        {children}
      </Text>
    </button>
  );
};

export default Button;
