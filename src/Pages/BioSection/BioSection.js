import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useContext } from 'react'
import { BodyContext } from '../../Context/BodyContext'
import { ThemeContext } from '../../Context/ThemeContext';

export const BioSection = () => {
    const {headerSection}=useContext(BodyContext);
    const {primaryColor}=useContext(ThemeContext);
    
    const {contact,image,title,description,profession} = headerSection;
    const backgroundImage=process.env.REACT_APP_API + image?.data.attributes.url;

    const theme=useTheme();
    const isMobile=useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div>Bio Section</div>
  )
}
