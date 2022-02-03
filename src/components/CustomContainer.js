import {Container} from '@mui/material'
import {styled} from '@mui/material/styles'
const CustomContainer = styled(Container)(({ theme }) => ({
    [theme.breakpoints.up('lg')]: {
      maxWidth: '1280px'
    }
  }))

export default CustomContainer