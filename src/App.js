import logo from './logo.svg';
import './App.css';
import Header from './Header';
import BirthdayCountdown from './Birthdaycountdown';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import CuteMoments from './CuteMoments';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <CuteMoments></CuteMoments>
    <Routes>
    <Route path="/" element={<Home></Home>} />
  <Route path="/birthdaycountdown" element={<BirthdayCountdown />} />
</Routes>
</BrowserRouter>
    </div>
    
  );
}

export default App;
