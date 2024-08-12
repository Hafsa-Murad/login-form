import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signUp';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import RefreshHandler from './RefreshHadler';

function App() {
  const[isAuthenticatd, setIsAuthenticated] = useState(false);
  const PrivateRoute = ({element}) => {
    return isAuthenticatd ? element : <Navigate to='/login'/>
  }
  return (
    <div className="App">
      <RefreshHandler setIsAuthenticated={setIsAuthenticated}/>
      <Routes>
        <Route path='/' element={<Navigate to="/login" />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>
        <Route path='/home' element={<PrivateRoute element={<Home />}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
