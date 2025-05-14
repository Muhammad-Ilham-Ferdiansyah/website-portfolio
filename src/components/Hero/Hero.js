'use client'

import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection, Image } from './HeroStyles';

const Hero = (props) => (
  <Section $row $nopadding>
    <LeftSection>
      <SectionTitle $main>
        Muhammad Ilham Ferdiansyah
      </SectionTitle>
      <SectionText>
      Results-driven Software Engineer and IT Consultant with over 3 years of professional experience in designing, developing, and implementing web applications and IT solutions. Proficient in a wide range of programming languages and frameworks including PHP,
      JavaScript, C#, ASP.NET, CodeIgniter, Laravel, AngularJS, ReactJS, Next.js, and Express.js. Skilled in managing relational and nonrelational
      databases such as Microsoft SQL Server, MySQL, and MongoDB. Adept at problem-solving, delivering client-focused solutions,
      and adapting to new technologies in dynamic environments.
      </SectionText>
      <Button onClick={() => window.open('https://github.com/Muhammad-Ilham-Ferdiansyah','_blank'
        )}>
        Learn more
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;