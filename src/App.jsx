import "./css/App.css";

import { Header } from "./components/Header";
import { Body } from "./components/Body";


function App() {

  return (
    <div className="weather weather__wrapper">
      <Header />
      <Body />
    </div>
  );
}

export default App;
