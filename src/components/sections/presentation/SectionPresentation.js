import {useContext} from 'react'
import { Box, Typography, Stack } from '@mui/material'
import { makeStyles } from '@mui/styles'
import LanguageContext from 'components/context/LanguageContext'
import Section from 'components/sections/Section'
import { useTheme } from '@emotion/react'

const useStyles = makeStyles((theme) => ({
  profilePicture: {
    height: 'auto',
    maxWidth: '400px',
    [theme.breakpoints.down('lg')]: {
      maxWidth: '325px'
    }
  }
}))

export default function SectionPresentation() {
  const classes = useStyles()
  const {messages} = useContext(LanguageContext)
  const {palette} = useTheme()
  console.log(palette)
  
  return (
    <Section background={palette.background.secondary}>
      <Stack direction={{ xs: 'column', md: 'row' }} gap={'2rem'}>
        <Box>
          <Typography variant="h1" noWrap fontWeight={'bold'} paddingBottom={'15px'} sx={{color: 'primary.main'}}>
            Marc Simon
          </Typography>
          <Typography paragraph textAlign={'justify'}>
           { messages.landing.presentation}
          </Typography>
        </Box>
        <Box display={'flex'} justifyContent={'center'}>
          <img
            alt="Marc Simon"
            src={"https://picsum.photos/800/600"}
            className={classes.profilePicture}
          />
        </Box>
      </Stack>
    </Section>
  )
}
