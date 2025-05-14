'use client'

import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2020, text: 'Certified of The SAP Course - SAP01 - SAP Overview'},
  { number: 2021, text: 'Certified of The SAP Course - SAP01 - SAP Overview'},
  { number: 2022, text: 'Teknisi Muda Jaringan Komputer - BNSP ', },
  { number: 2023, text: 'Cloud Practitioner Essentials - Dicoding', },
  { number: 2023, text: 'Basics of JavaScript Programming - Dicoding', },
  { number: 2023, text: 'Basics of Web Programming - Dicoding', },
  { number: 2023, text: 'Learning to create Beginner Front-End Web - Dicoding', },
  { number: 2024, text: 'Beginner Back-End Learning with JavaScript - Dicoding', },
  { number: 2024, text: 'Programming using Dart - Dicoding', },
  { number: 2024, text: 'Create Flutter Applications for Beginners - Dicoding', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Licenses and Certifications</SectionTitle>
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
