import { Stack, Typography, Grid, Divider } from '@mui/material'
import Section from 'components/sections/Section'
import { SectionHeader } from 'components/sections/Section'
import LanguageContext from 'components/context/LanguageContext'
import StyledHtmlMessage from 'components/ui/StyledHtmlMessage'
import { useContext } from 'react'

const iconSkills = {
  web: [{icon:'html5.svg',href:'https://en.wikipedia.org/wiki/HTML_5'}, {icon:'css3.svg',href:'https://en.wikipedia.org/wiki/Cascading_Style_Sheets'}, {icon:'react.svg', href:'https://reactjs.org/'}],
  lang: [{icon:'js.svg',href:'https://en.wikipedia.org/wiki/JavaScript'}, {icon:'java.svg',href:'https://en.wikipedia.org/wiki/Java_(programming_language)'}, {icon:'csharp.svg',href:'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)'}],
  ms: [{icon:'spring.svg',href:'https://spring.io/'}, {icon:'nodejs.svg',href:'https://nodejs.org/en/'}, {icon:'docker.svg',href:'https://www.docker.com/'}],
  db: [{icon:'sql.svg',href:'https://en.wikipedia.org/wiki/SQL'}, {icon:'postgres.svg',href:'https://www.postgresql.org/about/'}, {icon:'mysql.png',href:'https://www.mysql.com/'},{icon: 'mongodb.svg',href:'https://www.mongodb.com/'}],
  games: [{icon:'unity.svg',href:'https://unity.com/'}],
  tools: [{icon:'git.svg',href:'https://git-scm.com/'}, {icon:'github.svg', href:'https://github.com/'}]
}

export default function SectionSkills() {
  const { messages } = useContext(LanguageContext)
  const { skills } = messages

  return (
    <Section>
      <Stack direction={'column'} style={{marginBottom:'10px'}}>
        <SectionHeader msg={messages.headerSkills} />
        <Grid
          container
          alignContent={'space-around'}
          justifyContent={'start'}
          spacing={3}
        >
          {skills.map(({ id, title, description }) => {
            return (
              <Grid item key={title} xs={12} md={6} lg={4}>
                <Skill
                  title={title}
                  icons={iconSkills[id]}
                  text={description}
                />
              </Grid>
            )
          })}
        </Grid>
      </Stack>
      <Divider/>
    </Section>
  )
}

const Skill = ({ title, icons, text }) => {
  const description = text
    ? text
    : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

  if (icons == null) console.error('No icons for skill')

  return (
    <Stack direction={'column'} marginBottom={'15px'}>
      <Stack direction="row">
        {icons != null &&
          icons.map(({icon,href}) => {
            return (
              <a href={href}  key={icon} style={{padding:"0 2px"}}>
                <img
                  alt=""
                  src={`/icons/${icon}`}
                  width={'32px'}
                  height={'32px'}
                />
              </a>
            )
          })}
      </Stack>
      <Typography variant={'h3'} marginBottom={'2px'}>
        {title}{' '}
      </Typography>
      <StyledHtmlMessage variant="psmall" padding={'0px'} textAlign={'justify'} htmlText={description}/>
    </Stack>
  )
}