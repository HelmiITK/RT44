import LogoRt from "../assets/Logo.svg"
import { FaInstagram } from "react-icons/fa"
import CopyRight from "./CopyRight"
import { IoArrowUp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { PropTypes } from "prop-types"
import { Link } from "react-router-dom";

const Footer = ({ linkRef, goto }) => {
   const [showScrollToTop, setShowScrollToTop] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         const scrollY = window.scrollY;
         const windowHeight = window.innerHeight;
         const documentHeight = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
         );

         // Tentukan batasan scroll di mana button harus muncul
         const threshold = documentHeight - windowHeight - 2600;

         // Tampilkan atau sembunyikan button berdasarkan batasan scroll
         setShowScrollToTop(scrollY > threshold);
      };

      // Tambahkan event listener untuk mendengarkan perubahan posisi scroll
      window.addEventListener("scroll", handleScroll);

      // Membersihkan event listener ketika komponen di-unmount
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   const handleScrollToTop = () => {
      // Menggunakan ref dari Navbar untuk kembali ke atas
      goto(linkRef.current);
   };

   return (
      <div className="container mx-auto">
         <div className="bg-secondary">
            <div className="lg:flex lg:gap-10 lg:mx-16 lg:items-center">
               <div className="flex flex-row gap-4 mx-4 items-center pt-8 lg:gap-8 lg:flex lg:flex-col lg:items-start">
                  <div className="rounded-full shadow-lg bg-white lg:bg-transparent lg:shadow-xl lg:border-4 lg:border-white">
                     <img src={LogoRt} alt="Logo RT 44" className="w-60 lg:w-52" />
                  </div>
                  <p className="text-sm font-light lg:w-2/3 lg:text-base">
                     Perumahan Gading City RT 44
                     Jln Sepinggan Pratama Blok G dan H, Kel. Sepinggan Baru, Kec. Balikpapan Selatan, Balikpapan, Kalimantan Timur
                  </p>
               </div>

               <div className="flex gap-2 mx-4 justify-around mt-10 lg:flex lg:gap-24 lg:w-2/4">
                  <div className="flex flex-col gap-3">
                     <h1 className="text-base font-medium">Tautan Langsung</h1>
                     <ul className="text-sm font-light flex flex-col gap-2">
                        <Link
                           as={Link}
                           to={'our_team'}
                           className="cursor-pointer hover:text-orange-500 hover:underline"
                        >
                           Tentang Kami
                        </Link>
                        <Link
                           as={Link}
                           to={'/dashboard_warga'}
                           className="cursor-pointer hover:text-orange-500 hover:underline"
                        >
                           Layanan Warga
                        </Link>
                        <Link
                           as={Link}
                           to={'/umkm'}
                           className="cursor-pointer hover:text-orange-500 hover:underline"
                        >
                           UMKM
                        </Link>
                     </ul>
                  </div>
                  <div className="flex flex-col gap-3">
                     <h1 className="text-base font-medium">Tautan Lainnya</h1>
                     <a
                        href="https://www.instagram.com/rt44.gadingcity/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-orange-500"
                     >
                        <FaInstagram className="w-8 h-8" />
                     </a>
                  </div>
               </div>
            </div>
            {/* Button Scroll to Top */}
            {showScrollToTop && (
               <button
                  className="fixed bottom-5 right-10 md:right-32 lg:right-10 bg-primary text-white rounded-full p-2 cursor-pointer hover:bg-orange-600 animate-bounce"
                  onClick={handleScrollToTop}
               >
                  <IoArrowUp className="w-6 h-6" />
               </button>
            )}
            <CopyRight />
         </div>
      </div>
   )
}

export default Footer;

Footer.propTypes = {
   linkRef: PropTypes.object,
   goto: PropTypes.func
}