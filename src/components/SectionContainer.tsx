import clsx from 'clsx';
import React from 'react';
import Heading from './Heading';

type SectionContainerProps = {
  children: React.ReactNode;
  headerText: string;
  className?: string;
  headerClassName?: string;
  innerClassName?: string;
};

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  headerText,
  className,
  headerClassName,
  innerClassName,
}) => {
  return (
    <div
      className={clsx(className, 'w-full h-full flex flex-col min-h-screen')}
    >
      <Heading className={clsx(headerClassName)}>{headerText}</Heading>
      <div
        className={clsx(
          innerClassName,
          'border border-6 border-primary-dark bg-accent rounded-4xl p-8 mt-4'
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default SectionContainer;
