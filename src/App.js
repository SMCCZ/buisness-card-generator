import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BusisnessForm from "./Pages/Form/Form";
import QRDownload from "./Pages/QRDownload/QrDownload";
import ReverseImageSearch from "./Pages/ImageSearch/ImageSearch";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/form" element={<BusisnessForm />}></Route>
          <Route path="/download" element={<QRDownload />}></Route>
        </Routes>
      </Router>{" "}
    </div>
  );
}

export default App;
//   <Route path="/form" element={ <BusinessForm />}>
