import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import PasserPropsEntreParentVersEnfant from './pages/PasserPropsEntreParentVersEnfant';
import PropsVersParentEnfantPetitenfant from './pages/PropsVersParentEnfantPetitenfant';
import Enfant1 from './pages/Enfant1';
import { useState } from 'react';



function App() {

  const titre = "ex - passer des variables entre parent et enfant"
  const message = "mon super message! - de parent vers enfant vers petit enfant"
  const [valeurParent, setValeurParent] = useState(111)

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/passer-des-props-entre-parent-vers-enfant" element={ <PasserPropsEntreParentVersEnfant titre={titre} />} />
        <Route path="/props-vers-parent-enfant-petitenfant" element={ <PropsVersParentEnfantPetitenfant message={message}  />} />
        <Route path="/enfant-vers-parent" element={ <Enfant1 valeurParent={valeurParent} setValeurParent={setValeurParent} />} />

      </Routes>
    </> 
  )
}

export default App;
