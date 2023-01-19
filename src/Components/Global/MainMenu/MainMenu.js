import React, { useContext } from 'react'
import { MenuContext } from '../../../Context/MenuContext';
import { Box, Button, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import { MenuMobile } from '../MenuMobile/MenuMobile';
import { Image } from '../../Basic/Image/Image';

export const MainMenu = () => {
  const {pages} =useContext(MenuContext);

  const theme = useTheme();
  const isMobile=useMediaQuery(theme.breakpoints.down('md'));

  return (
        <Box
          sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'start',
            marginTop:'20px'
          }}
        >
          {pages.map((page,index)=>{
              const icon=page.icon?.data;
              return (
                <Button 
                   key={index}
                  disableRipple    
                  sx={{
                    color: 'black',
                    backgroundColor:'transparent',
                    textTransform:'capitalize',
                    fontSize:'18px',
                    fontWeight:'600',
                    width:'100%',
                    borderBottom:'2px solid #a77043',
                    justifyContent:'start',
                    borderRadius:'0',
                    marginTop:'10px',
                    color:'#8e8888',
                    '&:hover':{
                      backgroundColor:'transparent',
                      color:'black'
                    },
                  }}
                  >
                  {icon&& 
                  <Image 
                  sx={{
                    width:'35px',
                    marginRight:'10px'
                  }}
                  src={process.env.REACT_APP_API+ icon.attributes.url}/>
                  }
                  {page.label}
                </Button>
              )
            })}
        </Box>
  )
}
