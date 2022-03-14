import {
  Routes,
  Route,
} from "react-router-dom";
import IntroMaterialUi from './pages/IntroMaterialUi';
import Home from "./pages/Home";
import MachineAcafe from "./pages/MachineAcafe";
import PasserPropsDansMakestyle from "./components/PasserPropsDansMakestyle";
import TutoTypography from "./components/TutoTypography";
import './App.css';
import TutoTheming from "./components/TutoTheming";
import TutoPaper from "./components/TutoPaper";
import TutoDarkMode from "./components/TutoDarkMode";



function App() {


  return (
   
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/intro' element={<IntroMaterialUi />}  /> 
        <Route path='/machine-a-cafe' element={<MachineAcafe />} />
        <Route path="/passer-props-dans-makestyle" element={<PasserPropsDansMakestyle />} />   
        <Route path="/typograpgy" element={ <TutoTypography /> } />   
        <Route path="/theming" element={<TutoTheming />} />
        <Route path="/paper" element={<TutoPaper />} />
        <Route path="/darkmode" element={<TutoDarkMode />} />

      </Routes>
        
  );
}


export default App;