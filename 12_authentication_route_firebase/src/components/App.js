import logo from '../logo.svg';
import '../App.css';
import SignUp from './SignUp';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext';
import Essai from './Essai';


function App() {
  return (
    <>
      {/* <AuthProvider>
        <Container className='d-flex align-items-center justify-content-center'
          style={{ minHeight: "100vh"}}
        >
          <div className="w-100" style={{ maxWidth: '500px'}} >
            <SignUp />
          </div>

        </Container>
      </AuthProvider>

      <Essai /> */}

        Bonjour

        <Container className='d-flex align-items-center justify-content-center'
          style={{ minHeight: "100vh"}}
        >

          <div className="w-100" style={{ maxWidth: '500px'}} >
            <SignUp />
          </div>
          
        </Container>

        
    </>

  );
}

export default App;
