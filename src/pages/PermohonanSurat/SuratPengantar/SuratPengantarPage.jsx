import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const SuratPengantarPage = () => {
   return (
      <>
         <Navbar />
         <div className="pt-28 w-full lg:bg-primary lg:pb-10">
            {/* button back */}
            <Link as={Link} to={"/letter_req"} className="flex items-center gap-2 ml-4 hover:scale-105 duration-300 hover:underline w-[20%]">
               <IoMdArrowRoundBack />
               <p>Kembali</p>
            </Link>
            <div className="lg:flex lg:flex-col lg:justify-center lg:items-center">
               <div className="p-8 border-2 border-slate-200 shadow-lg rounded-2xl mx-4 mt-4 mb-8 lg:mb-0 lg:bg-white lg:w-[60%]">
                  <h1 className="text-center text-2xl font-semibold">Surat Pengantar</h1>
                  {/* form surat */}
                  <form action="" className="flex flex-col gap-4 mt-4">
                     {/* nama */}
                     <label htmlFor="nama" className="flex flex-col gap-2">
                        <span>Nama</span>
                        <input
                           type="text"
                           name="nama"
                           id="nama"
                           className="border-2 border-slate-200 shadow-md rounded-xl py-2 px-4"
                        />
                     </label>
                     {/* NIK */}
                     <label htmlFor="nik" className="flex flex-col gap-2">
                        <span>NIK</span>
                        <input
                           type="number"
                           name="nik"
                           id="nik"
                           className="border-2 border-slate-200 shadow-md rounded-xl py-2 px-4"
                        />
                     </label>

                     {/* button submit surat */}
                     <button className="border-none bg-blue-600 rounded-2xl py-2 px-4 text-lg font-medium text-white mt-6 lg:hover:bg-blue-700 duration-300 hover:shadow-xl">
                        Submit
                     </button>
                  </form>
               </div>
            </div>
         </div>
         <Footer />
      </>
   )
}

export default SuratPengantarPage