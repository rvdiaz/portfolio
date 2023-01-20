import { Box, Button, Grid, Paper, Step, StepContent, StepIcon, StepLabel, Stepper, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useContext } from 'react'
import ReactMarkdown from 'react-markdown';
import { BodyContext } from '../../Context/BodyContext'
import { ThemeContext } from '../../Context/ThemeContext';

export const BioSection = () => {
    const {bioSection} = useContext(BodyContext);
    const {title,label}=bioSection;
    const content=bioSection.content ? bioSection.content : [];

    console.log(content);
    const theme=useTheme();
    const isMobile=useMediaQuery(theme.breakpoints.down('md'));

    const steps = [
        {
          year:'2015',
          label: 'Select campaign settings',
          description: "For each ad campaign that you create, you can control how much you re willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more",
        },
        {
          year:'2016',
          label: 'Create an ad group',
          description: "An ad group contains one or more ads which target a shared set of keywords.",
        },
        {
          year:'2017',
          label: 'Create an ad',
          description: "Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions. If you run into any problems with your ads, find out how to tell if they're running and how to resolve approval issues.",
        },
      ];
      
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
                                <Typography
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
                                    
                                </Typography>
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
