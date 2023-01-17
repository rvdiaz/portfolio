import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import React, { useContext, useState } from 'react'
import { MenuContext } from '../../../Context/MenuContext';
import { ThemeContext } from '../../../Context/ThemeContext';
import { Image } from '../../Basic/Image/Image';
import { Box, Button, Grid, Menu, MenuItem, Tab, Tabs, Typography, useMediaQuery, useTheme } from '@mui/material';
import { MenuMobile } from '../MenuMobile/MenuMobile';

export const MainMenu = () => {
  const {logo,pages} =useContext(MenuContext);
  const {primaryColor}=useContext(ThemeContext);

  const theme = useTheme();
  const isMobile=useMediaQuery(theme.breakpoints.down('md'));
  return (
    <AppBar
      sx={{
        backgroundColor:'transparent',
        boxShadow:'none'
      }}
    >
      <Toolbar>
        {
          isMobile ?
          <MenuMobile/>
        :
        <Grid container spacing={1} justifyContent="space-between">

          <Grid 
            item 
            md={1}
            sx={{
              width:'fit-content'
            }}
          >
            <Image 
              src={logo} 
              alt="rvdiaz"
              styles={{
                width:'150px',
                height:'auto'
              }}
              />
          </Grid>
          <Grid 
            item
            sx={{
              display:'flex',
              alignItems:'center',
              marginRight:'20px'
            }}>
            <Box>
              {pages.map((page,index)=>{
                  return (
                    <Button 
                      key={index}
                      sx={{
                        color: primaryColor,
                        textTransform:'capitalize',
                        fontSize:'18px',
                        fontWeight:'600',
                        '&:hover':{
                          backgroundColor:'transparent'
                        }
                      }}
                      >
                      {page.label}
                    </Button>
                  )
                })}
            </Box>
          </Grid>
        </Grid>
        }
      </Toolbar>
    </AppBar>
  )
}
