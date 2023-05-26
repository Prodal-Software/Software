import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Cadastro from './pages/Cadastro';
import DoarAlimento from './pages/DoarAlimento';
import Login from './components/Login';
import Motorista from './pages/Motorista';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cadastro' element={<Cadastro/>}/>
          <Route path='/motorista' element={<Motorista/>}/>
          <Route path='/doacao' element={<DoarAlimento/>}/>
        </Routes>
    </div>
  );
}

export default App;
