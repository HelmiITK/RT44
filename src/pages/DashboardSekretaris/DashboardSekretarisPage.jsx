import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { FaUsersGear } from "react-icons/fa6";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

import LiveClockComponent from "../../components/LiveClockComponent";
import { IoNewspaperOutline } from "react-icons/io5";

import ProfileWargaWeb from "../../components/ProfileWargaWeb";
import PengajuanSuratPage from "./PengajuanSurat/PengajuanSuratPage";
import DataMasyarakat from "./DataMasyarakat/DataMasyarakat";
import EditMasyarakat from "../../components/Sekretaris/EditMasyarakat";
import EditPengajuanSurat from "../../components/Sekretaris/EditPengajuanSurat";

import { getMe, logout } from "../../redux/actions/authActions";

const DashboardSekretarisPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [letterId, setLetterId] = useState();
  const [userId, setUserId] = useState();
  // Function to handle sidebar menu click
  const handleMenuClick = (stepNumber, id) => {
    setLetterId(id);
    setUserId(id);
    setStep(stepNumber);
  };
  const { user } = useSelector((state) => state.auth);

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
        navigate("/dashboard_sekretaris");
      }
    });
  };

  useEffect(() => {
    dispatch(getMe(null));
  }, [dispatch]);

  return (
    <>
      <Navbar user={user?.name} onLogout={onLogout} />
      <div className="container mx-auto pt-28">
        <div className="flex flex-row gap-6 mx-4 mt-4">
          {/* sidebar */}
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
                  {/* Pengajuan surat */}
                  <Link
                    as={Link}
                    // to={}
                    onClick={() => handleMenuClick(1)}
                    className="flex items-center gap-3 py-2 pl-5 mt-2 duration-300 hover:bg-gray-200 hover:rounded-lg"
                  >
                    <IoNewspaperOutline className="w-6 h-6 text-gray-600" />
                    <p className="text-lg capitalize">Pengajuan surat</p>
                  </Link>

                  {/* data masyrakat */}
                  <Link
                    as={Link}
                    // to={}
                    onClick={() => handleMenuClick(3)}
                    className="flex items-center gap-3 py-2 pl-5 mt-2 mb-6 duration-300 hover:bg-gray-200 hover:rounded-lg"
                  >
                    <FaUsersGear className="w-6 h-6 text-gray-600" />
                    <p className="text-lg capitalize">data masyarakat</p>
                  </Link>

                  <div className="w-full h-px px-6 bg-gray-300"></div>

                  {/* profile akun */}
                  <Link
                    as={Link}
                    // to={}
                    onClick={() => handleMenuClick(6)}
                    className="flex items-center gap-3 py-2 pl-5 mt-6 duration-300 hover:bg-gray-200 hover:rounded-lg"
                  >
                    <VscAccount className="w-6 h-6" />
                    <p className="text-lg capitalize">profile</p>
                  </Link>
                </div>
              </ul>
            </div>
          </div>

          {/* children konten */}
          <div className="w-full">
            {/* Dashboard pengajuan surat */}
            {step === 1 && (
              <PengajuanSuratPage
                handleMenuClick={handleMenuClick}
                step={step}
              />
            )}
            {step === 2 && (
              <PengajuanSuratPage
                handleMenuClick={handleMenuClick}
                step={step}
              />
            )}

            {/* Dashboard data masyarakat */}
            {step === 3 && <DataMasyarakat handleMenuClick={handleMenuClick} />}
            {/* edit data masyrakat */}
            {step === 4 && (
              <EditMasyarakat handleMenuClick={handleMenuClick} id={userId} />
            )}

            {/* edit data pengajuan surat para warga tercinta */}
            {step === 5 && (
              <EditPengajuanSurat
                handleMenuClick={handleMenuClick}
                id={letterId}
              />
            )}

            {/* myprofile tiap role */}
            {step === 6 && <ProfileWargaWeb />}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSekretarisPage;
