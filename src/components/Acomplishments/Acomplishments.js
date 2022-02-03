import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2020, text: 'Certified of The SAP Course - SAP01 - SAP Overview'},
  { number: 2021, text: 'Certified Data Science with Python - Intelligo.id', },
  { number: 2021, text: 'Head of Informatics Engineering Student Association ', },
  { number: 2021, text: 'Certified PHP with OOP-Based - Intelligo.id', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
