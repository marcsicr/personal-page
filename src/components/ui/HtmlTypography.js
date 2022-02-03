import { Typography } from '@mui/material'
import React from 'react'

export default function HtmlTypography({htmlText,...props}) {

  return   <Typography {...props} dangerouslySetInnerHTML={{__html:htmlText}}/>
       
}
