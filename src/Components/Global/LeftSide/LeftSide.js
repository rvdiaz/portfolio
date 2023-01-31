
import { Box } from '@mui/material'
import React from 'react'
import { Queries } from '../../../config/Queries'
import { Perfil } from '../../Basic/Perfil/Perfil'
import { SocialNetworks } from '../../Basic/SocialNetworks/SocialNetworks'
import { MainMenu } from '../MainMenu/MainMenu'

export const LeftSide = () => {

  const {mediaQueries}= Queries();
  const {isTablet,isMobile}=mediaQueries;

  const menuStyle={
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:isMobile ? 'column': 'row'
  }
  
  return (
    <Box
      sx={
        isTablet ? menuStyle : {}
      }
    >
        <Perfil/>
        <SocialNetworks
            sx={{
                marginTop:'10px',
                textAlign:'center',
                position:'absolute',
                bottom:'0',
                left:'0'
            }}
        />
        <MainMenu/>
      </Box>
  )
}
