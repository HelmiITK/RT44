import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FaHouseUser } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useRef } from "react";

const MyProfile = () => {
   const detail = [
      {
         nik: "21212121212",
         nama: "Helmi Superman",
         ttl: "Muara Badak, 22 Juni 2002",
         hp: "097871728172",
         email: "helmi22@gmail.com",
         alamat: "-"
      }
   ]

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
         {/* mode tablet dan web */}
         <div className="hidden lg:block relative" ref={linkRef}>
            <img
               src="https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
               alt=""
               className="w-full h-screen"
            />
            <div className="container mx-auto flex items-center justify-center" >
               {/* blur bg */}
               <div className="absolute inset-0 bg-gray-900 opacity-50 blur"></div>
               {/* card detail user */}
               <div className="absolute shadow-2xl shadow-white gap-5 border-4 border-white w-auto bg-slate-950 bg-opacity-25 rounded-2xl top-44">
                  <div className="flex items-start justify-between">
                     {/* button back to home */}
                     <Link as={Link} to={"/"} className="flex items-center gap-2 z-10 hover:scale-110 duration-300 hover:underline hover:decoration-white pt-4 pl-4">
                        <IoMdArrowRoundBack className="w-8 h-8 text-white" />
                        <p className="text-white font-medium">Kembali</p>
                     </Link>
                     <h1 className="font-extrabold text-4xl text-white z-10 mb-4 pt-10">Akun Saya</h1>
                     <span></span>
                  </div>
                  <div className="flex justify-between items-center z-10 text-white gap-20 p-12">
                     <FaHouseUser className="w-52 h-52" />
                     {/* data  */}
                     <div className="flex flex-row gap-12">
                        <div className="flex flex-col gap-3 text-lg font-light">
                           <h1>NIK</h1>
                           <h1>Nama</h1>
                           <h1>Tempat, tanggal lahir</h1>
                           <h1>No hp</h1>
                           <h1>Email</h1>
                           <h1>Alamat</h1>
                        </div>
                        {detail.map((item, i) => (
                           <div key={i} className="flex flex-col gap-3 text-lg font-medium">
                              <p>{item.nik}</p>
                              <p>{item.nama}</p>
                              <p>{item.ttl}</p>
                              <p>{item.hp}</p>
                              <p>{item.email}</p>
                              <p>{item.alamat}</p>
                           </div>
                        ))}
                     </div>
                  </div>

               </div>
            </div>
         </div>
         {/* mode hp */}
         <div className="container mx-auto pt-32 mb-10 lg:hidden">
            <div className="border-2 border-orange-500 rounded-2xl px-6 pt-4 pb-6 mx-4 shadow-orange-300 shadow-2xl bg-gradient-to-b from-orange-300 to-orange-100">
               {/* button back to home */}
               <Link as={Link} to={"/"} className="flex gap-2 items-center underline">
                  <IoMdArrowRoundBack className="w-6 h-6"/>
                  <p>Kembali</p>
               </Link>
               <h1 className="text-center font-semibold text-3xl mt-4">Akun Saya</h1>
               <div className="mt-5 text-center">
                  {detail.map((item, i) => (
                     <div className="flex flex-col gap-3" key={i}>
                        <div className="">
                           <h1 className="text-slate-600 font-light text-sm">NIK</h1>
                           <p>{item.nik}</p>
                        </div>
                        <div className="">
                           <h1 className="text-slate-600 font-light text-sm">Nama</h1>
                           <p>{item.nama}</p>
                        </div>
                        <div className="">
                           <h1 className="text-slate-600 font-light text-sm">Tenpat, tanggal lahir</h1>
                           <p>{item.ttl}</p>
                        </div>
                        <div className="">
                           <h1 className="text-slate-600 font-light text-sm">No hp</h1>
                           <p>{item.hp}</p>
                        </div>
                        <div className="">
                           <h1 className="text-slate-600 font-light text-sm">Email</h1>
                           <p>{item.email}</p>
                        </div>
                        <div className="">
                           <h1 className="text-slate-600 font-light text-sm">Alamat</h1>
                           <p>{item.alamat}</p>
                        </div>
                     </div>
                  ))}
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

export default MyProfile