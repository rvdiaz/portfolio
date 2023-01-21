import React, { useContext, useEffect, useState } from 'react'
import { MenuContext } from '../../../Context/MenuContext';
import { Box, Button, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import { MenuMobile } from '../MenuMobile/MenuMobile';
import { Image } from '../../Basic/Image/Image';
import { Link, useLocation } from 'react-router-dom';

export const MainMenu = () => {
  const {pages} =useContext(MenuContext);

  const {pathname}=useLocation();
  
  const [active, setactive] = useState(pathname);

  useEffect(() => {
    setactive(pathname);
  }, [pathname])
  
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
              const href=`/${page.label.toLowerCase()}`;
  
              const color=(active === href)?'black':'#a09999';
              const borderBottom=(active === href)?'2px solid #a77043':'2px solid #a770439E';
              return (
                <Button 
                  tabIndex={index}
                  disableRipple
                  component={Link}
                  to={href}
                  key={index}
                  sx={{
                    color:{color},
                    backgroundColor:'transparent',
                    textTransform:'capitalize',
                    fontSize:'16px',
                    fontWeight:'600',
                    width:'100%',
                    borderBottom:{borderBottom},
                    justifyContent:'start',
                    borderRadius:'0',
                    marginTop:'10px',
                    '&:hover':{
                      backgroundColor:'transparent',
                      color:'black',
                      borderBottom:'2px solid #a77043'
                    }
                  }}
                  >
                  {icon&& 
                  <Image 
                  sx={{
                    width:'25px',
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
