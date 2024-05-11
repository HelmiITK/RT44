import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import PropTypes from "prop-types"

const DataPengajuanSurat = ({ handleMenuClick }) => {
   return (
      <div className="border-2 border-slate-300 rounded-lg shadow-lg p-8 mt-4" >
         <div className="overflow-x-auto">
            <table className="table">
               {/* head */}
               <thead>
                  <tr>
                     <th>Kode Surat</th>
                     <th>Tanggal</th>
                     <th>Nama</th>
                     <th>Tujuan</th>
                     <th>Tindakan</th>
                     <th>Status</th>
                  </tr>
               </thead>
               <tbody>
                  {/* row 1 */}
                  <tr>
                     <td>
                        <div className="flex items-center gap-3">
                           <div className="font-bold">8787</div>
                        </div>
                     </td>
                     <td>
                        22 Juni 1987
                     </td>
                     <td >
                        <div className="flex items-center gap-2 ">
                           {/* <FaWhatsapp className="w-6 h-6 " /> */}
                           <h1>Samsudin hariadi</h1>
                        </div>
                     </td>
                     <td>
                        <div className="flex items-center gap-2 ">
                           <h1>Nikah</h1>
                        </div>
                     </td>
                     <td>
                        <div className="flex gap-2 items-center">
                           {/* button edit */}
                           <button
                              onClick={() => handleMenuClick(5)}
                              className="rounded-lg p-3 bg-slate-300 hover:bg-primary hover:text-white duration-300"
                           >
                              <CiEdit className="w-6 h-6" />
                           </button>
                           {/* button hapus */}
                           <button className="rounded-lg p-3 bg-slate-300 hover:bg-red-500 hover:text-white duration-300">
                              <AiOutlineDelete className="w-6 h-6" />
                           </button>
                        </div>
                     </td>
                     <th>
                        <select className="select select-bordered border-[1px] border-black w-full max-w-xs shadow-md">
                           <option disabled selected>Verifikasi</option>
                           <option>Selesai</option>
                           <option>Tolak</option>
                        </select>
                     </th>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   )
}

export default DataPengajuanSurat

DataPengajuanSurat.propTypes = {
   handleMenuClick: PropTypes.func
}
