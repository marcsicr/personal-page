import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  
  typography: {
    h1: {
      fontSize: '2.5rem'
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight:'bold'
    },
    h3:{
      fontSize: '1.1rem',
      fontWeight:'bold',
    },

    psmall:{
      fontSize:'0.9rem',
      color:'grey'
    }
    
  },

  palette:{
    primary:{
      main:'#4682B4'
    },
    selected:{
      main:'#DCDCDC'
    },
    card:{
      main:'#f2f2f2'
    },
    background:{
      primary:'#FFFAFA',
      secondary:'#f2f2f2'
    },


    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,

    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  }
})

// pageTheme.typography.h1 = {
//   fontSize: '1.2rem',
//   '@media (min-width:600px)': {
//     fontSize: '3rem',
//   },
//   [pageTheme.breakpoints.up('md')]: {
//     fontSize: '4rem',
//   },
// }

export default theme
