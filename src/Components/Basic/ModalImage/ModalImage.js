import { Modal } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Image } from '../Image/Image';

export const ModalImage = (props) => {
    const {handleClose,open,img}=props;

  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
        }}
      >
        <Box
            sx={{
                height:'80vh',
                maxWidth:'90%',
                outline:'none'
            }}
        >
            <Image 
                src={img}
                sx={{
                    height:'100%',
                    width:'100%',
                    objectFit:'contain'
                }}
            />
        </Box>
      </Modal>
  )
}
