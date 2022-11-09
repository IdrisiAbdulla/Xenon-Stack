import Register from "./components/Register";
import Login from "./components/Login";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Authorize from "./components/Authorize";
import Contact from "./components/Contact";



function App() {
  return (
    
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route element={<Register/>} path="/" />
        <Route element={<Register />} path="/Register" />
        <Route element={<Login/>} path="/login" />
       
        <Route element={<Contact/>} path="/Contact" />
        <Route element={<Authorize><Home /></Authorize>} path="Home" />
        <Route element={<Register/>} path="*" />
      </Routes>
    

      </BrowserRouter>
      
  );
}

export default App;
