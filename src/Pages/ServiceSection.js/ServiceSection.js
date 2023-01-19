import { Box, Grid, Typography } from '@mui/material';
import { MDBIcon } from 'mdb-react-ui-kit';

import React, { useContext } from 'react'
import { BodyContext } from '../../Context/BodyContext'

export const ServiceSection = () => {
    const {serviceSection}=useContext(BodyContext);

    const {label,title}=serviceSection;
    const services=serviceSection?.service ? serviceSection?.service : [];

  return (
   <Box>
        <Typography>
        
            {label}
        </Typography>
        <Typography>
            {title}
        </Typography>
        <Grid
            container
            spacing={2}
        >
            {services.map((service,index)=>{
                return(
            <Grid 
                item
                md={6}
                key={index}
            >
                <Box>
                    <Typography   
                    >
                        <img src={process.env.REACT_APP_API + service.icon_service.data?.attributes.url} alt={service.title} />
                    </Typography>
                    <Typography
                        variant='h2'
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
