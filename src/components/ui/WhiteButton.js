import {Button} from '@mui/material'
import { styled } from '@mui/material/styles'

const WhiteButton = styled(Button)(({theme}) => ({
  backgroundColor:'white',
  color:'black',
  '&:hover':{
    backgroundColor:theme.palette.primary.main
  }
}))

export default WhiteButton