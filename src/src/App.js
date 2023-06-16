import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Cadastro from './components/Cadastro';
import DoarAlimento from './pages/DoarAlimento';
import Login from './components/Login';
import Motorista from './components/Motorista';
import Administração from './pages/Adm';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/cadastro' element={<Cadastro/>}/>
          <Route path='/motorista' element={<Motorista/>}/>
          <Route path='/doacao' element={<DoarAlimento/>}/>
          <Route path='/admin' element={<Administração/>}/>
        </Routes>
    </div>
  );
}

export default App;
