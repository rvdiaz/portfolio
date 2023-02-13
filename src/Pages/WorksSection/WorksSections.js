import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';
import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { Queries } from '../../config/Queries';
import { PortfolioContext } from '../../Context/PagesContext/PortfolioContext';

export const WorksSections = () => {
    const {content,handleChange}=useContext(PortfolioContext);
    const {portfolioContent}=content;
    const {label,title}=portfolioContent;
    const websites=portfolioContent.websites ? portfolioContent.websites : [];
   
    const {mediaQueries}=Queries();
    const {isDesktop}=mediaQueries;

    useEffect(() => {
        const fetchData=async()=>{
        const portfolioContent= await axios(process.env.REACT_APP_API + '/api/portfolio?[populate][websites][populate]populate=*');

        handleChange({
            portfolioContent:portfolioContent.data.data.attributes
          })
      }

        fetchData();
    }, [])

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
            >
            </Box>
        </Box>
        <Grid
            container
            spacing={3}
            sx={{
                justifyContent:'center',
                marginTop:'1vh'
            }}
        >
            {websites.map((website,index)=>(   
                <Grid
                    key={index}
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
                            image={process.env.REACT_APP_API + website.image.data.attributes.url}
                            sx={{
                                width:'100%',
                                height:'20vh',
                                objectFit:'contain'
                            }}
                        >
                        </CardMedia>
                        <CardContent>
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
            ))}
        </Grid>
    </Box>
  )
}
