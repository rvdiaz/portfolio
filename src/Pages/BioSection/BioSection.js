import { Box, Button, Grid, Paper, Step, StepContent, StepIcon, StepLabel, Stepper, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useContext } from 'react'

import { Queries } from '../../config/Queries';
import { BiographyContext } from '../../Context/PagesContext/BiographyContext';
import { BioDesktopContent } from './BioDesktopContent';
import { BioMobileContent } from './BioMobileContent';

export const BioSection = () => {
    const {biographyContent} = useContext(BiographyContext);
    
    const {title,label}=biographyContent;
    const content=biographyContent.content ? biographyContent.content : [];

    const {mediaQueries}=Queries();
    const {isDesktop,isMobile,isTablet}= mediaQueries;
      
        return (
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
                                isDesktop ? <BioDesktopContent step={step} index={index}/> : <BioMobileContent step={step} index={index}/>
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
