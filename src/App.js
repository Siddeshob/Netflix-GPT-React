import { Provider } from "react-redux";
import Body from "./Components/Body";
import AppStore from "./Utils/AppStore";
function App() {
  return  <div>
    <Provider store={AppStore}>
      <Body />
    </Provider>
  </div> ;
}

export default App;
