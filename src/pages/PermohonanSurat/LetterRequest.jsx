import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


import step1 from "../../assets/3d-techny-signed-health-insurance-policy-on-clipboard.gif";
import step2 from "../../assets/3d-techny-artificial-intelligence-on-tablet-screen.gif";
import step3 from "../../assets/3d-techny-email-marketing-and-newsletter-with-new-message.png"
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3 } from "react-icons/tb";
import jenisSurat from "../../assets/morphis-reviewing-resumes-of-candidates.png"
import { Link } from "react-router-dom";
import { useRef } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

"use client";

import { Carousel } from "flowbite-react";

const LetterRequest = () => {
   const linkRef = useRef(null);
   // back to MainSection when on click text MovieList in Footer from homepage
   const goto = (ref) => {
      window.scrollTo({
         top: ref.offsetTop,
         left: 0,
         behavior: "smooth",
      });
   };

   return (
      <>
         <Navbar />
         {/* background serta mode web dan tablet */}
         <div className="hidden md:block container mx-auto bg-gradient-to-tr from-orange-500 via-orange-300 to-orange-700 w-full pb-10" ref={linkRef}>
            {/* button back */}
            <Link as={Link} to={'/'} className="pt-32 ml-8 flex flex-row items-center gap-2 hover:scale-105 duration-300 w-1/6 hover:underline ">
               <MdOutlineKeyboardBackspace className="w-6 h-6" />
               <p className="font-medium text-lg">Kembali</p>
            </Link>
            <div className=" flex flex-col items-center gap-10 justify-center mt-4">
               {/* card step by step */}
               <div className="border-none bg-white drop-shadow-2xl bg-opacity-50 py-8 px-12  w-[80%] rounded-2xl flex justify-center gap-6 flex-col mx-10">
                  <h1 className="text-3xl font-extrabold tracking-wider underline decoration-white text-center">Alur Pelayanan</h1>
                  <div className="flex justify-center items-center gap-12">
                     {/* step 1 */}
                     <div className="rounded-2xl border-none bg-white shadow-2xl p-6 flex flex-col justify-center items-center w-full">
                        <TbCircleNumber1 className="w-10 h-10 text-primary" />
                        <img src={step1} alt="step1" />
                        <h2 className="text-lg font-medium w-[70%] text-center">Pemohon mengisi formulir surat yang dibutuhkan</h2>
                     </div>
                     {/* step 2 */}
                     <div className="rounded-2xl border-none bg-white shadow-2xl p-6 flex flex-col justify-center items-center w-full">
                        <TbCircleNumber2 className="w-10 h-10 text-primary" />
                        <img src={step2} alt="step2" />
                        <h2 className="text-lg font-medium w-[70%] text-center">Pengurus RT memproses  permohonan</h2>
                     </div>
                     {/* step 3 */}
                     <div className="rounded-2xl border-none bg-white shadow-2xl p-6 flex flex-col justify-center items-center w-full">
                        <TbCircleNumber3 className="w-10 h-10 text-primary" />
                        <img src={step3} alt="step3" />
                        <h2 className="text-lg font-medium w-[70%] text-center">Pemohon akan dihubungi untuk mengambil surat</h2>
                     </div>
                  </div>
               </div>

               {/* card pilih surat */}
               <div className="border-none  py-8 px-12  w-[80%] rounded-2xl flex justify-center gap-6 flex-col mx-10">
                  <h1 className="text-4xl font-extrabold tracking-widest underline decoration-white text-white text-center">Jenis Surat</h1>
                  <div className="flex justify-center items-center gap-12">
                     {/* Surat 1 */}
                     <Link as={Link} to={"/surat_pengantar"} className="rounded-2xl bg-white shadow-2xl shadow-orange-700 p-6 flex flex-col justify-center items-center w-full hover:scale-105 hover:bg-orange-500 duration-300 hover:text-white hover:border-4 hover:border-white border-4 border-orange-500 hover:shadow-white">
                        <img src={jenisSurat} alt="step1" />
                        <h2 className="text-lg font-medium w-[70%] text-center">Surat Pengantar</h2>
                     </Link>
                     {/* Surat 2 */}
                     <Link as={Link} to={""} className="rounded-2xl bg-white shadow-2xl shadow-orange-700 p-6 flex flex-col justify-center items-center w-full hover:scale-105 hover:bg-orange-500 duration-300 hover:text-white hover:border-4 hover:border-white border-4 border-orange-500 hover:shadow-white">
                        <img src={jenisSurat} alt="step2" />
                        <h2 className="text-lg font-medium w-[70%] text-center">Suat Keterangan</h2>
                     </Link>
                     {/* Surat 3 */}
                     <Link as={Link} to={""} className="rounded-2xl bg-white shadow-2xl shadow-orange-700 p-6 flex flex-col justify-center items-center w-full hover:scale-105 hover:bg-orange-500 duration-300 hover:text-white hover:border-4 hover:border-white border-4 border-orange-500 hover:shadow-white">
                        <img src={jenisSurat} alt="step3" />
                        <h2 className="text-lg font-medium w-[70%] text-center">Surat Permohonan</h2>
                     </Link>
                  </div>
               </div>
            </div>
         </div>

         {/* mode hp */}
         <div className="container mx-auto pt-28 md:hidden ">
            {/* button back to home */}
            <Link as={Link} to={"/"} className="flex items-center gap-2 mx-4 mb-4">
               <IoMdArrowRoundBack className="w-5 h-5" />
               <p className="underline text-sm font-medium">Kembali</p>
            </Link>
            {/* carousel card step by step */}
            <div className="flex flex-col gap-4 mx-4">
               <h1 className="text-center font-semibold text-2xl text-orange-400 underline tracking-wider">
                  Alur Pelayanan
               </h1>
               <div className="h-[400px] sm:h-64 xl:h-80 2xl:h-96 drop-shadow-2xl">
                  <Carousel slideInterval={3000} className="border-2 border-slate-300 rounded-2xl p-6 shadow-xl">
                     <div className="flex flex-col pb-16 justify-center items-center text-center">
                        <img src={step1} alt="..." className="w-72 h-72" />
                        <p className="w-[70%]">Pemohon mengisi formulir surat yang dibutuhkan</p>
                     </div>
                     <div className="flex flex-col pb-16 justify-center items-center text-center">
                        <img src={step2} alt="..." className="w-72 h-72" />
                        <p className="w-[70%]">Pengurus RT memproses  permohonan</p>
                     </div>
                     <div className="flex flex-col pb-16 justify-center items-center text-center">
                        <img src={step3} alt="..." className="w-72 h-72" />
                        <p className="w-[70%]">Pemohon akan dihubungi untuk mengambil surat</p>
                     </div>
                  </Carousel>
               </div>
            </div>
            {/* card pilih surat */}
            <div className="my-14 mx-4 flex flex-col gap-6">
               <h1 className="text-orange-400 font-semibold text-2xl text-center underline tracking-wider">Ajukan Permohonanan</h1>
               <div className=" grid  gap-5 justify-center items-center text-center">
                  {/* surat 1 */}
                  <Link as={Link} to={"/surat_pengantar"} className="border-2 border-orange-400 rounded-xl p-4 shadow-lg shadow-orange-200">
                     <img src={jenisSurat} alt="surat 1" />
                     <p>Surat Pengantar</p>
                  </Link>
                  {/* <Link as={Link} to={"/"} className="border-2 border-orange-400 rounded-xl p-4 shadow-lg shadow-orange-200">
                     <img src={jenisSurat} alt="surat 1" />
                     <p>Surat Keterangan</p>
                  </Link>
                  <Link as={Link} to={"/"} className="border-2 border-orange-400 rounded-xl p-4 shadow-lg shadow-orange-200">
                     <img src={jenisSurat} alt="surat 1" />
                     <p>Surat Permohonan</p>
                  </Link> */}
               </div>
            </div>
         </div>

         <Footer
            linkRef={linkRef}
            goto={goto}
         />
      </>
   )
}

export default LetterRequest