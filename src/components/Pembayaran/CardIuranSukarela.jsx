import PropTypes from "prop-types"
import Donasi from "../../assets/donasi.png"
import { BsCalendar2Date } from "react-icons/bs";
import { GiCash } from "react-icons/gi";
import { IoPricetagsOutline } from "react-icons/io5";
const CardIuranSukarela = ({ handleMenuClick }) => {
   const iuranSukarela = [
      {
         jenisIuran: "Sukarela",
         bulan: "Februari 2024",
         jumlah: "150,000",
         desk: "Iuran Panti Asuhan"
      },
      {
         jenisIuran: "Sukarela",
         bulan: "Maret 2024",
         jumlah: "220,000",
         desk: "Iuran 17 Agustus"
      },
      {
         jenisIuran: "Sukarela",
         bulan: "April 2024",
         jumlah: "290,000",
         desk: "Iuran Study Tour RT44"
      }
   ]
   return (
      <>
         <div className="border border-black rounded-lg p-4">
            <h1 className="capitalize font-semibold text-lg">iuran sukarela</h1>
            <div className="block lg:grid lg:grid-cols-3 lg:gap-3">
               {iuranSukarela.map((item, i) => (
                  <div key={i} className="border border-slate-300 shadow-md p-4 rounded-lg mt-4 bg-slate-200">
                     {/* heading */}
                     <h1 className="bg-primary rounded-md py-2 px-4 font-medium">{item.jenisIuran}</h1>
                     {/* deskripisi */}
                     <div className="flex flex-row justify-between items-center my-6">
                        <div className="flex flex-col gap-4">
                           <div className="flex items-center gap-1">
                              <BsCalendar2Date className="w-6 h-6" />
                              <h2 className="font-medium">{item.bulan}</h2>
                           </div>
                           <div className="flex items-center gap-1">
                              <GiCash className="w-6 h-6" />
                              <h3 className="font-medium">Rp. {item.jumlah}</h3>
                           </div>
                           <div className="flex items-center gap-1">
                              <IoPricetagsOutline className="w-6 h-6" />
                              <h3 className="font-medium italic">{item.desk}</h3>
                           </div>
                        </div>
                        <img src={Donasi} alt="" className="w-1/2 drop-shadow-xl" />
                     </div>
                     {/* button donasi */}
                     <button
                        onClick={() => handleMenuClick(8)}
                        className="capitalize font-medium text-white border-none py-2 px-4 bg-green-500 rounded-lg hover:drop-shadow-lg hover:bg-green-700 duration-300 hover:scale-105"
                     >
                        donasi sekarang
                     </button>
                  </div>
               ))}
            </div>
         </div>
      </>
   )
}

export default CardIuranSukarela

CardIuranSukarela.propTypes = {
   handleMenuClick: PropTypes.func
}