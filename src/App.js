import logo from "./logo.svg";
import "./App.css";
import Weather from "./component/weather/Weather";
import store from "./component/app/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Weather />
      </Provider>
    </>
  );
}

export default App;
