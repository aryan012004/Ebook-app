
import logo from './logo.svg';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Component/Header';
import About from './Component/About';
import Contact from './Component/Contact';
import Reciept from './Component/Reciept';
import ViewRecipe from './Component/ViewReciepe';
import AddBooks from './Component/AddBooks';
import Books from './Component/Books';
import ViewBook from './Component/ViewBook';

function App() {
  return (
    <div className="App">
           <BrowserRouter>
         <Header/>
          <Routes>
                 
                 
                <Route path="/" element={<Books />} />
                <Route path="/addbook" element={<AddBooks/>} />
               <Route path='/viewbook/:id' element={<ViewBook/>}/>
                  <Route path="/about" element={<About/>} />
                  <Route path="/contact" element={<Contact/>} />
                  
                  
          </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
