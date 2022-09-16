import Blog from "./pages/Blog";
import { sendRequest } from "./utils/Api";

function App() {
  // const getData = async () => {
  //   const users = await sendRequest("user", "GET");
  //   console.log(users);
  // };
  // getData();
  return <Blog />;
}

export default App;
