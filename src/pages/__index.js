import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });


const Home = () => {
  return (
    <html lang='id-ID'>
      <head>
        <title>Ilham Ferdiansyah Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <body>
        <div className={inter.className}> {/* Apply the Inter font here */}
          <Layout>
            <Section grid>
              <Hero />
              <BgAnimation />
            </Section>
            <Projects />
            <Technologies />
            <Timeline />
            <Acomplishments />
          </Layout>
          </div>
      </body>
    </html>
  );
};

export default Home;
