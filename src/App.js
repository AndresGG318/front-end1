// import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import EmpListing from './EmpListing';
// import { Login } from "./Login";
// import { Register } from "./Register";


function App() {
  return (
    <div className="App">
      <h1>React JS CRUD Operations</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing/>}></Route>
          {/* <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route> */}
        </Routes> 
      </BrowserRouter>
    </div>
  );
  
}



export default App;
