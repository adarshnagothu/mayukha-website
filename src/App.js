import logo from './logo.svg';
import './App.css';
import Header from './Header';
import BirthdayCountdown from './Birthdaycountdown';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import CuteMoments from './CuteMoments';
import Firsttouch from './Firsttouch';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
    
    <Routes>
    <Route path="/" element={<Home></Home>} />
  <Route path="/birthdaycountdown" element={<BirthdayCountdown />} />
  <Route path="/cutemoments" element={<CuteMoments/>} />
  <Route path="/firsttouch" element={<Firsttouch></Firsttouch>} />
</Routes>
</BrowserRouter>
    </div>
    
  );
}

export default App;
