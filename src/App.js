import './App.css';
import { Box, ThemeProvider } from '@mui/material';
import { ThemeContext } from './Context/ThemeContext';
import { useContext } from 'react';
import { LeftSide } from './Components/Global/LeftSide/LeftSide';
import { BackgroundComponent } from './Components/Basic/BackgroundComponent/BackgroundComponent';
import { RightSide } from './Components/Global/RightSide/RightSide';
import { Queries } from './config/Queries';
import { Footer } from './Components/Global/Footer/Footer';

function App() {
  const {backgroundPage}=useContext(ThemeContext);
  
  const {mediaQueries,theme}=Queries();
  const {isTablet,isMobile,isDesktop}=mediaQueries;

  const mobileLeftSideContainer={
    height: 'auto',
    padding:'5px 5npx',
    width:'100%'
  }
  const desktopLeftSideContainer={
    height: '100%',
    overflowY:'auto',
    padding:'30px 40px',
    width:'300px',
    borderRight:'2px solid #a77043',
    position:'relative'
  }
  const paddingTop=()=>{
    switch (true) {
      case isTablet:
        return '4vh 20px 1vh 20px';
        break;
      case isMobile:
        return '3vh 20px 1vh 20px';
        break;
      default:
        return '4vh 40px 4vh 40px';
        break;
    }
  }

  const mobileRightSide={
    padding:paddingTop(),
    width: '100%'      
  }

  const desktopRightSide={
    height:'100%',
    overflowY:'auto',
    overflowX:'hidden',
    padding:paddingTop(),
    width: isDesktop ? '1000px': '100%'
  }
  return (
    <ThemeProvider theme={theme}>
      <BackgroundComponent
        src={!isMobile ? backgroundPage : ''}
        styles={{
          height:!isMobile && '100vh',
          minHeight:'100vh',
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',
          backgroundPosition: "center",
          display:'flex',
          alignItems:'center',
          padding:{
            lg:'0 1vw',
            xl:'0 5vw'
          },
          flexDirection:isMobile && 'column',
          backgroundColor:isMobile && '#fff9f0'
      }}
      >
        <Box 
            sx={{
            margin:isTablet ? '0 5vw' : '0 auto',
            display:'flex',
            flexDirection:isDesktop ? 'row' : 'column',
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'#fff9f0',
            height:isMobile ?'100%':'85vh',
            width:isDesktop ? '1200px' : '100%',
            borderRadius:!isMobile && '5px',
            boxShadow:!isMobile && '5px 10px 10px 11px rgb(0 0 0 / 20%)'
            }}
          >
            <Box 
              sx={isDesktop ? desktopLeftSideContainer : mobileLeftSideContainer}
              >
              <LeftSide/>
            </Box>
            <Box 
              sx={isMobile ? mobileRightSide : desktopRightSide}
              >
              <RightSide/> 
            </Box>
        </Box>
        <Footer
          sx={{
            backgroundColor:isMobile && '#fff9f0',
            position:isMobile ? 'initial' :'absolute',
            width:isDesktop ? '90%' : '100%',
            bottom:'10px',
            textAlign:'center',
            padding:isMobile && '20px 20px',
            borderTop:isMobile && '1px solid #a770439E',
            marginTop:'auto'
          }}
        />
      </BackgroundComponent>
    </ThemeProvider>
    
  );
}

export default App;

