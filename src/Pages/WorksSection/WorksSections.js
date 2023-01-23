import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';
import React, { useContext } from 'react'
import { BodyContext } from '../../Context/BodyContext'

export const WorksSections = () => {
    const {workSection}=useContext(BodyContext);
    const {label,title}=workSection;
    const websites=workSection.websites ? workSection.websites : [];
   
  return (
    <Box>
        <Typography
            variant='h3'
            sx={{
                textTransform:'uppercase',
                fontWeight:'600',
                textAlign:'center',
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
