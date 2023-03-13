import { Box, Typography } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../../Context/ThemeContext'

export const Footer = (props) => {
    const {info}= useContext(ThemeContext);
    const {copyright}=info;
  return (
    <Box
        sx={props.sx}
    >
        <Typography
            sx={{
                fontSize:'14px'
            }}
        >
             {copyright}
        </Typography>
    </Box>
  )
}
