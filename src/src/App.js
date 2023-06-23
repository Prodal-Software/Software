import './App.css';
import { Routes, Route } from 'react-router-dom'

// Componentes
import Navbar from './components/Navbar';

// Usuário
import Cadastro from './components/Usuário/Cadastro';
import Login from './components/Usuário/Login';
import DoarAlimento from './components/Usuário/Doação';

// Motorista
import Motorista from './components/Motorista/Motorista';

// Administracao
import Administração from './components/Administração/Adm';

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
