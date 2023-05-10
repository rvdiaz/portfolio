import { Box, Fade, Grid, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import React, { useContext } from 'react'
import { useEffect } from 'react';
import { Image } from '../../Components/Basic/Image/Image';
import { Queries } from '../../config/Queries';
import { ServiceContext } from '../../Context/PagesContext/ServiceContext';
import { ServiceSkeleton } from './ServiceSkeleton';

export const ServiceSection = () => {
    const {content,handleChange}=useContext(ServiceContext);
    const {serviceContent}=content;
    const {label,title}=serviceContent;
    const services=serviceContent?.services ? serviceContent?.services : [];

    const {mediaQueries}=Queries();
    const {isDesktop,isMobile}=mediaQueries;

    const fetchData=async()=>{
        const {data}=await axios(process.env.REACT_APP_API + '/api/service?populate[services][populate]populate=*',
        {
          headers: {
              Authorization:`Bearer ${process.env.REACT_APP_API_TOKEN}`
            },
          }
        );
        return data;
      }
      const {data,error,isError,isLoading}=useQuery(['services'],fetchData,{
        onSuccess:(data)=>{
            handleChange({
                serviceContent:data.data.attributes
            })
        }
      })

    useEffect(() => {
        fetchData();
      }, [data])

  return (
    isLoading ?
    <ServiceSkeleton/>
    :
    <Fade in={!isLoading} timeout={600}>
        <Box
                sx={{
                    textAlign:'center',
                    paddingBottom:'3vh'
                }}
            >
                <Typography
                    variant='h3'
                    sx={{
                        textTransform:'uppercase',
                        fontWeight:'600',
                        textAlign:'center',
                        fontSize:isDesktop ? '33px' : '24px',
                        marginBottom:'1vh'
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
                            fontSize:isDesktop ? '20px' : '16px',
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
                        sm={6}
                        key={index}
                    >
                        <Box
                        >
                            <Typography   
                            >
                                <Image 
                                    src={service.icon_service.data?.attributes.url} 
                                    alt={service.title}
                                    sx={{
                                        width:'6vh'
                                    }}
                                    />
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize:isMobile ? '20px' : '24px',
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
    </Fade>
  )
}
