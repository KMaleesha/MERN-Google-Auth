import './App.css';
import AppBar from './Component/AppBar/AppBar';
import Login from './Component/LoginPage/Login';
import Home from './Component/Home';
import FileUpload from './Component/FileUpload/ProfileUpload';

import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <div>
      <AppBar/>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/home/fileupload' element={<FileUpload/>}/>
      </Routes>
    </div>
  );
}

export default App;
