import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navbar, Homepage, Register, Login} from './components';

function App() {
  return (
    <Router> 
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>} />
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/register' element={<Register></Register>}/>
      </Routes>
    </Router>
  )
}

export default App
