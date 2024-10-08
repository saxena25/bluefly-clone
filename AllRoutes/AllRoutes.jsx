import {Routes, Route} from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Women from "../components/Women";
import Men from "../components/Men";
import Cart from "../components/Cart";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default AllRoutes
