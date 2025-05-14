'use client'

import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/" style={{ display: "flex", alignItems:"center", color:"white", marginBottom:"20px", textDecoration: "none" }}>
          <DiCssdeck size="3rem"/> <Span>ilhamFerdiansyah</Span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects" style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '2rem', lineHeight: '32px', transition: '0.4s ease', textDecoration: 'none' }}>
          Projects
        </Link>
      </li>
      <li>
        <Link href="#tech" style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '2rem', lineHeight: '32px', transition: '0.4s ease', textDecoration: 'none' }}>
          Technologies
        </Link>
      </li>
      <li>
        <Link href="#about" style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '2rem', lineHeight: '32px', transition: '0.4s ease', textDecoration: 'none' }}>
          About
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/Muhammad-Ilham-Ferdiansyah' target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/muhammad-ilham-ferdiansyah/' target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://instagram.com/ilhamferdd' target="_blank">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
