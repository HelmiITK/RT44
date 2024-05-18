import { useEffect, useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdLogout } from "react-icons/md";
import { CgSearch } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import PropTypes from "prop-types";
import { PiMoneyDuotone } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

import LogoRt44 from "../../assets/GambarLogoRT44.png";
import HaloComponent from "../../components/HaloComponent";
import SuratPengantarPage from "./Dokumen/SuratPengantarPage";
import IuranWajibPage from "./Pembayaran/IuranWajibPage";
import IuranSukarelaPage from "./Pembayaran/IuranSukarelaPage";
import QrCodeComponent from "../../components/Pembayaran/QrCodeComponent";
import ProfileWargaWeb from "../../components/ProfileWargaWeb";
import LiveClockComponent from "../../components/LiveClockComponent";
import Navbar from "../../components/Navbar";
import { FaRegPaperPlane } from "react-icons/fa";
import StatusSuratPage from "./Dokumen/StatusSuratPage";
import { IoArrowBackOutline } from "react-icons/io5";
import CardIuranSukarela from "../../components/Pembayaran/CardIuranSukarela";

import { getMe, logout } from "../../redux/actions/authActions";

const DashboardWargaPage = ({ duesId, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [statusSurat, setStatusSurat] = useState(false);
  const [idDues, setIdDues] = useState(duesId);
  const [idSukarela, setIdSukarela] = useState(id);
  const [profile, setProfile] = useState({
    name: "",
    blockHome: "",
    noHome: "",
  });

  // Function to handle sidebar menu click
  const handleMenuClick = (stepNumber, duesId, id) => {
    setIdDues(duesId);
    setIdSukarela(id);
    setStep(stepNumber);
    setStatusSurat(stepNumber === 7);
  };

  const { user } = useSelector((state) => state.auth);

  const handleBackButtonClick = () => {
    setStep(4); // Set step back to 4 (form surat pengantar)
    setStatusSurat(false); // Set statusSurat to false when going back
  };

  useEffect(() => {
    if (user) {
      setProfile({
        idUser: user.id,
        name: user.name,
        blockHome: user.blockHome,
        noHome: user.noHome,
      });
    }
  }, [user]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      dispatch(getMe(null));
    }
  }, [dispatch, navigate]);

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
        navigate("/dashboard_warga");
      }
    });
  };

  return (
    <div className="container mx-auto">
      {/* navbar mode laptop */}
      <div className="hidden -mt-4 lg:block">
        <Navbar onLogout={onLogout} user={profile.name} />
      </div>
      {/* Navbar mode hp*/}
      <div className="block px-2 py-2 bg-white shadow-lg lg:hidden">
        {/* kiri */}
        <div className="flex flex-row items-center">
          <div className="flex items-center">
            {/* sidebar */}
            <div className="z-50 drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="btn drawer-button">
                  <TfiMenu className="w-6 h-6" />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="min-h-full p-8 menu w-80 bg-base-200 text-base-content">
                  {/* Sidebar content here */}
                  <div
                    className="flex items-center gap-2 mb-4 cursor-pointer"
                    onClick={() => handleMenuClick(1)}
                  >
                    <MdDashboard className="w-8 h-8 text-blue-700" />
                    <h1 className="text-xl font-medium text-blue-700 capitalize">
                      dashboard
                    </h1>
                  </div>
                  {/* Keuangan */}
                  <div className="flex flex-col gap-2 mt-4 mb-4">
                    <h1 className="capitalize">keuangan</h1>
                    {/* Iuran wajib */}
                    <Link
                      className="flex items-center gap-2 duration-300 hover:bg-gray-200 hover:rounded-lg hover:py-2 hover:px-4 hover:text-blue-500"
                      onClick={() => handleMenuClick(2)}
                    >
                      <FaMoneyBillWave className="w-6 h-6" />
                      <h1 className="font-medium capitalize">iuran wajib</h1>
                    </Link>
                    {/* iuran sukarela */}
                    <Link
                      className="flex items-center gap-2 duration-300 hover:bg-gray-200 hover:rounded-lg hover:py-2 hover:px-4 hover:text-blue-500"
                      onClick={() => handleMenuClick(3)}
                    >
                      <FaMoneyBillWave className="w-6 h-6" />
                      <h1 className="font-medium capitalize">iuran sukarela</h1>
                    </Link>
                  </div>
                  {/* Dokumen */}
                  <div className="flex flex-col gap-2 mt-4 mb-4">
                    <h1 className="capitalize">dokumen</h1>
                    {/* surat */}
                    <Link
                      className="flex items-center gap-2 duration-300 hover:bg-gray-200 hover:rounded-lg hover:py-2 hover:px-4 hover:text-blue-500"
                      onClick={() => handleMenuClick(4)}
                    >
                      <IoDocumentTextOutline className="w-6 h-6" />
                      <h1 className="font-medium capitalize">
                        surat pengantar
                      </h1>
                    </Link>
                  </div>
                  {/* Akun */}
                  <div className="flex flex-col gap-2 mt-4">
                    <h1 className="capitalize">Akun</h1>
                    {/* profile */}
                    <Link
                      className="flex items-center gap-2 duration-300 hover:bg-gray-200 hover:rounded-lg hover:py-2 hover:px-4 hover:text-blue-500"
                      onClick={() => handleMenuClick(6)}
                    >
                      <FaUsers className="w-6 h-6" />
                      <h1 className="font-medium capitalize">profile</h1>
                    </Link>
                  </div>
                </ul>
              </div>
            </div>
            {/* dropdown  */}
            <div className="flex-none">
              <ul className="px-1 menu menu-horizontal">
                <li>
                  <details>
                    <summary className="text-base font-medium">
                      Welcome, {profile.name}
                    </summary>
                    <ul className="p-2 rounded-t-none w-44 bg-base-100">
                      <Link as={Link} onClick={onLogout}>
                        <li>
                          <a className="font-medium">
                            <MdLogout className="w-6 h-6" />
                            Logout
                          </a>
                        </li>
                      </Link>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
            {/* searching */}
            <label htmlFor="search" className="flex items-center">
              <CgSearch className="w-6 h-6 text-blue-400" />
              <input
                type="text"
                id="search"
                name="search"
                placeholder="search"
                className="w-20 px-2 py-2 border-none rounded-md"
              />
            </label>
          </div>
        </div>
      </div>
      {/* button back to home */}
      <Link
        as={Link}
        to={"/"}
        className="flex flex-row items-center gap-2 mt-4 ml-2 text-sm underline lg:hidden"
      >
        <IoMdArrowBack className="w-6 h-5" />
        <h1>kembali ke halaman utama</h1>
      </Link>
      {/* Konten Data */}
      <div className="flex flex-row gap-6 mx-4 mt-4 lg:pt-32">
        {/* sidebar mode web (laptop) */}
        <div className="hidden lg:flex lg:drawer-open ">
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
                <h1
                  className="text-2xl font-semibold text-orange-400 uppercase cursor-pointer"
                  onClick={() => handleMenuClick(1)}
                >
                  dashboard
                </h1>
              </div>
              {/* menu */}
              <div className="flex flex-col">
                {/* Account settings dropdown */}
                <div className="flex-none">
                  <ul className="px-1 menu">
                    <li>
                      <details>
                        <summary className="text-lg">
                          <PiMoneyDuotone className="w-6 h-6 text-gray-600" />
                          <p className="w-full capitalize">keuangan</p>
                        </summary>
                        <ul className="p-2 rounded-t-none bg-base-100">
                          <li>
                            <a
                              className="capitalize"
                              onClick={() => handleMenuClick(2)}
                            >
                              iuran wajib
                            </a>
                          </li>
                          <li>
                            <a
                              className="capitalize"
                              onClick={() => handleMenuClick(3)}
                            >
                              iuran sukarela
                            </a>
                          </li>
                        </ul>
                      </details>
                    </li>
                  </ul>
                </div>

                {/* cdokumen */}
                <Link
                  as={Link}
                  // to={}
                  onClick={() => handleMenuClick(4, profile.id)}
                  className="flex items-center gap-3 py-2 pl-5 mt-2 mb-6 duration-300 hover:bg-gray-200 hover:rounded-lg"
                >
                  <IoDocumentTextOutline className="w-6 h-6 text-gray-600" />
                  <p className="text-lg capitalize">surat pengantar</p>
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
        <div className="w-full mr-5">
          {/* parent konten */}
          <div className="flex flex-row items-center bg-white border-2 border-black rounded-lg shadow-md">
            <div className="flex items-center w-[870px] py-4">
              {/* img */}
              <div className="ml-4">
                <img src={LogoRt44} alt="logo rt44" className="w-40" />
              </div>
              {/* data */}
              <div className="flex flex-col w-full gap-2 ml-4">
                {/* Nama kepala keluarga */}
                <div className="flex flex-row w-full gap-2">
                  <div className="w-1/3 capitalize">nama kepala keluarga</div>
                  <div>:</div>
                  <div className="font-semibold capitalize">{profile.name}</div>
                </div>
                {/* Blok rumah */}
                <div className="flex flex-row w-full gap-2">
                  <div className="w-1/3 capitalize">{profile.blockHome}</div>
                  <div>:</div>
                  <div className="font-semibold capitalize">g</div>
                </div>
                {/* Nomor rumah */}
                <div className="flex flex-row w-full gap-2">
                  <div className="w-1/3 capitalize">nomor rumah</div>
                  <div>:</div>
                  <div className="font-semibold capitalize">
                    {profile.noHome}
                  </div>
                </div>
              </div>
            </div>
            {/* button cek surat */}
            <div>
              {statusSurat ? (
                // Jika statusSurat adalah true, tombol tidak ditampilkan
                <div
                  onClick={handleBackButtonClick}
                  className="flex items-center gap-2 px-4 py-2 duration-300 border-none rounded-lg cursor-pointer bg-primary hover:bg-orange-400 hover:drop-shadow-lg hover:text-white hover:scale-105"
                >
                  <IoArrowBackOutline />
                  <h2>Kembali</h2>
                </div>
              ) : (
                // Jika statusSurat adalah false, tampilkan tombol
                <div
                  onClick={() => handleMenuClick(7)}
                  className="flex items-center gap-2 px-4 py-2 duration-300 border-none rounded-lg cursor-pointer bg-primary hover:bg-orange-400 hover:drop-shadow-lg hover:text-white hover:scale-105"
                >
                  <FaRegPaperPlane className="w-6 h-6" />
                  <h2 className="capitalize">cek status surat</h2>
                </div>
              )}
            </div>
          </div>
          {/* children konten */}
          <div className="mt-6">
            {step === 1 && <HaloComponent />}
            {step === 2 && <IuranWajibPage handleMenuClick={handleMenuClick} />}
            {step === 3 && (
              <CardIuranSukarela
                handleMenuClick={handleMenuClick}
                step={step}
              />
            )}
            {step === 4 && <SuratPengantarPage id={profile.idUser} />}
            {step === 5 && <QrCodeComponent duesId={idDues} />}
            {step === 6 && <ProfileWargaWeb />}
            {step === 7 && <StatusSuratPage id={profile.idUser} />}
            {step === 8 && (
              <IuranSukarelaPage
                handleMenuClick={handleMenuClick}
                duesId={idSukarela}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

DashboardWargaPage.propTypes = {
  duesId: PropTypes.number,
  id: PropTypes.number,
};

export default DashboardWargaPage;
