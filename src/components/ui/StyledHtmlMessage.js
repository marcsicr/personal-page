import HtmlTypography from 'components/ui/HtmlTypography'
import { styled } from '@mui/material/styles'

const StyledHtmlMessage = styled(HtmlTypography)(({ theme }) => ({
    'b':{
      color:theme.palette.primary.main
    }
  }))

export default StyledHtmlMessage