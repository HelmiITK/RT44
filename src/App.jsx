import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MyProfile from "./pages/MyProfile";
import Payment from "./pages/Payment";
import Umkm from "./pages/UmkmRt";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";

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
            path="/login"
            element={<LoginPage />}
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

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
