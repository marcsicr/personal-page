import { useContext,useState } from 'react'
import Section, { SectionHeader } from 'components/sections/Section'
import { Grid, Typography, Stack,Box} from '@mui/material'
import ImageIcon from '@mui/icons-material/Image';
import { styled } from '@mui/material/styles'
import LanguageContext from 'components/context/LanguageContext'

import imgs from './imgs.json'
import WhiteButton from 'components/ui/WhiteButton';
import GalleryContext from 'components/context/GalleryContext';
import StyledHtmlMessage from 'components/ui/StyledHtmlMessage';


export default function SectionPortfolio() {

  const {messages} = useContext(LanguageContext)
  const {headerPortfolio,projects} = messages

  return (
    <Section>
      <SectionHeader msg={headerPortfolio} />
      <Grid container spacing={2}>
        {projects.map(({ id, title, description }) => {
          const projectImages = imgs[id]
          const { sm } = projectImages
          return (
            <Grid key={id} item xs={12} md={6} marginBottom={'3rem'}>
              <PortfolioResume
                id={id}
                title={title}
                description={description}
                pic={sm}
              />
            </Grid>
          )
        })}
      </Grid>
    </Section>
  )
}

const MaskBox = styled(Box)(({ theme }) => ({
  position:'absolute',
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  top:0,
  bottom:0,
  left:0,
  right:0,
  transition: 'all 0.4s ease-in-out',
  '&:hover':{
    backgroundColor: 'rgba(0,0,0,0.5)',
  }
}))



const ImageMaskBox = ({images}) =>{

  const [show,setShow] = useState(false)  
  const {showGallery} = useContext(GalleryContext)
 
  return <MaskBox visibility={show} onMouseEnter={() => setShow(true)} onMouseLeave={()=> setShow(false)}>
    { show? <WhiteButton onClick={() => showGallery({pics:images})} variant='contained' startIcon={<ImageIcon/>}>Gallery</WhiteButton> : null}
  </MaskBox>
}

const PortfolioResume = ({id, title, pic, description }) => {
  const {pics} = imgs[id]
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      sx={{ backgroundColor: 'background.main' }}
    >
      <Grid container height={'250px'} overflow={'hidden'}>
        <Grid item xs={5} overflow={'hidden'} height={'100%'} position={'relative'}>
          <img
            style={{ objectFit: 'cover' }}
            width={'100%'}
            height={'100%'}
            margin={0}
            alt={'gifty'}
            src={pic}
          />
          <ImageMaskBox images={pics} />
        </Grid>
        <Grid item xs={7}>
          <Stack direction={'column'} margin={'0 auto'} padding={'10px 15px'}>
            <Typography
              variant={'h2'}
              style={{ textDecoration: 'underline' }}
              marginBottom={'5px'}
            >
              {title}
            </Typography>
            <StyledHtmlMessage variant={'psmall'} htmlText={description} textAlign={'justify'}/>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  )
}
