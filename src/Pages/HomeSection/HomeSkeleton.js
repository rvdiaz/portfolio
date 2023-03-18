import { Box, Skeleton } from '@mui/material'
import React from 'react'
import { ListSkeleton } from '../../Components/Basic/ListSkeleton/ListSkeleton';
import { Queries } from '../../config/Queries';

export const HomeSkeleton = () => {
    const {mediaQueries}=Queries();
   const {isMobile,isDesktop,isTablet}=mediaQueries;

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
            <Skeleton 
                variant="rectangular" 
                width='100%' 
                height='40vh'
                sx={{
                    bgcolor:'#00000014'
                }}
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
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
        }}
        >
            <Skeleton 
                variant="rounded" 
                width='30%'
                height={30}  
                sx={{
                    marginTop:'1vh',
                    bgcolor:'#00000014'
                }}
                />
            <Skeleton 
                variant="rounded" 
                width='80%'
                height={30}  
                sx={{
                    marginTop:'1vh',
                    bgcolor:'#00000014'
                }}
            />
             <Skeleton 
                variant="rounded" 
                width='80%'
                height={30}  
                sx={{
                    marginTop:'2vh',
                    bgcolor:'#00000014'
                }}
            />
            <ListSkeleton
                length={4}
            >
                <Skeleton 
                    variant="rounded" 
                    height={20}  
                    length={4}
                    width='80%'
                    sx={{
                        marginTop:'2vh',
                        bgcolor:'#00000014'
                    }}
                />
            </ListSkeleton>
        </Box>
    </Box>
    </Box>
  )
}
