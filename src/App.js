import {
  Box,
  Stack,
} from '@mui/material'

import LandingContent from 'components/LandingContent'
import LanguagePicker from 'components/sections/Language/LanguagePicker'
import Nav from 'components/Nav'


function App() {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }}>
      <Nav />
      <Box flexGrow={'1'} position={'relative'}>
        <Box display={'flex'} alignItems={'center'} position={'absolute'} top={'10px'} right={'2rem'}>
        <LanguagePicker/>
        </Box>
      <LandingContent />
      </Box>
    </Stack>
  )
}

export default App
