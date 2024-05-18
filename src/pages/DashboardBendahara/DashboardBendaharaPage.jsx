import { Link, useNavigate } from "react-router-dom"
import Navbar from "../../components/Navbar"
import { MdDashboard } from "react-icons/md";
import LiveClockComponent from "../../components/LiveClockComponent";
import { VscAccount } from "react-icons/vsc";
import { IoCashOutline } from "react-icons/io5";
import ProfileWargaWeb from "../../components/ProfileWargaWeb";
import { useEffect, useState } from "react";
import ValidasiPembayaranPage from "./ValidasiPembayaran/ValidasiPembayaranPage";
import { getMe, logout } from "../../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

const DashboardBendaharaPage = () => {
   const [step, setStep] = useState(1);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   // Function to handle sidebar menu click
   const handleMenuClick = (stepNumber) => {
      setStep(stepNumber);
   }
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
         <div className="pt-28 container mx-auto">
            <div className="mx-4 mt-4 flex flex-row gap-6">
               {/* Sidebar */}
               <div className="hidden lg:flex lg:drawer-open">
                  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                  <div className="drawer-side">
                     <div className="ml-4 mb-4">
                        <LiveClockComponent />
                     </div>
                     <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                     <ul className="menu w-80 bg-white h-96 text-base-content border-2 shadow-lg ml-4 rounded-2xl flex flex-col gap-4">
                        {/* heading */}
                        <div className="flex items-center mt-4 ml-4 gap-2">
                           <MdDashboard className="w-8 h-8 text-orange-400" />
                           <h1 className="text-2xl font-semibold uppercase text-orange-400">dashboard</h1>
                        </div>
                        {/* menu */}
                        <div className="flex flex-col">
                           {/* Validasi pembayaran */}
                           <Link
                              as={Link}
                              // to={}
                              onClick={() => handleMenuClick(1)}
                              className="flex items-center gap-3 pl-5 mt-2 py-2 hover:bg-gray-200 duration-300 hover:rounded-lg"
                           >
                              <IoCashOutline className="w-6 h-6 text-gray-600" />
                              <p className="capitalize text-lg">Pengajuan surat</p>
                           </Link>

                           <div className="h-px w-full bg-gray-300 px-6 mt-4"></div>

                           {/* profile akun */}
                           <Link
                              as={Link}
                              // to={}
                              onClick={() => handleMenuClick(5)}
                              className="flex items-center gap-3 pl-5 mt-6 py-2 hover:bg-gray-200 duration-300 hover:rounded-lg"
                           >
                              <VscAccount className="w-6 h-6" />
                              <p className="capitalize text-lg" >profile</p>
                           </Link>
                        </div>
                     </ul>
                  </div>
               </div>
               {/* chidren konten */}
               <div className="w-full">
                  {/* Dashboard pengajuan pembayaran */}
                  {step === 1 && (
                     <ValidasiPembayaranPage handleMenuClick={handleMenuClick} step={step} />
                  )}
                  {step === 2 && (
                     <ValidasiPembayaranPage handleMenuClick={handleMenuClick} step={step} />
                  )}
                  {step === 3 && (
                     <ValidasiPembayaranPage handleMenuClick={handleMenuClick} step={step} />
                  )}

                  {/* my profile  */}
                  {step === 5 && (
                     <ProfileWargaWeb />
                  )}
               </div>
            </div>
         </div>
      </>
   )
}

export default DashboardBendaharaPage
