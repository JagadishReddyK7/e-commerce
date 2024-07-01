import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/women' element={<ShopCategory/>}/>
          <Route path='/kids' element={<ShopCategory/>}/>
          <Route path='/men' element={<ShopCategory/>}/>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
