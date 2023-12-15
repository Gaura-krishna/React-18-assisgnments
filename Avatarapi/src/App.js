import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
 import User from './Components/User';
// import Carddata from './Components/Carddata';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
      
        <Route path='/user/:id' element={<User/>}/>
     </Routes>

    </div>
  )
}

export default App;
