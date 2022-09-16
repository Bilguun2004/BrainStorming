import { Home } from "./pages/Home";
import Admin from "./pages/Admin";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import { sendRequest } from "./utils/Api";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  // const getData = async () => {
  //   const users = await sendRequest("user", "GET");
  //   console.log(users);
  // };
  // getData();
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/admin"} element={<Admin />} />
        <Route path={"/blog"} element={<Blog />} />
        <Route path={"/blogs"} element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
