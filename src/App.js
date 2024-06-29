import logo from './logo.svg';
import './App.css';
import Nav from './NavBar';
import Login from './Login';
import "../../node_modules/bootstrap/dist/css/bootstrap.css"

function App() {
  return (
    <div className="App">
      <Nav/>
     <div className='login-bg'><Login/></div>
    </div>
  );
}

export default App;


