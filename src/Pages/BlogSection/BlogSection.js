import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { BlogContext } from '../../Context/PagesContext/BlogContext';


export const BlogSection = () => {
  const {blogPage,blogs} = useContext(BlogContext);
  const {title,label}=blogPage;
  const listBlog= blogs ? blogs : [];
  const {pathname}= useLocation();

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
            {listBlog.map((blog,index)=>(   
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
                            backgroundColor:'transparent'
                        }}
                    >
                      <CardContent
                        sx={{
                          display:'flex',
                          flexDirection:'column'
                        }}
                      >
                          <Typography
                              sx={{
                                  fontSize:'18px',
                                  color:'black'
                              }}
                          >
                              {blog.attributes.title}
                          </Typography>
                          <Typography
                              sx={{
                                  fontSize:'18px',
                                  color:'black'
                              }}
                          >
                              {blog.attributes.description}
                          </Typography>
                          <Button 
                            component={Link}
                            to={pathname+ '/'+ blog.id }
                            sx={{
                              color:'#a770439E',
                              border:'1px solid #a770439E',
                              alignSelf:'end',
                              fontWeight:'600',
                              marginTop:'1vh',
                              textTransform:'capitalize',
                              '&:hover':{
                                border:'1px solid #a77043',
                                color:'#a77043',
                                backgroundColor:'transparent'
                              }
                            }}
                            >
                            {blog.attributes.buttonlabel}
                          </Button>
                      </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </Box>
  )
}
