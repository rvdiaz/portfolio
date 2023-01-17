import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React, { useContext, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Image } from '../../Basic/Image/Image';
import { MenuContext } from '../../../Context/MenuContext';
import { ThemeContext } from '../../../Context/ThemeContext';
import { Box } from '@mui/system';

export const MenuMobile = () => {
  const [open, setopen] = useState(false);
  const {logo,pages}= useContext(MenuContext);
  const {primaryColor}=useContext(ThemeContext);

  return (
    <Box
      sx={{
        width:'100%',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
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
      <IconButton
        disableRipple
        size="large"
        sx={{
          color: primaryColor,
          height:'100px'
        }}
      >
        <MenuIcon
          sx={{
            fontSize:'1.7rem'
          }}
        />
      </IconButton>
     <Drawer
      anchor='left'
      open={open}
    > 
      <List>
        {
          pages.map((page,index)=>(
            <ListItem key={index}>  
              <ListItemButton>
                <ListItemText primary={page.label}/>
              </ListItemButton>
            </ListItem>
          ))
        }
      </List>
    </Drawer>
    </Box>
   
  )
}
