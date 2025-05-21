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
import { PhotoProvider, PhotoView } from 'react-photo-view';

function MediaSection() {
  return (
    <SectionContainer
      headerText="Media"
      headerClassName="ml-auto"
      innerClassName="flex flex-col md:flex-row md:justify-between md:gap-20 mb-12"
      id="media"
    >
      <div className="flex flex-col md:w-3/5">
        <Heading className="!text-3xl mb-2 !text-primary">
          Art & Animation
        </Heading>
        <LightGallery speed={400}>
          <img
            alt="totoro"
            src="/personal-website/assets/art/totoro.jpeg"
            className="rounded-full md:max-w-1/2 border-4 border-primary mt-4 cursor-pointer"
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
            like Mob Psycho, Ping Pong the animation, and many works from Studio
            Ghibli.
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
      <div className="w-full ml-auto md:max-w-2/5">
        <Text>
          Outside of software development, I love exploring creativity through
          digital media. This section showcases my work in gaming content, art,
          and animation. Whether through gameplay montages or original artwork,
          I enjoy using creative outlets to experiment, engage audiences, and
          just simply to express myself. The videos I make are just for fun,
          targeted mostly towards my friends, so videos may include inside
          jokes. Check out my channel{' '}
          <Link
            underline="focus"
            isExternal
            showAnchorIcon
            className="font-bold text-lg !text-blue-600"
            href="https://www.youtube.com/@bikkku"
          >
            here.
          </Link>
        </Text>

        <Text className="mt-4 -mb-2">
          Here's a featured YouTube video:{' '}
          <Text className="font-bold">Aristocrat Aimer (CS2 Montage)</Text>
        </Text>
        <div className="mx-auto 3 h-fit rounded-lg mt-4 border-4 border-primary">
          <LiteYouTubeEmbed id="n0wvf_vKtNs" title="Counter-Strike Montage" />
        </div>
        <Text className="mt-8 mb-4">
          One of my greatest passions is eSports, I love watching the pinnacle
          of video games I am interested in through both online live broadcasts
          as well as attending events in person when given the opportunity.
          Every aspect of eSports is exciting to me, from the anxious shuffling
          of rosters during the offseason, to the intensity of the winning
          moment during the biggest tournament of the year, and especially
          following the storylines and histories of the players and teams that
          create more exciting matchups.
        </Text>
        <Text className="mb-4">
          My favourite titles to watch are: Counter-Strike, League of Legends,
          and highly mechanical platform fighters such as Super Smash Bros.
          Melee and Rivals of Aether 2.
        </Text>

        <PhotoProvider>
          <div className="flex w-full">
            <div className="flex flex-col w-full mr-3">
              <PhotoView src={`/personal-website/assets/niko.jpg`}>
                <img
                  className="border-4 border-primary rounded-lg mb-4 cursor-pointer"
                  alt={'niko'}
                  src={`/personal-website/assets/niko.jpg`}
                />
              </PhotoView>
              <div className="rounded-full text-center bg-primary -mt-10 px-4 py-2 mx-auto">
                <Text className="!text-accent font-bold">
                  Photo with Nikola "Niko" Kovač
                </Text>
              </div>
            </div>

            <div className="flex flex-col justify-between -gap-y-1 max-w-1/2">
              <PhotoView src={`/personal-website/assets/IEMmelb.jpg`}>
                <img
                  className="border-4 border-primary rounded-lg mb-3 w-full max-h-1/2 cursor-pointer"
                  alt={'crowd'}
                  src={`/personal-website/assets/IEMmelb.jpg`}
                />
              </PhotoView>
              <PhotoView src={`/personal-website/assets/melb_desk`}>
                <img
                  className="border-4 border-primary rounded-lg mb-3 w-full max-h-1/2 cursor-pointer"
                  alt={'analysts'}
                  src={`/personal-website/assets/melb_desk.jpg`}
                />
              </PhotoView>
            </div>
          </div>
        </PhotoProvider>
      </div>
    </SectionContainer>
  );
}

export default MediaSection;
