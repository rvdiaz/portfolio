import { Box, Button, createTheme, InputBase, TextField, ThemeProvider, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { useState } from 'react';
import { ContactContext } from '../../Context/PagesContext/ContactContext';

export const ContactSection = () => {
  const {contactContent}= useContext(ContactContext);
  const {title,label,submit}=contactContent;
  const form = contactContent.form ? contactContent.form : [];

  const [inputForm, setinputForm] = useState({
    name:'',
    phone:'',
    email:'',
    website:'',
    message:''
})

  const theme = createTheme({
    palette: {
      themeColor: {
        main: '#a77043',
      }
    },
  });

  const handleSubmit=(e)=>{
    e.preventDefault();
  }

  const handlechangeform=(e)=>{
    setinputForm({
      ...inputForm,
      [e.target.name]:e.target.value
    })
    
  }
  
  return (
    <ThemeProvider theme={theme}>
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
        onSubmit={handleSubmit}
        component="form"
        sx={{
          display:'grid',
          width:'85%',
          gridTemplateColumns:'1fr 1fr',
          gridGap:'2vh',
          margin:'3vh auto',
          '& .Mui-focused:':{
            borderColor:'#a770439E !important'
          }
        }}
      >
        {form.map((input,index)=>{
        return(
          input.type != 'textarea'
          ?
          <TextField
            color='themeColor'
            key={index}
            name={input.label}
            label={input.label}
            type={input.type}
            size='medium'
            value={inputForm[input.label]}
            onChange={handlechangeform}
            sx={{
              textTransform:'capitalize',
              '& fieldset':{
                borderColor:'#a770439E'
              },
              '& .MuiInputBase-root:hover fieldset':{
                borderColor:'#a770439E'
              },
              '& .Mui-focused fieldset':{
                borderColor:'#a770439E !important'
              }
            }}
          />
          :
          <TextField
            color='themeColor'
            multiline
            key={index}
            minRows={4}
            maxRows={4}
            name={input.label}
            label={input.label}
            type={input.type}
            value={inputForm[input.label]}
            onChange={handlechangeform}
            sx={{
              textTransform:'capitalize',
              gridColumnStart:'1',
              gridColumnEnd:'3',
              '& fieldset':{
                borderColor:'#a770439E'
              },
              '& .MuiInputBase-root:hover fieldset':{
                borderColor:'#a770439E'
              },
              '& .Mui-focused fieldset':{
                borderColor:'#a770439E !important'
              }
            }}
          />
        )})}    
        <Button
          type='submit'
          disableRipple
          size='large'
          sx={{
            color:'#a770439E',
            border:'1px solid #a770439E',
            width:'50%',
            textAlign:'end',
            fontWeight:'600',
            '&:hover':{
              border:'1px solid #a77043',
              color:'#a77043',
              backgroundColor:'transparent'
            }
          }}
        >
          {submit?.label}
        </Button>
      </Box>
    </ThemeProvider>
  )
}
