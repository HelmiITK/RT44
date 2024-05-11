
import PropTypes from "prop-types"
import DataPengajuanSurat from "../../../components/Sekretaris/DataPengajuanSurat"
import DataSelesai from "../../../components/Sekretaris/DataSelesai"

const PengajuanSuratPage = ({ handleMenuClick, step }) => {
   return (
      <>
         <div className="flex flex-row items-center gap-4">
            {/* surat menunggu validasi */}
            <div
               className="border-2 border-slate-300 rounded-lg py-6 flex flex-col gap-2 items-center w-full cursor-pointer hover:bg-primary duration-300 hover:drop-shadow-lg hover:scale-90 hover:text-white"
               onClick={() => handleMenuClick(1)}
            >
               <h1 className="uppercase text-2xl font-bold">surat menunggu verifikasi</h1>
               <h2 className="font-bold text-4xl">10</h2>
            </div>
            {/* surat selesai */}
            <div
               className="border-2 border-slate-300 rounded-lg py-6 flex flex-col gap-2 items-center w-full cursor-pointer hover:bg-primary duration-300 hover:drop-shadow-lg hover:scale-90 hover:text-white"
               onClick={() => handleMenuClick(2)}
            >
               <h1 className="uppercase text-2xl font-bold">surat selesai</h1>
               <h2 className="font-bold text-4xl">3</h2>
            </div>
         </div>
         {/* data pengajuan surat */}
         {step === 1 && (
            <DataPengajuanSurat handleMenuClick={handleMenuClick}/>
         )}
         {/* data surat selesai */}
         {step === 2 && (
            <DataSelesai />
         )}
      </>
   )
}

export default PengajuanSuratPage

PengajuanSuratPage.propTypes = {
   handleMenuClick: PropTypes.func,
   step: PropTypes.number
}
