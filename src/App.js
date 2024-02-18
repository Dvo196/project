import './App.css';
 import { BrowserRouter , Routes , Route } from 'react-router-dom';

import Site from './Site';
import Header from "./Header/Header"
import Home from "./Home/Home"
import Coolection from "./Coolection/Coolection"
import Products from "./Products/Products"
import Contact from "./Contact/Contact"

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route  path='/' element={<Site/>} />

            <Route  path='/Home' element={<Home/>} />
            <Route  path='/Coolection' element={<Coolection/>} />
            <Route  path='/Products' element={<Products/>} />
            <Route  path='/Contact' element={<Contact/>} />




          {/* <Route  path='/Products' element={<Products/>} />
            {/* <Route  path='/Products' element={<Products/>} />
            <Route  path='/:id' element={<PhonesItem/>} />
            <Route  path='/Products/:id' element={<ProductItem/>} /> */}


         

            {/* <Route  path='*' element={<NotDound/>} />  */}

        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
