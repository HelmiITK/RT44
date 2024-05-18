import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { MdDashboard } from "react-icons/md";
import LiveClockComponent from "../../components/LiveClockComponent";
import { VscAccount } from "react-icons/vsc";
import { IoCashOutline } from "react-icons/io5";
import ProfileWargaWeb from "../../components/ProfileWargaWeb";
import ValidasiPembayaranPage from "./ValidasiPembayaran/ValidasiPembayaranPage";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

import { getMe, logout } from "../../redux/actions/authActions";

const DashboardBendaharaPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const { user } = useSelector((state) => state.auth);

  // Function to handle sidebar menu click
  const handleMenuClick = (stepNumber) => {
    setStep(stepNumber);
  };

  useEffect(() => {
    dispatch(getMe(null));
  }, [dispatch]);

  const onLogout = () => {
    Swal.fire({
      title: "Konfirmasi Logout",
      text: "Apakah Anda yakin ingin keluar?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Keluar!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logout());
        navigate("/");
      } else {
        navigate("/dashboard_bendahara");
      }
    });
  };

  return (
    <>
      <Navbar user={user?.name} onLogout={onLogout} />
      <div className="container mx-auto pt-28">
        <div className="flex flex-row gap-6 mx-4 mt-4">
          {/* Sidebar */}
          <div className="hidden lg:flex lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
              <div className="mb-4 ml-4">
                <LiveClockComponent />
              </div>
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="flex flex-col gap-4 ml-4 bg-white border-2 shadow-lg menu w-80 h-96 text-base-content rounded-2xl">
                {/* heading */}
                <div className="flex items-center gap-2 mt-4 ml-4">
                  <MdDashboard className="w-8 h-8 text-orange-400" />
                  <h1 className="text-2xl font-semibold text-orange-400 uppercase">
                    dashboard
                  </h1>
                </div>
                {/* menu */}
                <div className="flex flex-col">
                  {/* Validasi pembayaran */}
                  <Link
                    as={Link}
                    // to={}
                    onClick={() => handleMenuClick(1)}
                    className="flex items-center gap-3 py-2 pl-5 mt-2 duration-300 hover:bg-gray-200 hover:rounded-lg"
                  >
                    <IoCashOutline className="w-6 h-6 text-gray-600" />
                    <p className="text-lg capitalize">Pembayaran Warga</p>
                  </Link>

                  <div className="w-full h-px px-6 mt-4 bg-gray-300"></div>

                  {/* profile akun */}
                  <Link
                    as={Link}
                    // to={}
                    onClick={() => handleMenuClick(5)}
                    className="flex items-center gap-3 py-2 pl-5 mt-6 duration-300 hover:bg-gray-200 hover:rounded-lg"
                  >
                    <VscAccount className="w-6 h-6" />
                    <p className="text-lg capitalize">profile</p>
                  </Link>
                </div>
              </ul>
            </div>
          </div>
          {/* chidren konten */}
          <div className="w-full">
            {/* Dashboard pengajuan pembayaran */}
            {step === 1 && (
              <ValidasiPembayaranPage
                handleMenuClick={handleMenuClick}
                step={step}
              />
            )}
            {step === 2 && (
              <ValidasiPembayaranPage
                handleMenuClick={handleMenuClick}
                step={step}
              />
            )}
            {step === 3 && (
              <ValidasiPembayaranPage
                handleMenuClick={handleMenuClick}
                step={step}
              />
            )}

            {/* my profile  */}
            {step === 5 && <ProfileWargaWeb />}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardBendaharaPage;
