import {useState,useContext} from 'react'
import {Box,useMediaQuery,Button} from '@mui/material'
import { styled } from '@mui/material/styles'
import ImageIcon from '@mui/icons-material/Image';
import WhiteButton from 'components/ui/WhiteButton'
import GalleryContext from 'components/context/GalleryContext'

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

export default function GalleryButton({images}){
    const [show,setShow] = useState(false)  
    const {showGallery} = useContext(GalleryContext)

    const touchScreen = useMediaQuery('(hover:none)');
    console.log(touchScreen)
   
    return touchScreen? <Button onClick={() => showGallery({pics:images})}startIcon={<ImageIcon/>} sx={{position:'absolute', top:'5px', right:'5px', color:'white', backgroundColor:'rgba(0,0,0,.6)'}}>Gallery</Button>: 
    <MaskBox visibility={show} onMouseEnter={() => setShow(true)} onMouseLeave={()=> setShow(false)}>
      { show? <WhiteButton onClick={() => showGallery({pics:images})} variant='contained' startIcon={<ImageIcon/>}>Gallery</WhiteButton> : null}
    </MaskBox>
  }