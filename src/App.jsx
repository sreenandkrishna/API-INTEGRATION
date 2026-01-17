import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import Users from "./pages/Users";
import PersonPost from "./pages/PersonPost";
import Navbar from "./components/Navbar";



function App() {
  return (
   <>

<BrowserRouter>
<Navbar/>

<Routes>
  <Route path="/" element={<Posts/>}/>
  <Route path="/users" element={<Users/>}/>
  <Route path="/person/:id" element={<PersonPost/>}/>


</Routes>
</BrowserRouter>
  






   </>

  );
}

export default App;



