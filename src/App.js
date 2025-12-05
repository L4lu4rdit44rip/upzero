import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import bg from "../src/Asset/Bacground/bg1.jpg";
import "./App.css";
import Home from "./Page1/Home";
import Porto from "./Page2/Porto";
import Portofolio from "./Page2/Portofolio";

function App() {
  return (
    <div
      className="bg-fixed bg-cover bg-center "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Router>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/Home" Component={Home} />
          <Route path="/Porto" Component={Porto} />
          <Route path="/Portofolio" Component={Portofolio} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
