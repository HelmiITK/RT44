import LogoRt44 from "../../assets/GambarLogoRT44.png";
import { TfiMenu } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { CgSearch } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";

import HaloComponent from "../../components/HaloComponent";
import SuratPengantarPage from "./Dokumen/SuratPengantarPage";
import { useState } from "react";
import IuranWajibPage from "./Pembayaran/IuranWajibPage";
import IuranSukarelaPage from "./Pembayaran/IuranSukarelaPage";
import QrCodeComponent from "../../components/Pembayaran/QrCodeComponent";
import { IoMdArrowBack } from "react-icons/io";

const DashboardWargaPage = () => {
   const [step, setStep] = useState(1);
   // Function to handle sidebar menu click
   const handleMenuClick = (stepNumber) => {
      setStep(stepNumber);
   }
   return (
      <div className="container mx-auto">
         {/* Navbar */}
         <div className="bg-white px-2 py-2 shadow-lg">
            {/* kiri */}
            <div className="flex flex-row items-center">
               <div className="flex items-center">
                  {/* sidebar */}
                  <div className="drawer z-50">
                     <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                     <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="btn drawer-button">
                           <TfiMenu className="w-6 h-6" />
                        </label>
                     </div>
                     <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-8 w-80 min-h-full bg-base-200 text-base-content">
                           {/* Sidebar content here */}
                           <div
                              className="flex items-center gap-2 mb-4 cursor-pointer"
                              onClick={() => handleMenuClick(1)}
                           >
                              <MdDashboard className="w-8 h-8 text-blue-700" />
                              <h1 className="capitalize font-medium text-xl text-blue-700">dashboard</h1>
                           </div>
                           {/* Keuangan */}
                           <div className="mt-4 flex flex-col gap-2 mb-4">
                              <h1 className="capitalize">keuangan</h1>
                              {/* Iuran wajib */}
                              <Link
                                 className="flex items-center gap-2 hover:bg-gray-200 hover:rounded-lg hover:py-2 hover:px-4 duration-300 hover:text-blue-500"
                                 onClick={() => handleMenuClick(2)}
                              >
                                 <FaMoneyBillWave className="w-6 h-6" />
                                 <h1 className="capitalize font-medium">iuran wajib</h1>
                              </Link>
                              {/* iuran sukarela */}
                              <Link
                                 className="flex items-center gap-2 hover:bg-gray-200 hover:rounded-lg hover:py-2 hover:px-4 duration-300 hover:text-blue-500"
                                 onClick={() => handleMenuClick(3)}
                              >
                                 <FaMoneyBillWave className="w-6 h-6" />
                                 <h1 className="capitalize font-medium">iuran sukarela</h1>
                              </Link>
                           </div>
                           {/* Dokumen */}
                           <div className="mt-4 flex flex-col gap-2 mb-4">
                              <h1 className="capitalize">dokumen</h1>
                              {/* surat */}
                              <Link
                                 className="flex items-center gap-2 hover:bg-gray-200 hover:rounded-lg hover:py-2 hover:px-4 duration-300 hover:text-blue-500"
                                 onClick={() => handleMenuClick(4)}
                              >
                                 <IoDocumentTextOutline className="w-6 h-6" />
                                 <h1 className="capitalize font-medium">surat pengantar</h1>
                              </Link>
                           </div>
                           {/* Akun */}
                           <div className="mt-4 flex flex-col gap-2">
                              <h1 className="capitalize">Akun</h1>
                              {/* profile */}
                              <Link to={'/myprofile'} className="flex items-center gap-2 hover:bg-gray-200 hover:rounded-lg hover:py-2 hover:px-4 duration-300 hover:text-blue-500">
                                 <FaUsers className="w-6 h-6" />
                                 <h1 className="capitalize font-medium">profile</h1>
                              </Link>
                           </div>
                        </ul>
                     </div>
                  </div>
                  {/* dropdown  */}
                  <div className="flex-none">
                     <ul className="menu menu-horizontal px-1">
                        <li>
                           <details>
                              <summary className="text-base font-medium">
                                 Welcome, Helmi
                              </summary>
                              <ul className="p-2 w-44 bg-base-100 rounded-t-none">
                                 <Link as={Link} to={"/dashboard_warga"}>
                                    <li><a className="font-medium">< MdLogout className="w-6 h-6" />Logout</a></li>
                                 </Link>
                              </ul>
                           </details>
                        </li>
                     </ul>
                  </div>
                  {/* searching */}
                  <label
                     htmlFor="search"
                     className="flex items-center"
                  >
                     <CgSearch className="w-6 h-6 text-blue-400" />
                     <input
                        type="text"
                        id="search"
                        name="search"
                        placeholder="search"
                        className="border-none py-2 px-2 w-20 rounded-md"
                     />
                  </label>
               </div>
            </div>
         </div>
         {/* button back to home */}
         <Link as={Link} to={"/"} className="text-sm flex flex-row items-center gap-2 mt-4 ml-2 underline">
            <IoMdArrowBack className="w-6 h-5" />
            <h1>kembali ke halaman utama</h1>
         </Link>
         {/* Konten Data */}
         <div className="mx-4 mt-4">
            {/* parent konten */}
            <div className="border-2 border-black p-4 rounded-lg bg-white shadow-md flex flex-row items-center gap-4">
               <div>
                  <img src={LogoRt44} alt="logo rt44" className="w-40" />
               </div>
               <div className="flex flex-col gap-2">
                  {/* Nama kepala keluarga */}
                  <div className="flex flex-row gap-2 items-start">
                     <div className="capitalize w-full">nama kepala keluarga</div>
                     <div>:</div>
                     <div className="capitalize font-semibold w-full">Wilson</div>
                  </div>
                  {/* Blok rumah */}
                  <div className="flex flex-row gap-2 items-start">
                     <div className="capitalize w-full">blok</div>
                     <div>:</div>
                     <div className="capitalize font-semibold w-full">g</div>
                  </div>
                  {/* Nomor rumah */}
                  <div className="flex flex-row gap-2 items-start">
                     <div className="capitalize w-full">nomor rumah</div>
                     <div>:</div>
                     <div className="capitalize font-semibold w-full">102</div>
                  </div>
               </div>
            </div>
            {/* children konten */}
            <div className="mt-6">
               {step === 1 && (
                  <HaloComponent />
               )}
               {step === 2 && (
                  <IuranWajibPage handleMenuClick={handleMenuClick} />
               )}
               {step === 3 && (
                  <IuranSukarelaPage handleMenuClick={handleMenuClick} />
               )}
               {step === 4 && (
                  <SuratPengantarPage />
               )}
               {step === 5 && (
                  <QrCodeComponent />
               )}
            </div>
         </div>
      </div>
   )
}

export default DashboardWargaPage