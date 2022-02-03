import React from 'react'
import ReactDOM from 'react-dom'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import reportWebVitals from './reportWebVitals'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import Theme from 'theme'
import App from './App'
import {LanguageContentProvider} from 'components/context/LanguageContext'
import { GalleryProvider } from 'components/context/GalleryContext'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <CssBaseline enableColorScheme />
      <LanguageContentProvider>
       <GalleryProvider>
        <App />
        </GalleryProvider>
      </LanguageContentProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
