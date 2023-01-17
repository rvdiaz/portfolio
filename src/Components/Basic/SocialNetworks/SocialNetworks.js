import { Box, Button, Grid } from '@mui/material'
import React, { useContext } from 'react'
import { BodyContext } from '../../../Context/BodyContext'

import Icon from '@mui/material/Icon';


import { ThemeContext } from '../../../Context/ThemeContext';
import { MDBIcon } from 'mdb-react-ui-kit';

export const SocialNetworks = () => {
    const {socialNetworks}=useContext(BodyContext);
    const {primaryColor}=useContext(ThemeContext);
  return (
    <Grid
        container
        spacing={2}
        sx={{
            marginTop:'15px'
        }}
    >
        {
            socialNetworks.map((social,index)=>(
                <Grid 
                    item
                >
                    <Button 
                        disableRipple
                        key={index} 
                        href={social.href}
                        sx={{
                            padding:'10px',
                            backgroundColor: primaryColor,
                            color:"white",
                            fontSize:'25px',
                            width:'50px',
                            height:'50px',
                            '&:hover':{
                                backgroundColor: primaryColor,
                                color: 'white'
                            }
                        }}
                    >
                        <MDBIcon fab icon={social.label} />
                    </Button>
                </Grid>
            ))
        }
    </Grid>
  )
}

