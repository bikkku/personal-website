import clsx from 'clsx';
import React from 'react';

type HeadingProps = {
  children: string;
  className?: string;
};

const Heading: React.FC<HeadingProps> = ({ children, className }) => {
  return (
    <h1 className={clsx(className, 'text-5xl font-mono font-bold text-accent')}>
      {children}
    </h1>
  );
};

export default Heading;
