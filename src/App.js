import logo from './logo.svg';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Home from './components/Home/Home';
import Register from './components/Auth/Register';
import Character from './components/Page/TitanChar/TitanChar';
import DetailChar from './components/Page/TitanChar/TitanCharDetail';
import Episodes from './components/Page/TitanEps/TitanEps';
import EpisodeDetail from './components/Page/TitanEps/TitanEpsDetail';


function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored'></ToastContainer>
      <BrowserRouter>
      <Routes>
      <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/char' element={<Character/>}></Route>
        <Route path='/characters/:id' element={<DetailChar/>}></Route>
        <Route path='/episode' element={<Episodes/>}></Route>
        <Route path='/episodes/:id' element={<EpisodeDetail/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
