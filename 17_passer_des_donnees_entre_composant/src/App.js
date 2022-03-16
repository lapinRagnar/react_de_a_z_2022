import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import PasserPropsEntreParentVersEnfant from './pages/PasserPropsEntreParentVersEnfant';
import PropsVersParentEnfantPetitenfant from './pages/PropsVersParentEnfantPetitenfant';

function App() {

  const titre = "ex - passer des variables entre parent et enfant"
  const message = "mon super message! - de parent vers enfant vers petit enfant"

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/passer-des-props-entre-parent-vers-enfant" element={ <PasserPropsEntreParentVersEnfant titre={titre} />} />
        <Route path="/props-vers-parent-enfant-petitenfant" element={ <PropsVersParentEnfantPetitenfant message={message}  />} />
      </Routes>
    </> 
  )
}

export default App;
