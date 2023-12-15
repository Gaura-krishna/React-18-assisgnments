import { BrowserRouter, Route, Routes } from "react-router-dom";
import Addcontact from "./Component/Addcontact";
import Home from "./Component/Home";
import { EditContact } from "./Component/EditContact";


function App() {
  return (
    <div className="App">
           <BrowserRouter>
 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Addcontact/>}/>
        <Route path='/edit/:id' element={<EditContact/>}/>

      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
