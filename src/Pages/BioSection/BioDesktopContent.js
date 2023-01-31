import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';

export const BioDesktopContent = (props) => {
    const {step,index}=props;

    return (
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
    )
}
