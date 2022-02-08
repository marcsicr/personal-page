import Game from 'pages/Game'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box, Stack } from '@mui/material'
import Nav from 'components/Nav'
import LandingContent from 'pages/Landing'

function App() {
  return (
    <BrowserRouter>
    <Stack direction={{ xs: 'column', md: 'row' }} minHeight={{xs:'auto',md:'100vh'}}>
      <Nav />
      <Box flexGrow={'1'} position={'relative'}>
       
          <Routes>
            <Route path="/" element={<LandingContent />} />
            <Route path="/crossy" element={<Game />} />
            <Route path="*" element={<LandingContent />} />
          </Routes>
      </Box>
    </Stack>
    </BrowserRouter>
  )
}

export default App
