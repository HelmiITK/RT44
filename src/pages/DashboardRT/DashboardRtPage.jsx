import { useState } from "react";
import Navbar from "../../components/Navbar"
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { FaUsersGear } from "react-icons/fa6";
import { AiOutlineShop } from "react-icons/ai";

import LiveClockComponent from "../../components/LiveClockComponent";
import UmkmRtPage from "./UmkmCrudRt/UmkmRtPage";
import AnggotaRtPage from "./AnggotaCrudRt/AnggotaRtPage";
import ProfileWargaWeb from "../../components/ProfileWargaWeb";

// children action Umkm
import TambahUmkmComponent from "../../components/UmkmCrud/TambahUmkmComponent"
import EditUmkmComponent from "../../components/UmkmCrud/EditUmkmComponent";

// children action Anggota
import TambahAnggotaComponent from "../../components/AnggotaCrud/TambahAnggotaComponent";
import EditAnggotaComponent from "../../components/AnggotaCrud/EditAnggotaComponent";

const DashboardRtPage = () => {

   const [step, setStep] = useState(1);
   // Function to handle sidebar menu click
   const handleMenuClick = (stepNumber) => {
      setStep(stepNumber);
   }
   return (
      <>
         <Navbar />
         <div className="pt-28 container mx-auto">
            <div className="mx-4 mt-4 flex flex-row gap-6">
               {/* sidebar */}
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
                           {/* umkm */}
                           <Link
                              as={Link}
                              // to={}
                              onClick={() => handleMenuClick(1)}
                              className="flex items-center gap-3 pl-5 mt-2 py-2 hover:bg-gray-200 duration-300 hover:rounded-lg"
                           >
                              <AiOutlineShop className="w-6 h-6 text-gray-600" />
                              <p className="capitalize text-lg">umkm</p>
                           </Link>

                           {/* anggota */}
                           <Link
                              as={Link}
                              // to={}
                              onClick={() => handleMenuClick(2)}
                              className="flex items-center gap-3 pl-5 mb-6 mt-2 py-2 hover:bg-gray-200 duration-300 hover:rounded-lg"
                           >
                              <FaUsersGear className="w-6 h-6 text-gray-600" />
                              <p className="capitalize text-lg">anggota</p>
                           </Link>

                           <div className="h-px w-full bg-gray-300 px-6"></div>

                           {/* profile akun */}
                           <Link
                              as={Link}
                              // to={}
                              onClick={() => handleMenuClick(3)}
                              className="flex items-center gap-3 pl-5 mt-6 py-2 hover:bg-gray-200 duration-300 hover:rounded-lg"
                           >
                              <VscAccount className="w-6 h-6" />
                              <p className="capitalize text-lg" >profile</p>
                           </Link>
                        </div>
                     </ul>
                  </div>
               </div>
               {/* children konten */}
               <div className="w-full">
                  {/* Dashboard UKKM, Anggota dan Profile */}
                  {step === 1 && (
                     <UmkmRtPage handleMenuClick={handleMenuClick} />
                  )}
                  {step === 2 && (
                     <AnggotaRtPage handleMenuClick={handleMenuClick} />
                  )}
                  {step === 3 && (
                     <ProfileWargaWeb />
                  )}

                  {/* Action UMKM */}
                  {step === 4 && (
                     <TambahUmkmComponent handleMenuClick={handleMenuClick} />
                  )}
                  {step === 5 && (
                     <EditUmkmComponent handleMenuClick={handleMenuClick} />
                  )}

                  {/* Action Anggota */}
                  {step === 6 && (
                     <TambahAnggotaComponent handleMenuClick={handleMenuClick} />
                  )}
                  {step === 7 && (
                     <EditAnggotaComponent handleMenuClick={handleMenuClick} />
                  )}

               </div>
            </div>
         </div>
      </>
   )
}

export default DashboardRtPage
