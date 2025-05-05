import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import 'react-photo-view/dist/react-photo-view.css';
import Text from '../Text';
import SectionContainer from '../SectionContainer';
import Heading from '../Heading';
import LightGallery from 'lightgallery/react';
import { Link } from '@heroui/react';
import { fullbodies, stickfigures } from './data';
import Gallery from '../Gallery';

function MediaSection() {
  return (
    <SectionContainer
      headerText="Media"
      headerClassName="ml-auto"
      innerClassName="flex flex-col md:flex-row md:justify-between md:gap-20"
    >
      <div className="flex flex-col w-3/5">
        <Heading className="!text-3xl mb-2 !text-primary">
          Art & Animation
        </Heading>
        <LightGallery speed={400}>
          <img
            alt="totoro"
            src="/assets/art/totoro.jpeg"
            className="rounded-full md:max-w-1/2  mt-4 cursor-pointer"
          />
        </LightGallery>
        <div className="w-full">
          <Text className="mb-4 mt-8">
            I was heavily inspired by Hyun's Dojo during the era of stickfigure
            animations on platforms like NewGrounds, FluidAnims, and YouTube.
            During high school, I started to make my own stick figure
            animations. The learning curve was vast, but with my foundation in
            traditional art I adjusted to drawing on digital platforms quickly,
            and even made it on to one of Dojo's collab YouTube videos.
          </Text>
          <Gallery
            main={{ alt: 'comboprac4', src: 'comboprac4.gif' }}
            images={stickfigures}
          />
          <Text className="mb-4 mt-8">
            Later on, I began to expand my horizons and started working on more
            full-body animations. This is much more difficult and time consuming
            compared to stick figures, but I found the process of drawing frame
            by frame that much more rewarding when seeing the finished product.
            This time, I drew inspiration from professional Sakuga, which is a
            term used to describe particularly high-quality and striking
            animation sequences. My favourite sources of this come from shows
            like Mob Psycho, Hunter x Hunter, and Ping Pong the animation.
          </Text>
          <Gallery
            main={{ alt: 'saitama', src: 'saitama.gif' }}
            images={fullbodies}
          />
        </div>
        <Text className="mt-4">
          If you would like to see more, my full animation portfolio can be
          found on{' '}
          <Link
            underline="focus"
            isExternal
            showAnchorIcon
            className="font-bold text-lg !text-blue-600"
            href="https://aminoapps.com/c/hyunsdojo/page/user/bikku/W2g3_02skfk00vMvG8w8jYo0me55q62wEB"
          >
            Amino.
          </Link>
        </Text>
      </div>
      <div className="w-full ml-auto max-w-2/5">
        <Text>
          Outside of software development, I'm passionate about exploring
          creativity through digital media. This section showcases my work in
          gaming content, art, and animation. Whether through gameplay montages
          or original artwork, I enjoy using creative outlets to experiment,
          engage audiences, and continuously grow as a visual thinker.
        </Text>
        <div className="mx-auto 3 h-fit rounded-lg mt-4 border-4 border-primary">
          <LiteYouTubeEmbed id="n0wvf_vKtNs" title="Counter-Strike Montage" />
        </div>
      </div>
    </SectionContainer>
  );
}

export default MediaSection;
