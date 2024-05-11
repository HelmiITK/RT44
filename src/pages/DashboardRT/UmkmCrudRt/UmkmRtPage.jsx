import { FaWhatsapp } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import PropTypes from "prop-types"


const UmkmRtPage = ({ handleMenuClick }) => {
   return (
      <div className="flex flex-col gap-4">
         {/* heading */}
         <div className="border-2 border-slate-300 rounded-lg shadow-lg p-8 flex flex-col gap-4 justify-center">
            <h1 className="text-center text-3xl font-bold">Jumlah UMKM 10</h1>
            <button
               onClick={() => handleMenuClick(4)}
               className="cursor-pointer capitalize font-medium border-none bg-primary rounded-lg py-2 px-4 hover:bg-orange-500 duration-300 text-white">
               tambah umkm
            </button>
         </div>
         {/* konten data */}
         <div className="border-2 border-slate-300 rounded-lg shadow-lg p-8">
            <div className="overflow-x-auto">
               <table className="table">
                  {/* head */}
                  <thead>
                     <tr>
                        <th>Nama UMKM</th>
                        <th>Pemilik UMKM</th>
                        <th>Nomor Usaha</th>
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
                           Zemlak, Daniel and Leannon
                        </td>
                        <td >
                           <div className="flex items-center gap-2 ">
                              <FaWhatsapp className="w-6 h-6 " />
                              <h1>085346901814</h1>
                           </div>
                        </td>
                        <th>
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
                        </th>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   )
}

export default UmkmRtPage

UmkmRtPage.propTypes = {
   step: PropTypes.number,
   handleMenuClick: PropTypes.func
}
