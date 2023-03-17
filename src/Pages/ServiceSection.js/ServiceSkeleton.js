import { Box, Skeleton } from '@mui/material'
import React from 'react'
import { ListSkeleton } from '../../Components/Basic/ListSkeleton/ListSkeleton'
import { Queries } from '../../config/Queries';

export const ServiceSkeleton = () => {
    const {mediaQueries}=Queries();
    const {isMobile}=mediaQueries;
  return (
    <Box
    sx={{
        margin:'0 auto',
        display:'flex',
        justifyContentL:'center',
        alignItems:'center',
        flexDirection:'column'
    }}
>
    <Skeleton 
        width='40%'
        height={50}
    />
    <Skeleton 
        width='40%'
        height={30}
    />
    <Box
        sx={{
            display:'grid',
            gridTemplateColumns:isMobile ? '1fr' : '1fr 1fr',
            width:'100%'
        }}
    >
        <ListSkeleton
        length={6}
            >
            <Box
            sx={{
                width:'100%',
            }}
            >
            <Box
                sx={{
                    display:'flex',
                    justifyContent:'start',
                    flexDirection:'column',
                    alignItems:'center',
                    width:'100%',
                    marginTop:'2vh',
                    padding:'0 10%'
                }}>
                <Skeleton 
                    variant="rounded"
                    width={60}
                    height={60}
                    sx={{
                        marginTop:'1vh'
                    }}
                /> 
                <Box
                    sx={{
                        width:'100%',
                        margin:'0 2vw'
                    }}
                >
                    <Skeleton 
                            variant="rectangular"
                            width='20%'
                            height={20}
                            sx={{
                                margin:'0 auto',
                                marginTop:'1vh'
                            }}
                        />
                    <ListSkeleton
                        length={2}
                    >
                        <Skeleton 
                            variant="rectangular"
                            width='100%'
                            height={20}
                            sx={{
                                marginTop:'1vh'
                            }}
                        />
                    </ListSkeleton>
                </Box>
            </Box>
            </Box>
        </ListSkeleton>
    </Box>
    </Box>
  )
}
