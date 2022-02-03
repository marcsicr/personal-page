import {Stack} from '@mui/material'
import SectionPresentation from 'components/sections/presentation/SectionPresentation'
import SectionSkills from 'components/sections/skills/SectionSkills'
import SectionPortfolio from './sections/portfolio/SectionPortfolio'




export default function LandingContent() {
  
  return (
      <Stack direction={'column'}>
        <SectionPresentation />
        <SectionSkills />
        <SectionPortfolio/>
      </Stack>

  )
}
