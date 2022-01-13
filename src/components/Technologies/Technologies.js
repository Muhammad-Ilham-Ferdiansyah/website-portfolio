import React from 'react';
import { DiCodeigniter, DiCss3, DiFirebase, DiHtml5, DiJavascript, DiLaravel, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListLogo, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider/>
    <SectionTitle main>
      Technologies
    </SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development as long as Front End and Full Stack Developer.
    </SectionText>
    <List>
      <ListItem>
        <ListLogo>
        <DiJavascript size="3rem"/>
        <DiReact size="3rem"/>
        </ListLogo>
        <ListContainer>
          <ListTitle>Front End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            JavaScript and React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListLogo>
        <DiCodeigniter size="3rem"/>
        </ListLogo>
        <ListContainer>
          <ListTitle>Full Stack</ListTitle>
          <ListParagraph>
            Experience with <br/>
            CodeIgniter and MySQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListLogo>
        <DiLaravel size="3rem"/>
        </ListLogo>
        <ListContainer>
          <ListTitle>Full Stack</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Laravel and MySQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
