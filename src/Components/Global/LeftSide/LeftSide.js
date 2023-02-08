
import { Box } from '@mui/material'
import React from 'react'
import { Queries } from '../../../config/Queries'
import { Perfil } from '../../Basic/Perfil/Perfil'
import { SocialNetworks } from '../../Basic/SocialNetworks/SocialNetworks'
import { Footer } from '../Footer/Footer'
import { MainMenu } from '../MainMenu/MainMenu'

export const LeftSide = () => {

  const {mediaQueries}= Queries();
  const {isTablet,isMobile,isDesktop}=mediaQueries;

  const menuStyle={
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:isMobile ? 'column': 'row',
    borderBottom:'1px solid #a770439E'
  }
  
  return (
    <Box
      sx={
        isTablet ? menuStyle : {
          borderBottom: isMobile && '1px solid #a770439E'
        }
      }
    >
        <Perfil/>
        <MainMenu/>
        {/* {isDesktop && 
          <Footer
            sx={{
              marginTop:'10px',
              textAlign:'center',
              position:'absolute',
              bottom:'0',
              left:'0',
              width:'100%',
              padding:'5px'
            }}
          />} */}
      </Box>
  )
}
