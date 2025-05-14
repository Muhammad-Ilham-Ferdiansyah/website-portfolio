'use client'

import { DiJavascript, DiLaravel, DiMsqlServer } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListLogo, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider/>
    <SectionTitle $main>
      Technologies
    </SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development as long as Front End and Full Stack Developer.
    </SectionText>
    <List>
      <ListItem>
        <ListLogo>
        <DiJavascript size="3rem"/>
        </ListLogo>
        <ListContainer>
          <ListTitle>Front End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            JavaScript, React.js and Next.js
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
            Laravel and CodeIgniter
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListLogo>
        <DiMsqlServer size="3rem"/>
        </ListLogo>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Microsoft SQL Server, MySQL and MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
