import './App.scss';
import Login from './components/Login';
import Register from './components/Register';
import { useState } from 'react';

function App() {
  const [isToLogin, setIsToLogin] = useState(false)
  const [isShow, setIsShow] = useState(false)

  const handleShow = () => {
      setIsShow(!isShow)
  }

  const handleToLogin = () => {
    setIsToLogin(!isToLogin)
  }

  return (
    <div className="App">
      {isToLogin ? 
        <Login 
          handleToLogin={handleToLogin}
          isShow={isShow}
          setIsShow={setIsShow}
          handleShow={handleShow}
        /> 
        : <Register 
          handleToLogin={handleToLogin}
          isShow={isShow}
          setIsShow={setIsShow}
          handleShow={handleShow}
        />
      }
    </div>
  );
}

export default App;
