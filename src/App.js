import NavBar from "./Components/NavBar";
import VirtualLibrary from "./Components/VirtualLibrary";
import AddUser from "./Components/AddUser";
import EditUser from "./Components/EditUser";
import NotFound from "./Components/NotFound";
import {BrowserRouter, Route,Routes } from "react-router-dom"; 
import AllMsgs from "./Components/AllMsgs";

function App() {
  return (
    <BrowserRouter>
   
   <NavBar/>
   <Routes>
   <Route path="/" element={<VirtualLibrary/>} />
   <Route path="/all" element={<AllMsgs/>} />
   <Route path="/add" element={<AddUser/>} />
   <Route path="edit/:id" element={<EditUser/>} />
   <Route path="*" element={<NotFound/>} />
   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
