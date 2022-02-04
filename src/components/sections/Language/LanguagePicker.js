import { useContext, useEffect, useState } from 'react'
import LanguageContext from '../../context/LanguageContext'
import { Stack, Box,Typography,Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import icons from 'components/sections/Language/icons.json'
import LanguageIcon from '@mui/icons-material/Language';

const FlagsList = styled(Stack)(({ theme }) => ({
  listStyleType:'none',
  margin:0,
  padding:0,
}))

const useStyles = makeStyles((theme) => ({
  langOption: {
    cursor:'pointer',
    padding:'10px 12px',
    '&:hover':{
      backgroundColor:theme.palette.selected.main
    }
  }
}))

function LanguagesList({ showList }) {

  const classes = useStyles()
  const { setLanguage } = useContext(LanguageContext)

  const handleSelection = (lang) => {
    setLanguage({ lang: lang })
    console.log('Clicked with', lang)
  }

  return (
    !showList? null:
    <Paper>
    <FlagsList component={"ul"}>
      {Object.keys(icons).map(function (key) {
        const { href, alt } = icons[key]
        return (
          <li key={alt} className={classes.langOption} onClick={()=> {handleSelection(key)}}>
            <LanguageItem url={href} alt={alt} name={alt}/>
          </li>
        )
      })}
    </FlagsList>
    </Paper>
  )
}

const LanguageItem = ({ url, alt, name}) => {
  return <Stack direction={'row'} sx={{cursor:'pointer'}}  alignItems={'center'}>
    <img alt={alt} src={url} style={{ height: '24px', marginRight:'5px'}} />
    <Typography>{name}</Typography>
  </Stack>
}

export default function LanguagePicker() {
  const { locale } = useContext(LanguageContext)
  const [show, setShow] = useState(false)
  const [currentIcon, setIcon] = useState({
    ref: icons[locale].href,
    alt: icons[locale].alt
  })

  useEffect(() => {
    setIcon({ ref: icons[locale].href, alt: icons[locale].alt })
    setShow(false)
  }, [locale])

  return (
    <Stack direction={"column"} alignItems={'center'}
      onMouseLeave={() => setShow(false)}
      onMouseEnter={() => setShow(true)}
      onClick={()=> setShow(true)}
    >
      <Box paddingBottom={'12px'}>
        <Stack direction={'row'}>
          <LanguageIcon sx={{color:'background.primary'}}/>
          <Typography sx={{color:'background.primary'}}>{currentIcon.alt}</Typography>
        </Stack>
        {/* <LanguageItem alt={currentIcon.alt} url={currentIcon.ref} name={currentIcon.alt}/> */}
      </Box>
      <LanguagesList showList={show} />
    </Stack>
  )
}
