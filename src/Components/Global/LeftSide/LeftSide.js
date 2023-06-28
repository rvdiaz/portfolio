
import { Box } from '@mui/material'
import React from 'react'
import { Queries } from '../../../config/Queries'
import { Perfil } from '../../Basic/Perfil/Perfil'
import { MainMenu } from '../MainMenu/MainMenu'

export const LeftSide = () => {

  const {mediaQueries}= Queries();
  const {isTablet,isMobile}=mediaQueries;

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
      </Box>
  )
}
