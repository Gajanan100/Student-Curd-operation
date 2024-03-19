import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Component/Home';
import { About } from './Component/About';
import  Student  from './Component/Student';
import { Pagenotfound } from './Component/Pagenotfound';
import Navbar from './Component/Navbar';
import PostDemo from './Component/PostDemo';

function App() {
  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/about' element= {<About/>} ></Route>
      <Route path='student' element={<Student/>} ></Route>
      <Route path='post' element={<PostDemo/>}></Route>
      <Route path='*' element={<Pagenotfound/>}></Route>
     </Routes>
     
    </>
  );
}

export default App;
