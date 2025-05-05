import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import Text from '../Text';
import SectionContainer from '../SectionContainer';

function MediaSection() {
  return (
    <SectionContainer
      headerText="Media"
      headerClassName="ml-auto"
      innerClassName="flex flex-col"
    >
      <Text>
        Outside of software development, I'm passionate about exploring
        creativity through digital media. This section showcases my work in
        gaming content, art, and animation. Whether through gameplay montages or
        original artwork, I enjoy using creative outlets to experiment, engage
        audiences, and continuously grow as a visual thinker.
      </Text>
      <div className="w-full md:w-2/3 h-full">
        <LiteYouTubeEmbed id="n0wvf_vKtNs" title="Counter-Strike Montage" />
      </div>
    </SectionContainer>
  );
}

export default MediaSection;
