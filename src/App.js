import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('warning'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('warning');
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(2 38 74)'; 
      document.body.style.color = '#fff'; 
      showAlert("Dark mode has been enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="React" home="Home" about="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm showAlert={showAlert} heading="ENTER TEXT TO ANALYZE" mode={mode} />} />
          </Routes>
          {/* <TextForm showAlert={showAlert} heading="ENTER TEXT TO ANALYZE" mode={mode} />
          <About /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
