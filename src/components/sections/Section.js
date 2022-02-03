import { Box, Typography} from '@mui/material'
import { makeStyles } from '@mui/styles'
import CustomContainer from 'components/CustomContainer'

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: 'white',
    padding: '3rem 1rem',
  },

  sectionHeader: {
    fontSize: theme.typography.h1.fontSize,
    paddingLeft: '1.2rem',
    position: 'relative',
    fontWeight:'500',
    marginBottom:'25px',

    '&::before': {
      content: '""',
      display: 'inline-block',
      width: '6px',
      height: '100%',
      background: theme.palette.primary.main,
      position: 'absolute',
      top: '0',
      bottom: '0',
      left: 0
    }
  }
}))

export default function Section({ children, background}) {
  const classes = useStyles()
  return (
    <Box component="section" className={[classes.section]} style={{backgroundColor:background}}>
      <CustomContainer>
      {children}
      </CustomContainer>
    </Box>
  )
}

export function SectionHeader({ msg }) {
  const classes = useStyles()
  return (
    <Typography variant="h1" className={classes.sectionHeader}>
      {msg}
    </Typography>
  )
}
