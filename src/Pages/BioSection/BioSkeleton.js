import { Skeleton } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { ListSkeleton } from '../../Components/Basic/ListSkeleton/ListSkeleton'

export const BioSkeleton = () => {
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
        <ListSkeleton
        length={3}
            >
            <Box
            sx={{
                width:'100%'
            }}
            >
                <Box
                    sx={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'flex-end',
                    width:'100%',
                    marginTop:'1vh'
                }}
                >
                    <Skeleton 
                        variant="rectangular"
                        width='90%'
                        height={5}
                    />
                    <Skeleton 
                        variant="rectangular"
                        width='10%'
                        height={40}
                    />
                </Box>
                <Box
                    sx={{
                        display:'flex',
                        justifyContent:'start',
                        width:'100%',
                        marginTop:'2vh'
                    }}>
                    <Skeleton 
                        variant="circular"
                        width={50}
                        height={40}
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
                        <ListSkeleton
                            length={3}
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
  )
}
