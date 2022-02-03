import { useContext, useEffect, useState } from 'react'
import {
  Stack,
  Box,
  Divider,
  Hidden,
  Typography,
  IconButton,
  Collapse,
  Avatar
} from '@mui/material'
import { Menu } from '@mui/icons-material'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/styles'
import { SocialList } from 'components/SocialList'
import LanguageContext from 'components/context/LanguageContext'

export default function Nav() {
  const theme = useTheme()
  return (
    <Stack
      component="nav"
      minWidth={{ md: '250px' }}
      maxWidth={{ md: '300px' }}
      sx={{ backgroundColor: theme.palette.primary.main }}
      textAlign={'center'}
      width={{xs:"100%"}}
    >
      <NavSection>
        <Profile />
      </NavSection>
    </Stack>
  )
}

const NavSection = ({ children }) => {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {children}
      <Divider variant="middle" sx={{ width: '80%' }} />
    </Box>
  )
}

const Profile = () => {
  const theme = useTheme()
  const small = useMediaQuery(theme.breakpoints.down('md'))
  const [show, setShow] = useState()

  const {messages} = useContext(LanguageContext)
  //console.log(messages)

  useEffect(() => {
    //console.log(`sm value changed ${small}`)
    if (!small) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [small])

  return (
    <>
      <Box
        padding={'15px 0'}
        sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}
        className={'margin-bottom-1'}
      >
        <Hidden mdUp>
          <IconButton
            sx={{
              display: 'inline-flex',
              borderRadius: '0',
              padding: '0 10px'
            }}
            onClick={(e) => {
              setShow(!show)
            }}
          >
            <Menu
              htmlColor="white"
              style={{ fontSize: '36px', border: '2px solid white' }}
            />
          </IconButton>
        </Hidden>
        <Typography
          sx={{
            width: '100%',
            textAlign: 'center',
            color: 'white',
            fontWeight: '600'
          }}
          variant="h5"
        >
          Marc Simon
        </Typography>
      </Box>
      <Collapse in={show}>
      <Stack
        direction={'column'}
        justifyContent={'center'}
      >
        <Box display={'flex'} justifyContent={'center'}>
          <Avatar
            className={'margin-bottom-1'}
            alt="Marc Simon"
            src="/avatar.jpg"
            sx={{ height: '128px', width: '128px' }}
          />
        </Box>
        <Typography paragraph className={'margin-bottom-1 text-white'} color={'white'}>
         {messages.nav.presentation}
        </Typography>
        <SocialList />
      </Stack>
      </Collapse>
    </>
  )
}
