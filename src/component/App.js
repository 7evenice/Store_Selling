import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../App.css';
import About from './About';
import Detail from './Detail';
import Home from './Home';
import Nav from './Nav';
import Product from './Product';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/product' element={<Product/>} />
          <Route path='/product/:id' element={<Detail/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
