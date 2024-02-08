import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addpatient from './components/Addpatient';
import Viewpatient from './components/Viewpatient';
import Searchpatient from './components/Searchpatient';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Addpatient/>}/>
        <Route path='/viewall' element={<Viewpatient/>}/>
        <Route path='/search' element={<Searchpatient/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
