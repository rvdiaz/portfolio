import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react'
import ReactMarkdown from 'react-markdown';
import { Image } from '../../Components/Basic/Image/Image';
import { BodyContext } from '../../Context/BodyContext'

export const HomeSection = () => {
    const {homeSection}= useContext(BodyContext);
    const {title,label,description,image}= homeSection.image; 
    const personal= homeSection.personal.personal ? homeSection.personal.personal : []; 

    console.log(personal);
  return (
    <Box
        sx={{
            display:'flex',
            height:'100%',
            alignItems:'center'
        }}
    >
        <Box 
            sx={{
                width:'50%'
            }}
            className='image'>
            <Image
                sx={{
                    width:'90%'
                }} 
                src={process.env.REACT_APP_API + image?.data.attributes.url}
                />
        </Box>
        <Box 
            sx={{
                width:'50%'
            }}
            className='info'>
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
            <Typography
                variant='h3'
                sx={{
                    textTransform:'uppercase',
                    fontWeight:'600',
                    textAlign:'start',
                    fontSize:'35px',
                    marginTop:'1vh'
                }}
            >
                {title}
            </Typography>
            <Box
                sx={{
                    textAlign:'end',
                    marginTop:'3vh'
                }}
            >
                <ReactMarkdown>{description}</ReactMarkdown>
            </Box>
            <Box className="personal">
                {
                   personal.map((info,index)=>(
                    <Box
                        key={index}
                        sx={{
                            display:'flex',
                            alignItems:'center',
                            marginTop:'3vh'
                        }}
                    >
                        <Image 
                            sx={{
                                width:'30px'
                            }}
                            src={process.env.REACT_APP_API + info.icon?.data.attributes.url}/>
                        <Typography
                            sx={{
                                marginLeft:'15px',
                                fontSize:'18px',
                                fontWeight:'600'
                            }}
                        >
                            {info.title}:
                        </Typography>
                        <Typography
                            sx={{
                                marginLeft:'auto'
                            }}
                        >
                            {info.value}
                        </Typography>
                    </Box>
                   ))
                }
            </Box>
        </Box>
    </Box>
  )
}
