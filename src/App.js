import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import bg from "../src/Asset/Bacground/bg1.jpg";
import "./App.css";
import Home from "./Page1/Home";
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
          <Route path="/Portofolio" Component={Portofolio} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
