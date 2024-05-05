import { NavLink, Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect } from "react";
import logo from "../assets/Logo.svg"
import { FaPhoneVolume } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";

const Navbar = () => {
   const [openHamburger, setOpenHamburger] = useState(false);

   const handleHamburgerClick = (e) => {
      e.stopPropagation();
      setOpenHamburger(!openHamburger);
      // setSelectedIcon(null);
   };

   // logic ketika diklik diluar hamburgermenu maka otomatis tertutup dan begitu juga ketika klik pindah halaman
   useEffect(() => {
      const closeHamburgerMenu = () => {
         setOpenHamburger(false);
      };

      // Menambahkan event listener ke window
      window.addEventListener("click", closeHamburgerMenu);
   }, []);

   const Menus = [
      {
         name: "Home",
         link: "/",
      },
      {
         name: "Layanan Warga",
         link: "/dashboard_warga"
      },
   ]

   return (
      <>
         <nav className="w-full flex items-center justify-between py-2 bg-white shadow-md fixed z-30 bg-opacity-70">
            {/* logo */}
            <div className="flex items-center gap-2 mb-2 ml-2">
               <Link to={"/"}>
                  <img src={logo} alt="Ini Logo" className="w-20" />
               </Link>
               <FaPhoneVolume />
               <p>Call Us - 085346901814
               </p>

            </div>
            {/* Navmenu Mobile */}
            <div className="flex mx-4 lg:hidden">
               <button
                  className="px-4"
                  onClick={handleHamburgerClick}
               >
                  {openHamburger ? (
                     <RxCross2 className="w-10 h-10" />
                  ) : (
                     <FiMenu className="w-10 h-10" />
                  )}
               </button>
               {/* jika dia login ini muncul */}
               <div
                  className={`${openHamburger ? "translate-y-0" : "-translate-y-[360px]"
                     } transition-transform duration-300 ease-in-out absolute top-4 right-4 mt-24 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-300 px-5 py-6 rounded-md shadow-lg`}
               >
                  <ul className="flex flex-col gap-2">
                     {Menus.map((item, index) => (
                        <li key={index} className="text-white">
                           <NavLink to={item.link}>
                              {item.name}
                           </NavLink>
                        </li>
                     ))}
                  </ul>
                  <div className="h-px w-full bg-white my-4"></div>
                  {/* jika sudah login ini munucul (profile user) */}
                  <div className="flex flex-col gap-4">
                     <Link
                        className="text-white font-medium"
                        as={Link}
                        to={"/myprofile"}
                     >
                        Profile Saya
                     </Link>
                     <button className="flex gap-2 items-center border-2 border-white rounded-lg px-4 py-[6px] text-orange-600 bg-white font-medium">
                        <MdLogout />
                        <p>Logout</p>
                     </button>
                  </div>
               </div>
               {/* jika belum login ini muncul */}
               <Link as={Link} to={"/login"}>
                  <button className="py-2 px-4 rounded-md bg-orange-300 text-white tracking-wide font-medium">Login</button>
               </Link>
            </div>

            {/* Navmenu website */}
            <div className="hidden lg:flex lg:gap-16 lg:items-center">
               <NavLink
                  to={'/'}
                  className={({ isActive }) =>
                     isActive
                        ? "text-primary font-semibold text-lg"
                        : "text-lg hover:scale-110 duration-300 hover:text-primary font-medium"
                  }
               >
                  Home
               </NavLink>
               <div className="flex flex-row items-center gap-6">
                  {/* Layanan warga  dropdown by daisyUI*/}
                  <div className="flex-none">
                     <ul className="menu menu-horizontal px-1">
                        <li>
                           <details>
                              <summary className="text-lg">
                                 Layanan Warga
                              </summary>
                              <ul className="p-2 w-44 bg-base-100 rounded-t-none">
                                 <Link as={Link} to={"/dashboard_warga"}>
                                    <li><a>Pembayaran</a></li>
                                 </Link>
                                 <Link as={Link} to={"/dashboard_warga"}>
                                    <li><a>Pengajuan Surat</a></li>
                                 </Link>
                              </ul>
                           </details>
                        </li>
                     </ul>
                  </div>
                  {/* fitur admin */}
                  <div className="flex-none">
                     <ul className="menu menu-horizontal px-1">
                        <li>
                           <details>
                              <summary className="text-lg">
                                 Fitur Admin
                              </summary>
                              <ul className="p-2 w-44 bg-base-100 rounded-t-none">
                                 <Link as={Link}>
                                    <li><a>Ketua RT</a></li>
                                 </Link>
                                 <Link as={Link} to={"/dashboard"}>
                                    <li><a>Sekretaris</a></li>
                                 </Link>
                                 <Link as={Link} to={"/dashboard"}>
                                    <li><a>Bendahara</a></li>
                                 </Link>
                              </ul>
                           </details>
                        </li>
                     </ul>
                  </div>
               </div>
               {/* jika belum login ini muncul */}
               <Link as={Link} to={"/login"} className="mx-4">
                  <button className="py-2 px-12 border-2 rounded-md bg-orange-400 text-white tracking-wider hover:text-orange-500 hover:bg-white hover:border-orange-500 hover:border-2 duration-300 hover:shadow-lg shadow-orange-500">
                     Login
                  </button>
               </Link>
               {/* jika user sudah login ini yg muncul mode web*/}
               <div className="dropdown dropdown-end mr-4" tabIndex={0} role="button">
                  <div className="flex items-center gap-2 border-none bg-orange-400 py-3 px-5 rounded-md text-white hover:bg-white duration-300 hover:shadow-lg hover:text-orange-400">
                     <FaRegUser className="" />
                     <h2>Hi Helmi</h2>
                  </div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-xl bg-base-100 rounded-box w-52">
                     <Link as={Link} to={"/myprofile"}>
                        <li><a><FaRegUser className="" />Profil Saya</a></li>
                     </Link>
                     <li><a><MdLogout />Logout</a></li>
                  </ul>
               </div>
            </div>
         </nav>
      </>
   )
}

export default Navbar