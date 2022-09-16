import { Home } from "./pages/Home";
import { sendRequest } from "./utils/Api";

function App() {
  // const getData = async () => {
  //   const users = await sendRequest("user", "GET");
  //   console.log(users);
  // };
  // getData();
  return <>
  <Home/>
  </> ;
}

export default App;
