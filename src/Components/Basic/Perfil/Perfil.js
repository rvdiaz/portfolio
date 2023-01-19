import { Box } from '@mui/system';
import React, { useContext } from 'react'
import { ThemeContext } from '../../../Context/ThemeContext';
import { Image } from '../Image/Image'
import { SocialNetworks } from '../SocialNetworks/SocialNetworks';

export const Perfil = () => {
    const {perfilPicture}=useContext(ThemeContext);

  return (
    <Box
        sx={{
            textAlign:'center'
        }}
    >

        <Image
            src={perfilPicture}
            sx={{
                width:'100%',
                height:'220px',
                borderRadius:'50%',
                objectFit:'cover'
            }}
        />
    </Box>
  )
}
