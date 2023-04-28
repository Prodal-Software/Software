import logo from './logo.svg';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import LoginForm from './components/login_page';
import RegisterForm from './components/register_page';
import DonationForm from './components/donation_page';

function App() {
  return (
    <div className="App">
      <DonationForm></DonationForm>
    </div>
  );
}

export default App;
