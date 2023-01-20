import { Box, Divider, Grid, Typography } from '@mui/material';
import { MDBIcon } from 'mdb-react-ui-kit';

import React, { useContext } from 'react'
import { Image } from '../../Components/Basic/Image/Image';
import { BodyContext } from '../../Context/BodyContext'

export const ServiceSection = () => {
    const {serviceSection}=useContext(BodyContext);
    const {label,title}=serviceSection;
    const services=serviceSection?.service ? serviceSection?.service : [];

  return (
   <Box
        sx={{
            textAlign:'center'
        }}
    >
        <Typography
            variant='h3'
            sx={{
                textTransform:'uppercase',
                fontWeight:'600',
                fontSize:'35px'
            }}
        >
            {title}
        </Typography>
        <Box
            sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
            }}
        >
            <Box
                sx={{
                    width:'20px',
                    height:'2px',
                    backgroundColor:'#a77043',
                    marginRight:'5px'
                }}
            >
            </Box>
            <Typography
                variant='h5'
                sx={{
                    textTransform:'uppercase',
                    color:'#a77043',
                    fontWeight:'600',
                    fontSize:'20px'
                }}
            >
                {label}
            </Typography>
            <Box
                sx={{
                    width:'20px',
                    height:'2px',
                    backgroundColor:'#a77043',
                    marginLeft:'5px'
                }}
            ></Box>
        </Box>
        <Grid
            container
            spacing={3}
            sx={{
                marginTop:'1vh'
            }}
        >
            {services.map((service,index)=>{
                return(
            <Grid 
                item
                md={6}
                key={index}
                
            >
                <Box
                >
                    <Typography   
                    >
                        <Image 
                            src={process.env.REACT_APP_API + service.icon_service.data?.attributes.url} 
                            alt={service.title}
                            sx={{
                                width:'6vh'
                            }}
                            />
                    </Typography>
                    <Typography
                        sx={{
                            fontSize:'24px',
                            fontWeight:"700",
                            lineHeight:'1.2',
                            margin:'0.6vh 0'
                        }}
                    >
                        {service.title}
                    </Typography>
                    <Typography
                        variant='body2'
                    >
                        {service.description}
                    </Typography>
                </Box>
            </Grid>
            )}
            )}     
              
        </Grid>
   </Box>
  )
}
