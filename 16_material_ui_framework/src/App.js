import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import IntroMaterialUi from './pages/IntroMaterialUi';


import './App.css';
import Home from "./pages/Home";





function App() {


  return (
   
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/intro' element={<IntroMaterialUi />}  />       

      </Routes>
        
  );
}


export default App;