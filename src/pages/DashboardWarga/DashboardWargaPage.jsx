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
import ProfileWargaWeb from "../../components/ProfileWargaWeb";
import { IoMdArrowBack } from "react-icons/io";

import LiveClockComponent from "../../components/LiveClockComponent";
import { PiMoneyDuotone } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";
import Navbar from "../../components/Navbar";
import { FaRegPaperPlane } from "react-icons/fa";
import StatusSuratPage from "./Dokumen/StatusSuratPage";
import { IoArrowBackOutline } from "react-icons/io5";

import CardIuranSukarela from "../../components/Pembayaran/CardIuranSukarela";

const DashboardWargaPage = () => {
   const [step, setStep] = useState(1);
   const [statusSurat, setStatusSurat] = useState(false);
   // Function to handle sidebar menu click
   const handleMenuClick = (stepNumber) => {
      setStep(stepNumber);
      setStatusSurat(stepNumber === 7)
   }

   // handle untuk kembali ke form surat pengantar dan button berubah
   const handleBackButtonClick = () => {
      setStep(4); // Set step back to 4 (form surat pengantar)
      setStatusSurat(false); // Set statusSurat to false when going back
   }

   return (
      <div className="container mx-auto">
         {/* navbar mode laptop */}
         <div className="hidden lg:block -mt-4">
            <Navbar />
         </div>
         {/* Navbar mode hp*/}
         <div className="bg-white px-2 py-2 shadow-lg block lg:hidden">
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
                              <Link className="flex items-center gap-2 hover:bg-gray-200 hover:rounded-lg hover:py-2 hover:px-4 duration-300 hover:text-blue-500" onClick={() => handleMenuClick(6)} >
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
         <Link as={Link} to={"/"} className="text-sm flex flex-row items-center gap-2 mt-4 ml-2 underline lg:hidden">
            <IoMdArrowBack className="w-6 h-5" />
            <h1>kembali ke halaman utama</h1>
         </Link>
         {/* Konten Data */}
         <div className="mx-4 mt-4 flex flex-row gap-6 lg:pt-32">
            {/* sidebar mode web (laptop) */}
            <div className="hidden lg:flex lg:drawer-open ">
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
                        <h1 className="text-2xl font-semibold uppercase text-orange-400 cursor-pointer" onClick={() => handleMenuClick(1)}>dashboard</h1>
                     </div>
                     {/* menu */}
                     <div className="flex flex-col">
                        {/* Account settings dropdown */}
                        <div className="flex-none">
                           <ul className="menu px-1">
                              <li>
                                 <details>
                                    <summary className="text-lg">
                                       <PiMoneyDuotone className="w-6 h-6 text-gray-600" />
                                       <p className="capitalize w-full">keuangan</p>
                                    </summary>
                                    <ul className="p-2 bg-base-100 rounded-t-none">
                                       <li><a className="capitalize" onClick={() => handleMenuClick(2)}>iuran wajib</a></li>
                                       <li><a className="capitalize" onClick={() => handleMenuClick(3)}>iuran sukarela</a></li>
                                    </ul>
                                 </details>
                              </li>
                           </ul>
                        </div>

                        {/* cdokumen */}
                        <Link
                           as={Link}
                           // to={}
                           onClick={() => handleMenuClick(4)}
                           className="flex items-center gap-3 pl-5 mt-2 mb-6 py-2 hover:bg-gray-200 duration-300 hover:rounded-lg"
                        >
                           <IoDocumentTextOutline className="w-6 h-6 text-gray-600" />
                           <p className="capitalize text-lg">surat pengantar</p>
                        </Link>

                        <div className="h-px w-full bg-gray-300 px-6"></div>

                        {/* profile akun */}
                        <Link
                           as={Link}
                           // to={}
                           onClick={() => handleMenuClick(6)}
                           className="flex items-center gap-3 pl-5 mt-6 py-2 hover:bg-gray-200 duration-300 hover:rounded-lg"
                        >
                           <VscAccount className="w-6 h-6" />
                           <p className="capitalize text-lg" >profile</p>
                        </Link>
                     </div>
                  </ul>
               </div>
            </div>
            <div className="w-full mr-5">
               {/* parent konten */}
               <div className="border-2 border-black rounded-lg bg-white shadow-md flex flex-row items-center">
                  <div className="flex items-center w-[870px] py-4">
                     {/* img */}
                     <div className="ml-4">
                        <img src={LogoRt44} alt="logo rt44" className="w-40" />
                     </div>
                     {/* data */}
                     <div className="flex flex-col gap-2 w-full ml-4">
                        {/* Nama kepala keluarga */}
                        <div className="flex flex-row gap-2 w-full">
                           <div className="capitalize w-1/3">nama kepala keluarga</div>
                           <div>:</div>
                           <div className="capitalize font-semibold">Wilson</div>
                        </div>
                        {/* Blok rumah */}
                        <div className="flex flex-row gap-2 w-full">
                           <div className="capitalize w-1/3">blok</div>
                           <div>:</div>
                           <div className="capitalize font-semibold">g</div>
                        </div>
                        {/* Nomor rumah */}
                        <div className="flex flex-row gap-2 w-full">
                           <div className="capitalize w-1/3">nomor rumah</div>
                           <div>:</div>
                           <div className="capitalize font-semibold">102</div>
                        </div>
                     </div>
                  </div>
                  {/* button cek surat */}
                  <div>
                     {statusSurat ? (
                        // Jika statusSurat adalah true, tombol tidak ditampilkan
                        <div
                           onClick={handleBackButtonClick}
                           className="flex items-center gap-2 border-none bg-primary rounded-lg py-2 px-4 cursor-pointer hover:bg-orange-400 duration-300 hover:drop-shadow-lg hover:text-white hover:scale-105"
                        >
                           <IoArrowBackOutline />
                           <h2>Kembali</h2>
                        </div>
                     ) : (
                        // Jika statusSurat adalah false, tampilkan tombol
                        <div
                           onClick={() => handleMenuClick(7)}
                           className="flex items-center gap-2 border-none bg-primary rounded-lg py-2 px-4 cursor-pointer hover:bg-orange-400 duration-300 hover:drop-shadow-lg hover:text-white hover:scale-105"
                        >
                           <FaRegPaperPlane className="w-6 h-6" />
                           <h2 className="capitalize">cek status surat</h2>
                        </div>
                     )}
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
                     <CardIuranSukarela handleMenuClick={handleMenuClick} step={step} />
                  )}
                  {step === 4 && (
                     <SuratPengantarPage />
                  )}
                  {step === 5 && (
                     <QrCodeComponent />
                  )}
                  {step === 6 && (
                     <ProfileWargaWeb />
                  )}
                  {step === 7 && (
                     <StatusSuratPage />
                  )}
                  {step === 8 && (
                     <IuranSukarelaPage handleMenuClick={handleMenuClick} />
                  )}
               </div>
            </div>
         </div>
      </div>
   )
}

export default DashboardWargaPage