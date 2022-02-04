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
import { styled } from '@mui/material/styles'
import LanguagePicker from 'components/sections/Language/LanguagePicker'


const NavArea = styled(Stack)(({ theme }) => ({
  padding:'0 25px',
  backgroundColor: theme.palette.primary.main,
  textAlign:'center',
  maxWidth:'100%',
  [theme.breakpoints.up('md')]: {
    maxWidth:'300px'
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth:'325px'
  }
}))



export default function Nav() {
  const theme = useTheme()
  const small = useMediaQuery(theme.breakpoints.down('md'))
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (!small) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [small])

  return (
    <NavArea component="nav">
      <Box
        padding={'15px 0'}
        sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}
        className={'margin-bottom-1'}
      >
        <MenuButton showMenu={setShow} show={show} />
        <NameHeadear name={"Marc Simon"}/>
      </Box>

      <Collapse in={show}>
        <NavSection>
          <Profile name={"Marc Simon"} urlPic={"/avatar.jpg"} />
        </NavSection>
        <LanguagePicker/>
      </Collapse>
    </NavArea>
  )
}

const NameHeadear = ({name}) =>{
  return  <Typography
  sx={{
    width: '100%',
    textAlign: 'center',
    color: 'white',
    fontWeight: '600'
  }}
  variant="h5"
>
  {name}
</Typography>
}

const MenuButton = ({ showMenu, show }) => {
  return (
    <Hidden mdUp>
      <IconButton
        sx={{
          display: 'inline-flex',
          borderRadius: '0',
          padding: '0 10px'
        }}
        onClick={(e) => {
          showMenu(!show)
          console.log(!show)
        }}
      >
        <Menu
          htmlColor="white"
          style={{ fontSize: '36px', border: '2px solid white' }}
        />
      </IconButton>
    </Hidden>
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

const Profile = ({name,urlPic}) => {
  const { messages } = useContext(LanguageContext)
  return (
    <Stack direction={'column'} justifyContent={'center'}>
      <Box display={'flex'} justifyContent={'center'}>
        <Avatar
          className={'margin-bottom-1'}
          alt={name}
          src={urlPic}
          sx={{ height: '128px', width: '128px' }}
        />
      </Box>
      <Typography
        paragraph
        className={'margin-bottom-1 text-white'}
        color={'white'}
      >
        {messages.nav.presentation}
      </Typography>
      <SocialList />
    </Stack>
  )
}
