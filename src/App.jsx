import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MyProfile from "./pages/MyProfile";
import Payment from "./pages/Payment";
import Umkm from "./pages/UMKM";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/umkm"
            element={<Umkm />}
          />
          <Route
            path="/myprofile"
            element={<MyProfile />}
          />
          <Route
            path="/payment"
            element={<Payment />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App;
