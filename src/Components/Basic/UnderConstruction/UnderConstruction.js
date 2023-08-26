import React from 'react'

import underConsImage from '../../../assets/underConstruction.png';
import { Box } from '@mui/material';
import { Image } from '../Image/Image';

export const UnderConstruction = (props) => {
    const underContruction=true;
  return (
    <>
    {underContruction ?
        <Box
            sx={{
                display:'grid',
                placeContent:'center',
                height:'100%'
            }}
        >
            <Image 
                sx={{
                    width:'200px'
                }}
                src={underConsImage}/>
        </Box>
        :
        props.children
    }
    </>
    
  )
}
