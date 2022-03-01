import logo from '../logo.svg';
import '../App.css';
import SignUp from './SignUp';
import { Container } from 'react-bootstrap';


function App() {
  return (

    <Container className='d-flex align-items-center justify-content-center'
      style={{ minHeight: "100vh"}}
    >
      <div className="w-100" style={{ maxWidth: '500px'}} >
        <SignUp />
      </div>

    </Container>

  );
}

export default App;
