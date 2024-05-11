import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MyProfile from "./pages/MyProfile";
import Umkm from "./pages/UmkmRt";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import LetterRequest from "./pages/PermohonanSurat/LetterRequest";

import DashboardWargaPage from "./pages/DashboardWarga/DashboardWargaPage";
import DashboardRtPage from "./pages/DashboardRT/DashboardRtPage";
import DashboardSekretarisPage from "./pages/DashboardSekretaris/DashboardSekretarisPage";

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
            path="/letter_req"
            element={<LetterRequest />}
          />
          <Route
            path="/dashboard_warga"
            element={<DashboardWargaPage />}
          />
          <Route
            path="/dashboard_rt"
            element={<DashboardRtPage />}
          />
          <Route
            path="/dashboard_sekretaris"
            element={<DashboardSekretarisPage />}
          />
          

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
