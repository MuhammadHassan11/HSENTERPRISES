import PDP from "./Components/PDP";
import PLP from "./Components/PLP";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Navbar from "./Components/Navbar";
import Success from "./Components/Success";
import Footer from "./Components/Footer";

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Navbar />



        <Routes>


          <Route exact path="/" element={<PLP />} />
          <Route exact path="/pdp" element={<PDP />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/success" element={<Success />} />


        </Routes>

        <Footer />
      </Router>

    </div>
  );
}

export default App;
