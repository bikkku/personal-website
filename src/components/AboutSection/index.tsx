import { Accordion, AccordionItem, Link } from '@heroui/react';

import Heading from '../Heading';
import Text from '../Text';

import { projects, skills } from './data';
import SectionContainer from '../SectionContainer';

function AboutSection() {
  return (
    <SectionContainer
      headerText="About Me"
      innerClassName=" flex flex-col lg:flex-row justify-between gap-12"
    >
      <div className="flex flex-col">
        <Text className="font-bold">Hello! My name is Jack.</Text>
        <Text className="mt-4">
          I'm a passionate and versatile software engineer with hands-on
          experience across both frontend and backend technologies. I specialize
          in building responsive, user-centric applications using modern
          frameworks and tools and I love to push my creativity.
        </Text>
        <Text className="mt-4">
          I build scalable frontend frameworks using common technologies, and I
          have worked on web applications in a startup environment. Here are a
          list of my skills:
        </Text>
        <div className="border border-4 border-primary px-32 rounded-l-full rounded-r-full w-full grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-2 bg-secondary mt-4 shadow-xl">
          {skills.map((skill) => {
            return (
              <div
                key={skill.id}
                className="flex group w-full max-w-36 aspect-square bg-accent rounded-4xl border-primary border-4 m-4 text-center items-center mx-auto"
              >
                <div className="flex flex-col m-auto">
                  <img
                    src={`/svg/skills/${skill.src}.svg`}
                    className="w-14 h-14 mx-auto"
                  />
                  <Text className="text-md text-primary font-bold font-mono">
                    {skill.label}
                  </Text>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full md:min-w-120 md:max-w-1/3 h-full">
        <Heading className="!text-3xl mb-2 !text-primary">Projects</Heading>
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
            className="font-bold text-lg !text-blue-600"
          >
            my GitHub
          </Link>
          <Text className="inline">.</Text>
        </div>

        <Accordion className="w-full !bg-primary" variant="shadow">
          {projects.map((project) => {
            return (
              <AccordionItem
                className="my-1 w-full"
                key={project.id}
                aria-label={project.title}
                title={
                  <Heading className="text-xl text-left !text-accent">
                    {project.title}
                  </Heading>
                }
                subtitle={
                  <Text className="font-bold !text-accent-dark">
                    {project.subtitle}
                  </Text>
                }
              >
                {
                  <Text className="!text-accent-dark mb-2">
                    {project.description}
                  </Text>
                }
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </SectionContainer>
  );
}

export default AboutSection;
