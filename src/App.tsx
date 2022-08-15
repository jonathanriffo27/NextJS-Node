import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Canales from "./components/funcional/Canales";
import Switch from "./components/funcional/Switch";

import store from "../src/redux/store"
import { Provider } from "react-redux";


function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/canales" element={<Canales />} />
            <Route path="/" element={<Switch />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App
