import Background from './Background';
import Experience from './Experience';
import Projects from './Projects';
import Stack from './Stack';
import Certificates from './Certificates';
import Strava from './Strava';
import Education from './Education';
import Section from '@/components/shared/Section';
import ConnectLinks from '@/components/links/ConnectLinks';

const About = () => {
  return (
    <div className="pt-10 lg:pt-20">
      <h1 className="animate-in mb-10 lg:mb-20">About me</h1>
      <div
        className="animate-in flex flex-col gap-10 pb-10 lg:gap-20"
        style={{ '--index': 1 } as React.CSSProperties}
      >
        <Background />
        <Experience />
        <Projects />
        <Stack />
        <Certificates />
        <Education />
        <Section key="connect" heading="Connect">
          <ConnectLinks filled={false} center={false} />
        </Section>
        <Strava />
      </div>
    </div>
  );
};

export default About;
