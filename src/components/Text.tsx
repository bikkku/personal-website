import clsx from 'clsx';
import React from 'react';

type TextProps = {
  children: React.ReactNode;
  className?: string;
};

const Text: React.FC<TextProps> = ({ children, className }) => {
  return (
    <div className={clsx(className, 'text-lg font-sans text-primary')}>
      {children}
    </div>
  );
};

export default Text;
