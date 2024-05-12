import PropTypes from "prop-types"
import PembayaranPerluVerifikasi from "../../../components/Bendahara/PembayaranPerluVerifikasi"
import BelumMembayar from "../../../components/Bendahara/BelumMembayar"
import SudahMembayar from "../../../components/Bendahara/SudahMembayar"

const ValidasiPembayaranPage = ({ handleMenuClick, step }) => {
   return (
      <>
         <div className="flex flex-row items-center gap-4">
            {/* Pembayaran menunggu validasi */}
            <div
               className="border-2 border-slate-300 rounded-lg py-6 flex flex-col gap-2 items-center w-full cursor-pointer hover:bg-primary duration-300 hover:drop-shadow-lg hover:scale-90 hover:text-white text-center"
               onClick={() => handleMenuClick(1)}
            >
               <h1 className="uppercase text-2xl font-bold">pembayaran perlu verifikasi</h1>
               <h2 className="font-bold text-4xl">10</h2>
            </div>
            {/* belum melakukan pembayaran */}
            <div
               className="border-2 border-slate-300 rounded-lg py-6 flex flex-col gap-2 items-center w-full cursor-pointer hover:bg-primary duration-300 hover:drop-shadow-lg hover:scale-90 hover:text-white text-center"
               onClick={() => handleMenuClick(2)}
            >
               <h1 className="uppercase text-2xl font-bold">jumlah keluarga belum bayar bulan ini</h1>
               <h2 className="font-bold text-4xl">3</h2>
            </div>
            {/* sudah melakukan pembayaran */}
            <div
               className="border-2 border-slate-300 rounded-lg py-6 flex flex-col gap-2 items-center w-full cursor-pointer hover:bg-primary duration-300 hover:drop-shadow-lg hover:scale-90 hover:text-white text-center"
               onClick={() => handleMenuClick(3)}
            >
               <h1 className="uppercase text-2xl font-bold">jumlah keluarga yang sudah bayar</h1>
               <h2 className="font-bold text-4xl">1</h2>
            </div>
         </div>

         {/* Data pembayaran perlu verifikasi */}
         {step === 1 && (
            <PembayaranPerluVerifikasi />
         )}
         {step === 2 && (
            <BelumMembayar />
         )}
         {step === 3 && (
            <SudahMembayar />
         )}
      </>
   )
}

export default ValidasiPembayaranPage

ValidasiPembayaranPage.propTypes = {
   handleMenuClick: PropTypes.func,
   step: PropTypes.number
}
