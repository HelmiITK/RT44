import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import step1 from "../assets/3d-techny-signed-health-insurance-policy-on-clipboard.gif";
import step2 from "../assets/3d-techny-artificial-intelligence-on-tablet-screen.gif";
import step3 from "../assets/3d-techny-email-marketing-and-newsletter-with-new-message.png"
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3 } from "react-icons/tb";
import jenisSurat from "../assets/morphis-reviewing-resumes-of-candidates.png"
import { Link } from "react-router-dom";
import { useRef } from "react";

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
         {/* background */}
         <div className="container mx-auto bg-gradient-to-tr from-orange-500 via-orange-300 to-orange-700 w-full pb-10" ref={linkRef}>
            <div className="pt-28 flex flex-col items-center gap-10 justify-center">
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
                     <Link as={Link} to={""} className="rounded-2xl bg-white shadow-2xl shadow-orange-700 p-6 flex flex-col justify-center items-center w-full hover:scale-105 hover:bg-orange-500 duration-300 hover:text-white hover:border-4 hover:border-white border-4 border-orange-500 hover:shadow-white">
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

         <Footer
            linkRef={linkRef}
            goto={goto}
         />
      </>
   )
}

export default LetterRequest