import { Box } from '@mui/system';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Queries } from '../../../config/Queries';
import { ThemeContext } from '../../../Context/ThemeContext';
import { Image } from '../Image/Image'

export const Perfil = () => {
    const {perfilPicture}=useContext(ThemeContext);
    const {mediaQueries}=Queries();
    const queries=mediaQueries;

    const widthImage=()=>{
        switch (true) {
            case (queries.isTablet):
                return '120px';
            case (queries.isMobile):
                return '100px';
            default:
            return '100%';
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
                alt={perfilPicture.alternativeText}
                src={perfilPicture.url}
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
