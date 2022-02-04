import {
  Box,
  Stack,
} from '@mui/material'

import LandingContent from 'components/LandingContent'
import Nav from 'components/Nav'


function App() {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }}>
      <Nav />
      <Box flexGrow={'1'} position={'relative'}>
      <LandingContent />
      </Box>
    </Stack>
  )
}

export default App
