import LogoRt from "../assets/Logo.svg"
import { FaInstagram } from "react-icons/fa"

const Footer = () => {
   return (
      <div className="container mx-auto mt-16">
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
                     <h1 className="text-base font-medium">Tautana Langsung</h1>
                     <ul className="text-sm font-light flex flex-col gap-2">
                        <li className="cursor-pointer hover:text-orange-500">Halaman</li>
                        <li className="cursor-pointer hover:text-orange-500">Tentang Kami</li>
                        <li className="cursor-pointer hover:text-orange-500">Pembayaran</li>
                        <li className="cursor-pointer hover:text-orange-500">Permohonan Surat</li>
                     </ul>
                  </div>
                  <div className="flex flex-col gap-3">
                     <h1 className="text-base font-medium">Tautana Lainnya</h1>
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

            <div className="mt-10 pb-10 mx-4 flex flex-col items-center justify-center">
               <div className="h-px w-full bg-black bg-opacity-25"></div>
               <h1 className="flex gap-2 items-center mt-6">2024 <div className="w-px h-6 bg-black"></div> All rights reserved</h1>
            </div>
         </div>
      </div>
   )
}

export default Footer