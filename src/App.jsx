import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MyProfile from "./pages/MyProfile";
import Umkm from "./pages/UmkmRt";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";

import DashboardWargaPage from "./pages/DashboardWarga/DashboardWargaPage";
import DashboardRtPage from "./pages/DashboardRT/DashboardRtPage";
import DashboardSekretarisPage from "./pages/DashboardSekretaris/DashboardSekretarisPage";
import DashboardBendaharaPage from "./pages/DashboardBendahara/DashboardBendaharaPage";

import NoAccessToken from "./security/NoAccessToken";
import Protected from "./security/Protected";
import UnauthorizedPage from "./pages/UnauthorizedPage";

import LupaPassword from "./pages/LupaPassword";

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
          <Route
            path="/myprofile"
            element={
              <Protected>
                <MyProfile />
              </Protected>
            }
          />
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
          <Route
            path={`/lupa_password`}
            element={
              <NoAccessToken>
                <LupaPassword />
              </NoAccessToken>
            }
          />
          <Route path="/unauthorized" element={<UnauthorizedPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
