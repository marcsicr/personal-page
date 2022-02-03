import { Grid, Typography, Stack } from '@mui/material'
import StyledHtmlMessage from 'components/ui/StyledHtmlMessage'
import ImageMaskBox from 'components/ui/ImageMaskBox'
import { Box } from '@mui/system'

export default function PortfolioItem({
  id,
  title,
  pic,
  description,
  gallery
}) {
  return (
   
      <Grid container   sx={{ backgroundColor: 'background.main' }}>
      <ProjectPicture alt={id} urlPic={pic} gallery={gallery}/>    
      <ProjectDescription title={title} description={description}/>
      </Grid>
  )
}

const ProjectPicture = ({alt,urlPic,gallery})=> {
return <Grid
          item
          md={12}
          xl={5}
          overflow={'hidden'}
          height={'100%'}
          position={'relative'}
          minHeight={"250px"}
          maxHeight={"250px"}
          flex={1}
        >
          <Box style={{height:'250px', width:'100%', background:`url(${urlPic}) no-repeat`, backgroundSize:'cover', backgroundPosition: 'center' }}/>   
          <ImageMaskBox images={gallery} />
        </Grid>
}

const ProjectDescription = ({title,description}) =>{

    return <Grid item md={12} xl={7}>
          <Stack direction={'column'} margin={'0 auto'} padding={'10px 15px'}>
            <Typography
              variant={'h2'}
              style={{ textDecoration: 'underline' }}
              marginBottom={'5px'}
            >
              {title}
            </Typography>
            <StyledHtmlMessage
              variant={'psmall'}
              htmlText={description}
              textAlign={'justify'}
            />
          </Stack>
        </Grid>
}
