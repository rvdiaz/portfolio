import { Box, Button } from '@mui/material'
import React, { useContext } from 'react'
import { ThemeContext } from '../../../Context/ThemeContext';
import { Image } from '../Image/Image';

export const SocialNetworks = (props) => {
    const {socialNetworks}=useContext(ThemeContext);

  return (
    <Box
        {...props}
    >
        {
            socialNetworks.map((social,index)=>(
                <Button 
                    key={index}
                    disableRipple  
                    href={social.href}
                    sx={{
                        padding:'5px',
                        minWidth:'auto',
                        '&:hover':{
                            backgroundColor: 'transparent'
                        }
                    }}
                >
                    <Image
                        src={process.env.REACT_APP_API + social.image.data?.attributes.url}
                        sx={{
                            width:'30px'
                        }}
                    />
                </Button>
            ))
        }
    </Box>
  )
}

