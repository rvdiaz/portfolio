import logo from './logo.svg';
import './App.css';
import { MainMenu } from './Components/Global/MainMenu/MainMenu';
import { HeaderSection } from './Components/Global/HeaderSection/HeaderSection';

function App() {
  return (
    <div className="App">
        <MainMenu/>
        <HeaderSection/>
    </div>
  );
}

export default App;
