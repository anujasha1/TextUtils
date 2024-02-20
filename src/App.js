import './App.css';
import Navbar from './componenets/Navbar';
import TextFrom from './componenets/TextForm';
import About from './componenets/About';
import { useCallback, useState } from 'react';
import Alert from './componenets/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = useCallback((message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }, [setAlert])

  const toggleMode = useCallback(() => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode enabled", "success")
      document.title = "textUtils - Dark Mode"
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode enabled", "success")
      document.title = "TextUtils - Light mode"
    }
  }, [mode])

  return (
    <div>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<TextFrom heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
