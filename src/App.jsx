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
import DashboardBendaharaPage from "./pages/DashboardBendahara/DashboardBendaharaPage";

import NoAccessToken from "./security/NoAccessToken";
import Protected from "./security/Protected";
import UnauthorizedPage from "./pages/UnauthorizedPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={
              <NoAccessToken>
                <LoginPage />
              </NoAccessToken>
            }
          />
          <Route path="/umkm" element={<Umkm />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/letter_req" element={<LetterRequest />} />
          <Route
            path="/dashboard_warga"
            element={
              <Protected role={"member"}>
                <DashboardWargaPage />
              </Protected>
            }
          />
          <Route
            path="/dashboard_rt"
            element={
              <Protected role={"superAdmin"}>
                <DashboardRtPage />
              </Protected>
            }
          />
          <Route
            path="/dashboard_sekretaris"
            element={
              <Protected role={["sekretaris", "superAdmin"]}>
                <DashboardSekretarisPage />
              </Protected>
            }
          />
          <Route
            path="/dashboard_bendahara"
            element={
              <Protected role={"bendahara"}>
                <DashboardBendaharaPage />
              </Protected>
            }
          />

          <Route path="*" element={<NotFoundPage />} />
          <Route path="/unauthorized" element={<UnauthorizedPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
