import { useContext } from 'react'
import Section, { SectionHeader } from 'components/sections/Section'
import { Grid } from '@mui/material'
import LanguageContext from 'components/context/LanguageContext'

import PortfolioItem from 'components/sections/portfolio/PortfolioItem'
import imgs from './imgs.json'

export default function SectionPortfolio() {
  const { messages } = useContext(LanguageContext)
  const { headerPortfolio, projects } = messages

  return (
    <Section>
      <SectionHeader msg={headerPortfolio} />
      <Grid container spacing={2}>
        {projects.map(({ id, title, description }) => {
          const projectImages = imgs[id]
          const { pics,sm } = projectImages
          
          return (
            <Grid key={id} item xs={12} md={6} marginBottom={'3rem'}>
              <PortfolioItem
                id={id}
                title={title}
                description={description}
                pic={sm}
                gallery={pics}
              />
            </Grid>
          )
        })}
      </Grid>
    </Section>
  )
}