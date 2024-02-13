import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import UmkmMasyarakat from "./pages/UmkmMasyarakat";
import MyProfile from "./pages/MyProfile";
import Payment from "./pages/Payment";

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
            element={<UmkmMasyarakat />}
          />
          <Route
            path="/myprofile"
            element={<MyProfile />}
          />
          <Route
            path="/payment"
            element={<Payment/>}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App;
