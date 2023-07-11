
import './App.css';
import React  from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './Layout';
import HomeApp from './Home';
import AboutApp from './About';
import RegisterApp from './Register';
import BlogApp from './Blog';
import BlogDetailApp from './BlogDetail';
import NopageApp from './Nopage';
import Ex2App from './Exa2';

function App() {
  return (
    
    <div className='App'>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='homepage'element={<HomeApp/>}/>
          <Route path='aboutpage'element={<AboutApp/>}/>
          <Route path='registerpage'element={<RegisterApp/>}/>
          <Route path='blogpage'element={<BlogApp/>}/>
          <Route path='blog/:id'element={<BlogDetailApp/>}/>
          <Route path='*' element={<NopageApp/>}/>
          <Route path='Ex2page'element={<Ex2App/>}/>





     </Route>

      </Routes>
      
      </BrowserRouter>
        
        
    </div>
  );
}

export default App;
