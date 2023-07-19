import React, { useContext, useEffect, useState } from 'react'
import { MenuContext } from '../../../Context/MenuContext';
import { Box, Button } from '@mui/material';
import { Image } from '../../Basic/Image/Image';
import { Link, useLocation } from 'react-router-dom';
import { Queries } from '../../../config/Queries';

export const MainMenu = () => {
  const {pages} =useContext(MenuContext);

  const {pathname}=useLocation();
  const [active, setactive] = useState(pathname);
  
  useEffect(() => {
    let aux=pathname;
    if(pathname.includes('%20'))
      aux=pathname.replace('%20',' ');
    setactive(aux);
  }, [pathname])
  
  const {mediaQueries}=Queries();
  const {isMobile,isDesktop}=mediaQueries;

  const menuMobile={
    display:'flex',
    padding:'0 12px'
  }
  const menuDesktop={
    display:'flex',
    flexDirection:'column',
    alignItems:'start',
    marginTop:'20px'
  }

  return (
        <Box
          sx={isDesktop ? menuDesktop : menuMobile}
        >
          {pages.map((page,index)=>{
              const icon=page.icon?.data;
              const href=`/${page.label.toLowerCase()}`;
              const color=(active === href)?'black':'#a09999';
              const borderBottom=isDesktop && ((active === href)?'2px solid #a77043':'2px solid #a770439E');
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
                    fontSize:isMobile ? '12px': '16px',
                    fontWeight:'600',
                    width:'100%',
                    borderBottom:{borderBottom},
                    justifyContent:'start',
                    alignItems:'center',
                    borderRadius:'0',
                    margin:isMobile ?'0':'10px',
                    flexDirection:isDesktop ? 'row' : 'column',
                    '&:hover':{
                      backgroundColor:'transparent',
                      color:'black',
                      borderBottom:borderBottom
                    }
                  }}
                  >
                  {icon&& 
                  <Image 
                  sx={{
                    width:isDesktop ?'25px' : '20px',
                    marginRight:isDesktop ? '10px' : '0'
                  }}
                  src={icon.attributes.url}
                  alt={icon.attributes.alternativeText}
                  />
                  }
                    {page.label}                  
                </Button>
              )
            })}
        </Box>
  )
}
