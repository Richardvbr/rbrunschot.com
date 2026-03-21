import Section from '@/components/shared/Section';

const Strava = () => {
  return (
    <Section heading="Strava" key="strava">
      <iframe
        title="Strava latest rides"
        height="500"
        width="100%"
        src="https://www.strava.com/athletes/131713293/latest-rides/063469890195119469a044a1891ed8904e354363"
      />
    </Section>
  );
};

export default Strava;
