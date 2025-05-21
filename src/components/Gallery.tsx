import clsx from 'clsx';
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { ImageType } from './MediaSection/data';

type GalleryProps = {
  images: ImageType[];
  main: ImageType;
  className?: string;
};

const Gallery: React.FC<GalleryProps> = ({ className, main, images }) => {
  return (
    <div
      className={clsx(className, 'flex justify-between w-full h-fit max-h-fit')}
    >
      <PhotoProvider>
        <PhotoView src={`/personal-website/assets/gifs/${main.src}`}>
          <img
            className="border-4 border-primary rounded-lg mr-3 h-full min-w-3/4 mb-4 cursor-pointer"
            alt={main.alt}
            src={`/personal-website/assets/gifs/${main.src}`}
          />
        </PhotoView>
        <div className="flex flex-col justify-between max-h-fit gap-[7.05px]">
          {images.map((item) => {
            return (
              <PhotoView
                key={item.src}
                src={`/personal-website/assets/gifs/${item.src}`}
              >
                <img
                  className="border-4 border-primary rounded-lg w-full cursor-pointer"
                  alt={item.alt}
                  src={`/personal-website/assets/gifs/${item.src}`}
                />
              </PhotoView>
            );
          })}
        </div>
      </PhotoProvider>
    </div>
  );
};

export default Gallery;
