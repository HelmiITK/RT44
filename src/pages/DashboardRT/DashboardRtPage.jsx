import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { Link, Navigate,useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { FaUsersGear } from "react-icons/fa6";
import { AiOutlineShop } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

import LiveClockComponent from "../../components/LiveClockComponent";
import UmkmRtPage from "./UmkmCrudRt/UmkmRtPage";
import AnggotaRtPage from "./AnggotaCrudRt/AnggotaRtPage";
import ProfileWargaWeb from "../../components/ProfileWargaWeb";

// children action Umkm
import TambahUmkmComponent from "../../components/UmkmCrud/TambahUmkmComponent";
import EditUmkmComponent from "../../components/UmkmCrud/EditUmkmComponent";

// children action Anggota
import TambahAnggotaComponent from "../../components/AnggotaCrud/TambahAnggotaComponent";
import EditAnggotaComponent from "../../components/AnggotaCrud/EditAnggotaComponent";

import { getMe, logout } from "../../redux/actions/authActions";

const DashboardRtPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [idUser, setIdUser] = useState();
  const [idUmkm, setIdUmkm] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const { user, token } = useSelector((state) => state.auth);
  console.log(user)
  useEffect(() => {
    if (user) {
      const userRole = user.role;

      if (userRole === "superAdmin") {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    }
  }, [user]);
  useEffect(() => {
    if (token) {
      dispatch(getMe(navigate, null, "/login"));
    }
  }, [dispatch, navigate, token]);

  useEffect(() => {
    dispatch(getMe(null));
  }, [dispatch]);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  // Function to handle sidebar menu click
  const handleMenuClick = (stepNumber, id) => {
    setIdUser(id);
    setIdUmkm(id);
    setStep(stepNumber);
  };

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
    <>
      <Navbar onLogout={onLogout} user={user?.name} />
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
                  {/* umkm */}
                  <Link
                    as={Link}
                    // to={}
                    onClick={() => handleMenuClick(1)}
                    className="flex items-center gap-3 py-2 pl-5 mt-2 duration-300 hover:bg-gray-200 hover:rounded-lg"
                  >
                    <AiOutlineShop className="w-6 h-6 text-gray-600" />
                    <p className="text-lg capitalize">umkm</p>
                  </Link>

                  {/* anggota */}
                  <Link
                    as={Link}
                    // to={}
                    onClick={() => handleMenuClick(2)}
                    className="flex items-center gap-3 py-2 pl-5 mt-2 mb-6 duration-300 hover:bg-gray-200 hover:rounded-lg"
                  >
                    <FaUsersGear className="w-6 h-6 text-gray-600" />
                    <p className="text-lg capitalize">anggota</p>
                  </Link>

                  <div className="w-full h-px px-6 bg-gray-300"></div>

                  {/* profile akun */}
                  <Link
                    as={Link}
                    // to={}
                    onClick={() => handleMenuClick(3)}
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
            {/* Dashboard UKKM, Anggota dan Profile */}
            {step === 1 && <UmkmRtPage handleMenuClick={handleMenuClick} />}
            {step === 2 && <AnggotaRtPage handleMenuClick={handleMenuClick} />}
            {step === 3 && <ProfileWargaWeb />}

            {/* Action UMKM */}
            {step === 4 && (
              <TambahUmkmComponent handleMenuClick={handleMenuClick} />
            )}
            {step === 5 && (
              <EditUmkmComponent
                handleMenuClick={handleMenuClick}
                id={idUmkm}
              />
            )}

            {/* Action Anggota */}
            {step === 6 && (
              <TambahAnggotaComponent handleMenuClick={handleMenuClick} />
            )}
            {step === 7 && (
              <EditAnggotaComponent
                handleMenuClick={handleMenuClick}
                id={idUser}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardRtPage;
