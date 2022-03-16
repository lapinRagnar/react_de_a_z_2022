import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import PasserPropsEntreParentVersEnfant from './pages/PasserPropsEntreParentVersEnfant';

function App() {

  const titre = "ex - passer des variables entre parent et enfant"
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/passer-des-props-entre-parent-vers-enfant" element={ <PasserPropsEntreParentVersEnfant titre={titre} />} />
      </Routes>
    </> 
  )
}

export default App;
