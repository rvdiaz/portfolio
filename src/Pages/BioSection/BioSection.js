import { Box, Typography } from '@mui/material';
import axios, { Axios } from 'axios';
import React, { useContext, useEffect } from 'react'
import { useState } from 'react';

import { Queries } from '../../config/Queries';
import { BiographyContext } from '../../Context/PagesContext/BiographyContext';
import { BioDesktopContent } from './BioDesktopContent';
import { BioMobileContent } from './BioMobileContent';
import { BioSkeleton } from './BioSkeleton';

export const BioSection = () => {
    const {contentBio,handleChange} = useContext(BiographyContext);
    const {biographyContent}=contentBio;
    const {title,label}=biographyContent;
    const content=biographyContent.content ? biographyContent.content : [];

    const [loading, setloading] = useState(false);

    const {mediaQueries}=Queries();
    const {isDesktop}= mediaQueries;
    
    const fetchData=async()=>{
        setloading(true);
        const biographyContent=await axios(
          process.env.REACT_APP_API + '/api/biography?[populate][content][populate]populate=*',
          {
          headers: {
              Authorization:`Bearer ${process.env.REACT_APP_API_TOKEN}`
            },
          });
          const timer = setTimeout(() => {
            handleChange({
                biographyContent:biographyContent.data.data.attributes 
            })
            setloading(false);
          }, 500);
          return () => clearTimeout(timer);
        
      }  

    useEffect(() => {
        fetchData();
      }, [])

    return (
        loading ?
        <BioSkeleton/> 
        :
        <Box
        sx={{
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
        <Box
            sx={{
                marginTop:'2vh'
            }}
        >
            <Box >
                {content.map((category,index)=>{
                    return (
                <Box
                    key={index}
                >  
                    <Box
                        sx={{
                            borderBottom:'2px solid #a77043',
                            marginBottom:'1vh',
                            display:'flex',
                            justifyContent:'end'
                        }}
                    >
                        <Typography
                        sx={{
                            width:'fit-content',
                            padding:'5px 10px',
                            color:'white',
                            backgroundColor:'#a77043',
                            fontWeight:'700'
                        }}
                        >
                            {category.categorytitle}
                        </Typography>
                    </Box>
                    {category.categorycontent.map((step,index)=>(
                        isDesktop ? <BioDesktopContent key={index} step={step} index={index}/> : <BioMobileContent key={index} step={step} index={index}/>
                    ))}
                </Box>
                    )
                })
                }
            </Box>
                
        </Box>
        </Box>
    );
}
