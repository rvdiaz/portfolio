import { Box } from '@mui/system';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Queries } from '../../../config/Queries';
import { ThemeContext } from '../../../Context/ThemeContext';
import { Image } from '../Image/Image'
import { SocialNetworks } from '../SocialNetworks/SocialNetworks';

export const Perfil = () => {
    const {perfilPicture}=useContext(ThemeContext);
    const {mediaQueries}=Queries();
    const queries=mediaQueries;

    const widthImage=()=>{
        switch (true) {
            case (queries.isTablet):
                return '120px';
                break;
            case (queries.isMobile):
                return '100px';
                break;
            default:
            return '100%';
            break;
        }
    }
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
                    width:widthImage(),
                    borderRadius:'50%',
                    objectFit:'cover'
                }}
            />
        </Link>
    </Box>
  )
}
