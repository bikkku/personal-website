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
    <div className={clsx(className, 'flex w-full h-fit')}>
      <PhotoProvider>
        <PhotoView src={`/assets/gifs/${main.src}`}>
          <img
            className="border-4 border-primary rounded-lg mr-3 h-full w-3/4 my-auto mb-4 cursor-pointer"
            alt={main.alt}
            src={`/assets/gifs/${main.src}`}
          />
        </PhotoView>
        <div className="flex flex-col justify-between -gap-y-1">
          {images.map((item) => {
            return (
              <PhotoView src={`/assets/gifs/${item.src}`}>
                <img
                  className="border-4 border-primary rounded-lg mb-3 w-full max-h-1/3 cursor-pointer"
                  alt={item.alt}
                  src={`/assets/gifs/${item.src}`}
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
