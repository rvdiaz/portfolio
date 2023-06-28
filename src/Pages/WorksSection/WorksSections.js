import { Box, Card, CardContent, CardMedia, Fade, Grid, Link, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { Queries } from '../../config/Queries';
import { PortfolioContext } from '../../Context/PagesContext/PortfolioContext';
import { WorkSkeleton } from './WorkSkeleton';

export const WorksSections = () => {
    const {content,handleChange}=useContext(PortfolioContext);
    const {portfolioContent}=content;
    const {label,title}=portfolioContent;
    
    const web=portfolioContent?.web ? portfolioContent?.web : [];
    
    const {mediaQueries}=Queries();
    const {isDesktop}=mediaQueries;
    
    const fetchData=async()=>{
        const {data}= await axios(process.env.REACT_APP_API + '/api/portfolio?populate[web][populate][websites][populate]populate=*',
        {
            headers: {
                Authorization:`Bearer ${process.env.REACT_APP_API_TOKEN}`
              },
            }
        );
        return data;
      }
     
    const {data,error,isError,isLoading}=useQuery(['work'],fetchData,{
        onSuccess:(data)=>{
            handleChange({
                portfolioContent:data.data.attributes
            }) 
        }
    })
   
    useEffect(() => {
        fetchData();
    }, [data])

  return (
    isLoading ?
    <WorkSkeleton/>
    :
    <Fade in={!isLoading} timeout={1000}>
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
            >
            </Box>
        </Box>
            {web.map((item)=>
                {
                return (
                <Box 
                key={item.id}
                sx={{
                    marginTop:'4vh'
                }}
                >
                <Box
                sx={{
                    borderBottom:'3px solid #a77043'
                }}
                >
                    <Typography
                    sx={{
                        color:'white',
                        borderRadius:'0px',
                        padding:'5px 15px',
                        fontSize:'20px',
                        fontWeight:'500',
                        backgroundColor:'#a77043',
                        height:'fit-content',
                        width:'fit-content'
                    }}
                    >
                    {item.title}
                    </Typography>  
                </Box> 
                <Grid
                    container
                    spacing={3}
                    sx={{
                        justifyContent:'center',
                        marginTop:'10px'
                    }}
                    key={item.id}>
                    
                    {
                    item.websites.map((website)=>(
                    <Grid
                    key={website.id}
                    item
                    md={5}
                    sm={6}
                    xs={10}
                >
                    <Card
                        elevation={2}
                        sx={{
                            width:'100%',
                            borderRadius:'5px',
                            textAlign:'center',
                            border:'1px solid #a770439E',
                            '&:hover':{
                                boxShadow:'0 0 5px 0 #a77043',
                            }
                        }}
                    ><Link 
                            sx={{
                                textDecoration:'none'
                            }}
                            target={website.target}
                            href={website.href}>
                        <CardMedia
                            component='img'
                            image={website.image.data?.attributes.url}
                            alt={website.image.data?.attributes.alternativeText}
                            sx={{
                                width:'100%',
                                height:'20vh',
                                objectFit:'contain'
                            }}
                        >
                        </CardMedia>
                        <CardContent
                            sx={{
                                paddingBottom:'0 !important',
                                padding:'10px !important',
                                borderTop:'1px solid #e8e2e2'
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize:'18px',
                                    color:'black'
                                }}
                            >
                                {website.label}
                            </Typography>
                        </CardContent>
                        </Link>
                    </Card>
                    </Grid>
                    ))
                    } 
                    </Grid>
                    </Box>
                )})}
       
    </Box>
    </Fade>
  )
}
