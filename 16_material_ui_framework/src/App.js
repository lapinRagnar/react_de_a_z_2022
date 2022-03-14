import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import IntroMaterialUi from './pages/IntroMaterialUi';


import './App.css';
import Home from "./pages/Home";
import MachineAcafe from "./pages/MachineAcafe";





function App() {


  return (
   
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/intro' element={<IntroMaterialUi />}  /> 
        <Route path='/machine-a-cafe' element={<MachineAcafe />} />      

      </Routes>
        
  );
}


export default App;