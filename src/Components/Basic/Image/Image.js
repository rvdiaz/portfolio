import { Box } from '@mui/material'
import { maxWidth } from '@mui/system'
import React from 'react'

export const Image = (props) => {
  return (
    <Box
        component="img"
        alt={props.alt}
        {...props}
        src={props.src}
    />
  )
}
