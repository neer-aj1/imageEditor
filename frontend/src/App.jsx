import './App.css';
import { ToastContainer } from 'react-toastify';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navbar, Homepage, Register, Login, Editor, Compress, Format} from './components';

function App() {
  return (
    <Router> 
      <ToastContainer />
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>} />
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/register' element={<Register></Register>}/>
        <Route path='/edit' element={<Editor></Editor>} />
        <Route path='/compress' element={<Compress></Compress>} />
        <Route path='/format' element={<Format></Format>} />
      </Routes>
    </Router>
  )
}

export default App
