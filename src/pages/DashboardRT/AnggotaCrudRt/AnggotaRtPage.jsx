import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import PropTypes from "prop-types"

const AnggotaRtPage = ({ handleMenuClick }) => {
   return (
      <div className="flex flex-col gap-4">
         {/* heading */}
         <div className="border-2 border-slate-300 rounded-lg shadow-lg p-8 flex flex-col gap-4 justify-center">
            <h1 className="text-center text-3xl font-bold">Jumlah Anggota 50</h1>
            <button
               onClick={() => handleMenuClick(6)}
               className="cursor-pointer capitalize font-medium border-none bg-primary rounded-lg py-2 px-4 hover:bg-orange-500 duration-300 text-white">
               tambah anggota
            </button>
         </div>
         {/* konten data */}
         <div className="border-2 border-slate-300 rounded-lg shadow-lg p-8">
            <div className="overflow-x-auto">
               <table className="table">
                  {/* head */}
                  <thead>
                     <tr>
                        <th>Nama</th>
                        <th>Alamat</th>
                        <th>No KK/KTP</th>
                        <th>NIK</th>
                        <th>Jumlah Anak</th>
                        <th>Status Rumah</th>
                        <th></th>
                     </tr>
                  </thead>
                  <tbody>
                     {/* row 1 */}
                     <tr>
                        <td>
                           <div className="flex items-center gap-3">
                              <div className="font-bold">Hart Hagerty</div>
                           </div>
                        </td>
                        <td>
                           Jln kenari rt69 no 20
                        </td>
                        <td >
                           <div className="flex items-center gap-2 ">
                              54577888974435
                           </div>
                        </td>
                        <td>
                           <h1>123456789</h1>
                        </td>
                        <td>
                           <h1>3</h1>
                        </td>
                        <td>
                           <h1>Beli</h1>
                        </td>
                        <th>
                           <div className="flex gap-2 items-center">
                              {/* button edit */}
                              <button
                                 onClick={() => handleMenuClick(7)}
                                 className="rounded-lg p-3 bg-slate-300 hover:bg-primary hover:text-white duration-300">
                                 <CiEdit className="w-6 h-6" />
                              </button>
                              {/* button hapus */}
                              <button className="rounded-lg p-3 bg-slate-300 hover:bg-red-500 hover:text-white duration-300">
                                 <AiOutlineDelete className="w-6 h-6" />
                              </button>
                           </div>
                        </th>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   )
}

export default AnggotaRtPage

AnggotaRtPage.propTypes = {
   handleMenuClick: PropTypes.func
}
