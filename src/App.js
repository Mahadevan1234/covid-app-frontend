import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addpatient from './components/Addpatient';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Addpatient/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
