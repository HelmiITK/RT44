import GambarIuran from "../../../assets/iuran.png"
import { FaArrowRightLong } from "react-icons/fa6";
import PropTypes from "prop-types";

const IuranWajibPage = ({ handleMenuClick }) => {
   const tagihan = [
      {
         status: "belum bayar",
         jenisIuran: "wajib",
         bulan: "Februari 2024",
         jumlah: "150,000",
      },
      {
         status: "belum bayar",
         jenisIuran: "wajib",
         bulan: "Maret 2024",
         jumlah: "220,000",
      },
      {
         status: "sudah bayar",
         jenisIuran: "wajib",
         bulan: "April 2024",
         jumlah: "290,000",
      }
   ]
   return (
      <div className="mt-6 mx-4 border-2 border-black rounded-lg p-4">
         <h1 className="capitalize font-semibold text-xl mb-4">tagihan</h1>
         <div className="lg:grid lg:grid-cols-3 lg:gap-4">
            {/* card tagihan */}
            {tagihan.map((item, i) => (
               <div key={i} className="border-none p-4 bg-gray-200 rounded-lg mt-4">
                  <p className="text-end text-red-500 font-medium capitalize">
                     {item.status}
                  </p>
                  <div className="flex flex-row justify-between">
                     <div className="flex flex-col justify-around">
                        <div className="flex flex-col gap-2">
                           <h1 className="capitalize font-semibold text-2xl">{item.jenisIuran}</h1>
                           <p>{item.bulan}</p>
                           <span className="font-semibold">Rp. {item.jumlah}</span>
                        </div>
                        {/* button bayar hp*/}
                        <div
                           className="flex items-center gap-2 border-none bg-primary rounded-xl py-1 px-3 cursor-pointer lg:hidden"
                           onClick={() => handleMenuClick(5)}
                        >
                           <h1 className="capitalize text-white font-medium">bayar sekarang</h1>
                           <FaArrowRightLong className="bg-white rounded-3xl p-1 w-8 h-5 text-primary" />
                        </div>
                     </div>
                     <div>
                        <img src={GambarIuran} alt="" />
                     </div>
                  </div>
                  {/* button bayar web */}
                  <div
                     className="hidden lg:flex lg:gap-2 lg:items-center bg-primary rounded-xl py-1 px-3 cursor-pointer justify-between hover:bg-green-500 duration-300"
                     onClick={() => handleMenuClick(5)}
                  >
                     <h1 className="text-white font-medium text-lg capitalize">bayar sekarang</h1>
                     <FaArrowRightLong className="bg-white rounded-3xl p-1 w-8 h-5 text-primary" />
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default IuranWajibPage;

IuranWajibPage.propTypes = {
   handleMenuClick: PropTypes.func,
}
