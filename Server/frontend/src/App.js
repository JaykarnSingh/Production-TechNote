import './App.css';
import { NavBar } from './Components/Layout/NavBar';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {Home} from './Components/Main/Home';
import { About } from './Components/Main/About';
import {Contact} from './Components/Main/Contact'
import { Footer } from './Components/Layout/Footer';
import AdminLogin from './Components/Main/Admin/AdminLogin.js'
import AdminProfile from './Components/Main/Admin/AdminProfile.js'
import PrivateComponentAdmin from './Components/Main/Admin/PrivateComponentAdmin'
import {Card} from './Components/Main/Card'
import HTML from './Components/Main/CardComponents/HTML';
import CSS from './Components/Main/CardComponents/CSS';

import Blog from './Components/Main/Blog'


function App() {
  let Data="JAYKARNcodes";
  return (
    <div >
    <BrowserRouter>
    <NavBar data={Data}/>
      <Routes>
      <Route path='/' element={<Home data={Data}/>}></Route>
      <Route path='/about' element={<About data={Data}/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>

 {/* card navbat */}
      <Route path='/card' element={<Card/>}></Route>
      <Route path='/card/html' element={<HTML/>}></Route>
      <Route path='/card/css' element={<CSS/>}></Route>

      
      
      <Route path='/blog' element={<Blog/>}></Route>
     
      <Route path='/admin' element={<AdminLogin/>}></Route>
      <Route element={<PrivateComponentAdmin/>}>
       <Route path='/adminprofile' element={<AdminProfile/>}></Route>
       </Route>
      </Routes>

    </BrowserRouter>


 

    <Footer/>
    </div>
  );
}

export default App;
