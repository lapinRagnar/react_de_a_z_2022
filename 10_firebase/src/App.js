import logo from './logo.svg';
import './App.css';

const Dot = ({color}) => {

  const style = {
    height: 50,
    width: 50,
    margin: "0px 10px",
    backgroundColor: color,
    borderRadius: "50%",
    display: "inline-block"
  }
  return (
    <span style={style}></span>
  )
}

function App() {


  return (
    <div>
        <h1>Bonjour!</h1>
        <button>Nouveau</button>
        <ul>
          <li>
            <a href="#">editer</a> <Dot color="#f00" /> Red
          </li>
          <li>
            <a href="#">editer</a> <Dot color="#0f0" /> Green
          </li>
          <li>
            <a href="#">editer</a> <Dot color="#00f" /> Blue
          </li>
        </ul>
    </div>
  );
}

export default App;
