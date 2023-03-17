import { Skeleton } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { ListSkeleton } from '../../Components/Basic/ListSkeleton/ListSkeleton'
import { Queries } from '../../config/Queries'

export const ContactSkeleton = () => {
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
                    variant="rectangular"
                    width='100%'
                    height={40}
                    sx={{
                        marginTop:'1vh'
                    }}
                />
            </Box>
            </Box>
        </ListSkeleton>
    </Box>
    </Box>
  )
}
