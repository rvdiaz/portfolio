import logo from './logo.svg';
import './App.css';
import { MainMenu } from './Components/Global/MainMenu/MainMenu';
import { HeaderSection } from './Pages/BioSection/BioSection';
import { ServiceSection } from './Pages/ServiceSection.js/ServiceSection';
import { Box, Container, Grid, useMediaQuery, useTheme } from '@mui/material';
import { BodyContext } from './Context/BodyContext';
import { ThemeContext } from './Context/ThemeContext';
import { useContext } from 'react';
import { Perfil } from './Components/Basic/Perfil/Perfil';
import { LeftSide } from './Components/Global/LeftSide/LeftSide';
import { BackgroundComponent } from './Components/Basic/BackgroundComponent/BackgroundComponent';
import { RightSide } from './Components/Global/RightSide/RightSide';
import { red } from '@mui/material/colors';

function App() {
  const {backgroundPage}=useContext(ThemeContext);
  
  const theme=useTheme();
  const isMobile=useMediaQuery(theme.breakpoints.down('md'));

  return (
    <BackgroundComponent
      src={backgroundPage}
      styles={{
        height: '100vh',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition: "center",
        display:'flex',
        alignItems:'center',
        padding:'0 5vw'
    }}
    >
      <Box 
        maxWidth='lg'
        sx={{
          margin:'0 auto',
          display:'flex',
          justifyContent:'center',
          backgroundColor:'#fff9f0',
          height:'85vh',
          borderRadius:'5px',
          boxShadow:'5px 10px 10px 11px rgb(0 0 0 / 20%)',
          position:'relative'
          }}
        >
          <Box 
            sx={{
              height:'100%',
              overflowY:'auto',
              padding:'30px 40px',
              width:'300px',
              borderRight:'2px solid #a77043'
            }}
            >
            <LeftSide/>
          </Box>
          <Box 
            sx={{
              width:'70%',
              height:'100%',
              overflowY:'auto',
              padding:'30px 30px 30px 40px'
            }}
            >
            <RightSide/>
          </Box>
      </Box>
    </BackgroundComponent>
    
  );
}

export default App;

