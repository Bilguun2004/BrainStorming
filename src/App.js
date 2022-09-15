import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { sendRequest } from "./utils/Api";

function App() {
  // const getData = async () => {
  //   const users = await sendRequest("user", "GET");
  //   console.log(users);
  // };
  // getData();
  return <>
  <Navbar/>
  <Footer/>
  </> ;
}

export default App;
