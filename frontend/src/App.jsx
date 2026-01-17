import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import Users from "./pages/Users";
import PersonPost from "./pages/PersonPost";

function App() {
  return (
   <>

{/* <BrowserRouter>
<Routes>
  <Route path="/" element={<Posts/>}/>
</Routes>
</BrowserRouter>
   */}


{/* <Posts/>
<Users/> */}
<PersonPost/>



   </>

  );
}

export default App;



