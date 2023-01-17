import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useContext } from 'react'
import { BodyContext } from '../../../Context/BodyContext'
import { ThemeContext } from '../../../Context/ThemeContext';
import { SocialNetworks } from '../../Basic/SocialNetworks/SocialNetworks';

export const HeaderSection = () => {
    const {headerSection}=useContext(BodyContext);
    const {primaryColor}=useContext(ThemeContext);
    
    const {contact,image,title,description,profession} = headerSection;
    const backgroundImage=process.env.REACT_APP_API + image?.data.attributes.url;

    const theme=useTheme();
    const isMobile=useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
        sx={{
            height: isMobile ? '80vh' : '100vh',
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            backgroundPosition: isMobile ? "center right" : "center",
            display:'flex',
            alignItems:'center',
            padding:'0 32px'
        }}
    >
        <Box
            sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'start'
            }}
        >
            <Typography
                variant='h1'
                sx={{
                    fontWeight:'600',
                    color: primaryColor,
                    textAlign:'start'
                }}
            >
                {title}
            </Typography>
            <Button
               size='medium'
               sx={{
                    color:primaryColor,
                    border:`4px solid ${primaryColor}`,
                    fontSize:'40px',
                    fontWeight:'600',
                    width:'fit-content',
                    marginTop:'15px'
               }}
            >
                {contact?.label}
            </Button>
            <Typography
                variant='p'
                sx={{
                    fontWeight:'600',
                    fontSize:'18px',
                    color: primaryColor,
                    width:'50%',
                    marginTop:'15px',
                    textAlign:'start'
                }}
            >
                {description}
            </Typography>
            <SocialNetworks/>
        </Box>
    </Box>
  )
}
