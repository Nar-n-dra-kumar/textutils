import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';


function App() {
  const [mode , setMode] = useState('warning'); //weather dark mode enabled or not.....
  const [alert, setAlert] = useState('null');

const showAlert =(message , type) =>{
  setAlert({
    msg: message,
    type: type,

  })
  setTimeout(() => {
    setAlert(null);
  }, 1500); 
  
}

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('warning');
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = 'black'; 
      showAlert("Light mode has been enabled" , "success");
    } 
    else {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(2 38 74)';  //light mode color...  replace with your color..^^ ^^
      document.body.style.color = '#fff';  //light mode text color...  replace with your color..^^ ^^
      showAlert("Dark mode has been enabled" , "success");

    }

  }
  return (
    <>
    <Navbar title="React" home="Home" about="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container"> 
      <TextForm showAlert={showAlert} hedding="ENTER TEXT TO ANALYZE" mode={mode} />
    </div>
    <About mode={mode} />
   </>
   
  );
}


export default App;