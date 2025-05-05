import clsx from 'clsx';
import React from 'react';

type TextProps = {
  children: React.ReactNode;
  className?: string;
};

const Text: React.FC<TextProps> = ({ children, className }) => {
  return (
    <p className={clsx(className, 'text-lg font-sans text-primary')}>
      {children}
    </p>
  );
};

export default Text;
