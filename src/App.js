import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addpatient from './components/Addpatient';
import Viewpatient from './components/Viewpatient';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Addpatient/>}/>
        <Route path='/viewall' element={<Viewpatient/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
