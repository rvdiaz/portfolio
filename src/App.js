import logo from './logo.svg';
import './App.css';
import { MainMenu } from './Components/Global/MainMenu/MainMenu';
import { ServiceSection } from './Pages/ServiceSection.js/ServiceSection';
import { Box, Container, Grid, ThemeProvider, useMediaQuery, useTheme } from '@mui/material';
import { ThemeContext } from './Context/ThemeContext';
import { useContext } from 'react';
import { Perfil } from './Components/Basic/Perfil/Perfil';
import { LeftSide } from './Components/Global/LeftSide/LeftSide';
import { BackgroundComponent } from './Components/Basic/BackgroundComponent/BackgroundComponent';
import { RightSide } from './Components/Global/RightSide/RightSide';
import { red } from '@mui/material/colors';
import { Queries } from './config/Queries';

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
    borderRight:'2px solid #a77043'
  }
  
  return (
    <ThemeProvider theme={theme}>
      <BackgroundComponent
        src={backgroundPage}
        styles={{
          height: '100vh',
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',
          backgroundPosition: "center",
          display:'flex',
          alignItems:'center',
          padding:{
            lg:'0 1vw',
            xl:'0 5vw'
          }
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
            borderRadius:'5px',
            boxShadow:'5px 10px 10px 11px rgb(0 0 0 / 20%)',
            position:'relative'
            }}
          >
            <Box 
              sx={isDesktop ? desktopLeftSideContainer : mobileLeftSideContainer}
              >
              <LeftSide/>
            </Box>
            <Box 
              sx={{
                height:'100%',
                overflowY:'auto',
                overflowX:'hidden',
                padding:isDesktop ? '4vh 40px 4vh 40px' : '1vh 20px 1vh 20px',
                width:isDesktop ? '1000px' : '100%'         
            }}
              >
              <RightSide/>
            </Box>
        </Box>
      </BackgroundComponent>
    </ThemeProvider>
    
  );
}

export default App;

