import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection, Image } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Muhammad Ilham Ferdiansyah <br/> Portfolio
      </SectionTitle>
      <SectionText>
      Innovative Front End Web Developer with 2 years experience building and designing responsive websites in Project of Indonesian Postal Polytechnic. Proficient in HTML, CSS, JavaScript include libraries and framework;
      </SectionText>
      <Button onClick={() => window.open('https://github.com/Muhammad-Ilham-Ferdiansyah','_blank'
        )}>
        Learn more
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;