import { Accordion, AccordionItem, Link } from '@heroui/react';

import Heading from './Heading';
import Text from './Text';

const projects = [
  {
    id: 'songdle',
    title: 'Songdle',
    subtitle: 'MERN, TailwindCSS',
    description:
      "A web application clone of 'Heardle,' using Spotify account integration instead of SoundCloud. " +
      'Working with a team of 5 over 10 weeks, we followed Agile methodology with bi-weekly sprints. I was personally responsible for all frontend development, ' +
      'using frameworks like TailwindCSS, HeadlessUI, and MaterialUI in React for all styling. Other areas of our tech stack included MongoDB, Axios, Jest for testing, and Spotify Web API.',
  },
  {
    id: 'peercrastinate',
    title: 'Peercrastinate',
    subtitle: 'Java, Android Studio, MongoDB',
    description:
      "An android app developed in Java during a SESA x WDCC Hackathon in the span of 2 days, where the theme was 'Pro'-crastination, " +
      "attempting to encourage less productivity. The app tracks and compares users' phone activity and the winner gets money from a pot which accumulates from users placing bets. " +
      'Final product was presented to a room of 50+ participants and judges alongside my 4 teammates.',
  },
  {
    id: 'tetris',
    title: "'Tetris' Recreation",
    subtitle: 'Java, Swing, Aseprite',
    description:
      'An early project of mine, trying to apply everything I learnt during my studies to create a simple rendition of Tetris in Java. ' +
      'The frontend was created using Java Swing libraries, and custom sprites made using Aseprite (2D pixel art app). ' +
      'Backend consists of transposing algorithms that manipulate a 2D array.',
  },
  {
    id: 'coffeebot',
    title: 'Coffee Bot',
    subtitle: 'Java, JDA',
    description:
      'A Discord bot, made using JDA3 (Java Discord API) for personal use. Has functionalities such as creating polls, ' +
      'pulling video game profiles, message interactions, and other text-based commands.',
  },
];

function AboutSection() {
  return (
    <div className="w-full h-full flex flex-col">
      <Heading className="">About Me</Heading>
      <div className="border border-2 border-teal-dark bg-mint-light rounded-4xl p-8 mt-4 flex flex-col lg:flex-row justify-between gap-12">
        <div className="flex flex-col">
          <Text className="font-bold">Hello! My name is Jack.</Text>
          <Text className="mt-4">
            I'm a passionate and versatile software engineer with hands-on
            experience across both frontend and backend technologies. I
            specialize in building responsive, user-centric applications using
            modern frameworks and tools and I love to push my creativity.
          </Text>
          <Text className="mt-4">
            I build scalable frontend frameworks using common technologies, and
            I have worked on web applications in a startup environment. Here are
            a list of my <Text className="font-bold inline">skills</Text>:
          </Text>
        </div>
        {/* <img
          alt="heroimg"
          src={'/assets/kirby.jpg'}
          className="object-cover w-1/4 h-auto rounded-lg"
        /> */}
        <div className="w-full md:min-w-120 md:max-w-1/3 h-full">
          <Heading className="!text-3xl mb-2">Projects</Heading>
          <div className="mb-8 w-full">
            <Text className="inline">
              The following projects (if public), including the source code for
              this web page, can be found on{' '}
            </Text>
            <Link
              underline="focus"
              isExternal
              showAnchorIcon
              href="https://github.com/bikkku"
              className="font-bold text-lg"
            >
              my GitHub
            </Link>
            <Text className="inline">.</Text>
          </div>

          <Accordion className="w-full !bg-teal-dark" variant="shadow">
            {projects.map((project) => {
              return (
                <AccordionItem
                  className="my-1 w-full"
                  key={project.id}
                  aria-label={project.title}
                  title={
                    <Heading className="text-xl text-left !text-mint">
                      {project.title}
                    </Heading>
                  }
                  subtitle={
                    <Text className="font-bold text-teal-light">
                      {project.subtitle}
                    </Text>
                  }
                >
                  {
                    <Text className="text-mint mb-2">
                      {project.description}
                    </Text>
                  }
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
