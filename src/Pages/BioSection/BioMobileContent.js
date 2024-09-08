/* import { Box, Typography } from '@mui/material';
import React from 'react'
import ReactMarkdown from 'react-markdown';

export const BioMobileContent = (props) => {
    const {step,index}=props;
  return (
    <Box
        key={index}
        sx={{
            margin:'3vh 0 0 0'
        }}
    >
        <Box
            className='year'
            sx={{
                display:'flex',
                alignItems:'center'
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
                    backgroundColor:'#a77043',
                    height:'fit-content'
                }}
            >
                {step.year}
            </Typography>   
            <Typography
            sx={{
                marginLeft:'20px',
                fontSize:'18px',
                fontWeight:'600',
            }}
            >
                {step.title}
            </Typography>   
        </Box>
        <Box
            className='description'
            sx={{
                marginTop:'2vh',
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
        </Box>
    </Box>
  )
}
 */