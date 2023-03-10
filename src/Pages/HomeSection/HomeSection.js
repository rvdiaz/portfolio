import { Box, Typography } from '@mui/material';
import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import ReactMarkdown from 'react-markdown';
import { Image } from '../../Components/Basic/Image/Image';
import { Queries } from '../../config/Queries';
import { HomeContext } from '../../Context/PagesContext/HomeContext'

export const HomeSection = () => {
   const {contentHome,handleChange} = useContext(HomeContext);
   const {homeContent}=contentHome;
   const {content,image}=homeContent;
   const {title,label,description,profession,description_author}=content;
   const personal= content.personal ? content.personal : [];

   const {mediaQueries}=Queries();
   const {isMobile,isDesktop,isTablet}=mediaQueries;

   useEffect(() => {
    const fetchData=async()=>{
        const homeContent=await axios(process.env.REACT_APP_API + '/api/home?[populate][personal][populate]populate=*',
        {
            headers: {
                Authorization:`Bearer ${process.env.REACT_APP_API_TOKEN}`
              },
            }
        );
        const homeContentImage=await axios(process.env.REACT_APP_API + '/api/home?populate=*',
        {
            headers: {
                Authorization:`Bearer ${process.env.REACT_APP_API_TOKEN}`
              },
            }
        );

        handleChange({
            homeContent:{
                content:homeContent.data.data.attributes,
                image:homeContentImage.data.data.attributes.image
            }})
    }
    fetchData();
}, [])

    const imageSize=()=>{
        switch (true) {
            case isMobile:
                return 'auto';
                break;
            case isTablet:
                return '350px';
                break;
            default:
                return '90%';
                break;
        }
    }
  return (
    <Box
        sx={{
            display:'flex',
            justifyContent:'start',
            height:'100%',
            alignItems:isTablet ? 'start' : 'center',
            paddingTop: isTablet ? '4vh' : '0',
            flexDirection: isMobile && 'column'
        }}
    >
        <Box 
            sx={{
                width:isMobile ? '100%' : '50%',
                textAlign:'center'
            }}
            className='image'>
            <Image
                sx={{
                    width:imageSize,
                    height: isMobile ? '40vh' : 'auto'
                }} 
                src={image.data?.attributes.url}
                />
        </Box>
        <Box 
            sx={{
                width:isMobile ? '100%' : '50%',
                paddingTop:isMobile ? '2vh' : '4vh',
                paddingBottom:isMobile && '2vh'
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
            <Typography
                variant='h3'
                sx={{
                    textTransform:'uppercase',
                    fontWeight:'600',
                    textAlign:'center',
                    fontSize:isDesktop ? '33px' : '24px',
                    marginTop:'1vh'
                }}
            >
                {title}
            </Typography>
            <Typography
                variant='h3'
                sx={{
                    textTransform:'uppercase',
                    fontWeight:'600',
                    textAlign: 'center',
                    fontSize:isDesktop ? '33px' : '24px',
                    marginTop:'1vh'
                }}
            >
                {profession}
            </Typography>
            <Box
                sx={{
                    textAlign:isMobile ? 'center' : 'end',
                    marginTop:'3vh',
                    '& .description p':{
                        margin: '0'
                    }
                }}
            >
                <ReactMarkdown
                    className="description"
                >{description}</ReactMarkdown>
                <Typography
                    sx={{
                        fontStyle:'italic'
                    }}>   
                    {description_author}
                </Typography>
            </Box>
            
            <Box className="personal"
                sx={isMobile ? {
                    width:'fit-content',
                    margin:'0 auto'
                } : {}}
            >
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
                            src={info.icon.data?.attributes.url}/>
                        <Typography
                            sx={{
                                margin:'0 15px',
                                fontSize:'18px',
                                fontWeight:'600',
                                textTransform:'capitalize'
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
