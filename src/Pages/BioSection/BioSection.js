import { Box, Button, Grid, Paper, Step, StepContent, StepIcon, StepLabel, Stepper, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useContext } from 'react'
import ReactMarkdown from 'react-markdown';
import { BiographyContext } from '../../Context/PagesContext/BiographyContext';

export const BioSection = () => {
    const {biographyContent} = useContext(BiographyContext);
    
    const {title,label}=biographyContent;
    const content=biographyContent.content ? biographyContent.content : [];

    const theme=useTheme();
    const isMobile=useMediaQuery(theme.breakpoints.down('md'));
      
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
                            <Grid
                                key={index}
                                container
                                sx={{
                                    margin:'15px 0 0 0'
                                }}
                            >
                                <Grid
                                    item
                                    md={1}
                                >
                                </Grid>
                                <Grid
                                    className='year'
                                    item
                                    md={1}
                                    sx={{
                                        display:'flex',
                                        justifyContent:'center'
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            textAlign:'center',
                                            color:'white',
                                            borderRadius:'50%',
                                            padding:'5px',
                                            fontSize:'14px',
                                            fontWeight:'600',
                                            backgroundColor:'#a77043'
                                        }}
                                    >
                                        {step.year}
                                    </Typography>   
                                </Grid>
                                <Grid
                                    className='label'
                                    item
                                    md={9}
                                    sx={{
                                        display:'flex',
                                        alignItems:'center'
                                    }}
                                >
                                    <Typography
                                    sx={{
                                        marginLeft:'20px',
                                        fontSize:'18px',
                                        fontWeight:'600',
                                    }}
                                    >
                                        {step.title}
                                    </Typography>   
                                </Grid>
                                <Grid
                                    item
                                    md={1}
                                >
                                </Grid>
                                <Grid
                                    item
                                    md={1}
                                >
                                </Grid>
                                <Grid
                                    className='separator'
                                    item
                                    md={1}
                                    sx={{
                                        display:'flex',
                                        justifyContent:'center',
                                        marginTop:'10px'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width:'2px',
                                            backgroundColor:'#a770439E'
                                        }}
                                    >
                                    </Box>
                                </Grid>
                                <Grid
                                    className='description'
                                    item
                                    md={9}
                                    sx={{
                                        marginTop:'1vh',
                                        marginBottom:'1vh'
                                    }}
                                >
                                <Box
                                    sx={{
                                        marginLeft:'20px',
                                        fontSize:'16px'
                                    }}
                                >
                                    <ReactMarkdown
                                        linkTarget={(href,children,title)=>(
                                            <a href={href}>{children}</a>
                                        )}
                                    >
                                        {step.description}
                                    </ReactMarkdown>
                                    
                                </Box>
                                </Grid>
                                <Grid
                                    item
                                    md={1}
                                >
                                </Grid>
                            </Grid>
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
