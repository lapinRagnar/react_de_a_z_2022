import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import IntroMaterialUi from './pages/IntroMaterialUi';


import './App.css';
import Home from "./pages/Home";
import MachineAcafe from "./pages/MachineAcafe";
import PasserPropsDansMakestyle from "./components/PasserPropsDansMakestyle";





function App() {


  return (
   
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/intro' element={<IntroMaterialUi />}  /> 
        <Route path='/machine-a-cafe' element={<MachineAcafe />} />
        <Route path="/passer-props-dans-makestyle" element={<PasserPropsDansMakestyle />} />      

      </Routes>
        
  );
}


export default App;