import React from 'react'
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { ModalImage } from '../ModalImage/ModalImage';

export const WorkCardsImage = (props) => {
    const {imageUrl,alternativeText,label}=props;

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
    <>
        <Card
            elevation={2}
            sx={{
            width:'100%',
            borderRadius:'5px',
            textAlign:'center',
            border:'1px solid #a770439E',
            '&:hover':{
                cursor:'pointer',
                boxShadow:'0 0 5px 0 #a77043',
            }
            }}
            onClick={handleOpen}
        >
        <CardMedia
            component='img'
            image={imageUrl}
            alt={alternativeText}
            sx={{
                width:'100%',
                height:'20vh',
                objectFit:'contain'
            }}
        >
        </CardMedia>
        <CardContent
            sx={{
                paddingBottom:'0 !important',
                padding:'10px !important',
                borderTop:'1px solid #e8e2e2',
                display:'grid',
                gridTemplateColumns:'1fr 1fr 1fr',
                alignItems:'center'
            }}
        >
            <Box></Box>
            <Typography
                sx={{
                    fontSize:'18px',
                    color:'black'
                }}
            >
                {label}
            </Typography>
            <IconButton 
                    aria-label="show"
                    sx={{
                        paddingBottom:0,
                        paddingTop:0,
                        marginLeft:'auto'
                    }}
                >
                <VisibilityIcon />
            </IconButton>
        </CardContent>
        </Card>
        <ModalImage 
            handleClose={handleClose}
            open={open}
            img={imageUrl}
        />
    </>
    )
}
