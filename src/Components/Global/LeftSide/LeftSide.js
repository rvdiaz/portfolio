
import { Box } from '@mui/material'
import React from 'react'
import { Perfil } from '../../Basic/Perfil/Perfil'
import { SocialNetworks } from '../../Basic/SocialNetworks/SocialNetworks'
import { MainMenu } from '../MainMenu/MainMenu'

export const LeftSide = () => {
  return (
    <Box
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
