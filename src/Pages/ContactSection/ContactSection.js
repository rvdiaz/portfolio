import { CountertopsOutlined } from '@mui/icons-material';
import { Alert, Box, Button, createTheme, InputBase, TextField, ThemeProvider, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Queries } from '../../config/Queries';
import { ContactContext } from '../../Context/PagesContext/ContactContext';
import { SendForm } from '../../Helpers/SendForm';
import { validateForm } from '../../Helpers/ValidationForm';

export const ContactSection = () => {
  const {contactContent}= useContext(ContactContext);
  const {title,label,submit}=contactContent;
  const form = contactContent.form ? contactContent.form : [];
  
  
  const {mediaQueries}=Queries();
  const {isTablet, isDesktop,isMobile} = mediaQueries;

  const [inputForm, setinputForm] = useState({
    name:{
      value:'',
      error:false,
      errorMessage:''
    },
    phone:{
      value:'',
      error:false,
      errorMessage:''
    },
    email:{
      value:'',
      error:false,
      errorMessage:''
    },
    website:{
      value:'',
      error:false,
      errorMessage:''
    },
    message:{
      value:'',
      error:false,
      errorMessage:''
    }
  })

  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(handleFormError()){
      const res=await SendForm(inputForm);
      if(res.status==200){
        handleResetFields();
        Alert('sended Succesfully');
      }
  }
}

  const handleResetFields=()=>{
    setinputForm({
      name:{
        value:'',
        error:false,
        errorMessage:''
      },
      phone:{
        value:'',
        error:false,
        errorMessage:''
      },
      email:{
        value:'',
        error:false,
        errorMessage:''
      },
      website:{
        value:'',
        error:false,
        errorMessage:''
      },
      message:{
        value:'',
        error:false,
        errorMessage:''
      }
    })
  }
  const handlechangeform=(e)=>{
    setinputForm({
      ...inputForm,
      [e.target.name]:{
        ...[e.target.name],
        value:e.target.value
      }
    })
  }  
  const onBlurHandler=(e)=>{
    
  }

  const handleFormError=()=>{
      return validateForm(inputForm,setinputForm);
  }

  const formMobile={
    display: 'flex',
    flexDirection:'column',
    width:'100%',
    margin:'3vh auto',
    gridGap:'0.5vh',
    '& .Mui-focused:':{
      borderColor:'#a770439E !important'
    }
  }
  const formDesktop={
    display:'grid',
    width:'85%',
    gridTemplateColumns: '1fr 1fr',
    gridGap:'2vh',
    margin:'3vh auto',
    '& .Mui-focused:':{
      borderColor:'#a770439E !important'
    }
  }
  return (
    <Box>
      <Typography
            variant='h3'
            sx={{
                textTransform:'uppercase',
                fontWeight:'600',
                textAlign:'center',
                fontSize:isDesktop ? '33px' : '24px',
                marginBottom:'1vh'
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
      ></Box>
      </Box>
      <Box
        noValidate
        onSubmit={handleSubmit}
        component="form"
        sx={isMobile ? formMobile : formDesktop}
      >
        {form.map((input,index)=>{
          const fieldName=input.label.toLowerCase();
        return(
          input.type != 'textarea'
          ?
          <TextField
            error={inputForm[fieldName].error}
            helperText={inputForm[fieldName].error ? inputForm[fieldName].errorMessage : ' '}
            onBlur={onBlurHandler}
            required={input.required ? true : false}
            color='themeColor'
            key={index}
            name={fieldName}
            label={input.label}
            type={input.type}
            size={isMobile ? 'small' : 'medium'}
            value={inputForm[fieldName].value}
            onChange={handlechangeform}
            sx={{
              '& fieldset':{
                borderColor:'#a770439E'
              },
              '& .MuiInputBase-root:hover fieldset':{
                borderColor:'#a770439E'
              },
              '& .Mui-focused fieldset':{
                borderColor:'#a770439E !important'
              },
              "& input:-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 1000px #fff9f0 inset"
              }
            }}
          />
          :
          <TextField
            helperText=' '
            required={input.required ? true : false}
            color='themeColor'
            multiline
            key={index}
            minRows={4}
            maxRows={4}
            name={fieldName}
            label={input.label}
            type={input.type}
            value={inputForm[fieldName].value}
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
          size={isMobile ? 'medium' : 'large'}
          sx={{
            color:'#a770439E',
            border:'1px solid #a770439E',
            width:isTablet ? '100%' : '50%',
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
    </Box>
  )
}
