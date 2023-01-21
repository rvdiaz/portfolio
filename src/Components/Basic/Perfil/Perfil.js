import { Box } from '@mui/system';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
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
        <Link to='/'>
            <Image
                src={perfilPicture}
                sx={{
                    width:'100%',
                    borderRadius:'50%',
                    objectFit:'cover'
                }}
            />
        </Link>
    </Box>
  )
}
