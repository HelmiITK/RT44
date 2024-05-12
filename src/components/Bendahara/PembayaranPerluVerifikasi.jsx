import { FaEye } from "react-icons/fa";


const PembayaranPerluVerifikasi = () => {
   return (
      <div className="border-2 border-slate-300 rounded-lg shadow-lg p-8 mt-4">
         <div className="overflow-x-auto">
            <table className="table">
               {/* head */}
               <thead>
                  <tr>
                     <th>Nama</th>
                     <th>Tanggal</th>
                     <th>Jenis Pembayaran</th>
                     <th>Nomimal</th>
                     <th>Bukti Pembayaran</th>
                     <th>Status</th>
                  </tr>
               </thead>
               <tbody>
                  {/* row 1 */}
                  <tr>
                     {/* Nama */}
                     <td>
                        <div className="flex items-center gap-3">
                           <div className="font-bold">Asep Kurniadi</div>
                        </div>
                     </td>
                     {/* Tanggal */}
                     <td>
                        22 Juni 1987
                     </td>
                     {/* Jenis pembayaran */}
                     <td >
                        <div className="flex items-center gap-2 ">
                           <h1>Iuran Wajib</h1>
                        </div>
                     </td>
                     {/* Nominal */}
                     <td>
                        <div className="flex items-center gap-2 ">
                           <h1>Rp. 320.000,00</h1>
                        </div>
                     </td>
                     {/* Bukti pembayaran */}
                     <td>
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="border-none bg-slate-200 rounded-xl p-2" onClick={() => document.getElementById('my_modal_2').showModal()}>
                           <FaEye className="w-6 h-6" />
                        </button>
                        <dialog id="my_modal_2" className="modal">
                           <div className="modal-box flex flex-col gap-2 text-center items-center">
                              <h3 className="font-bold text-lg">Bukti Pembayaran</h3>
                              <img
                                 src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMdlPhPu_wHOwR5BaVSGR0qgvtOk2PlvKT8sgeDvwmFA&s"}
                                 alt=""
                                 className="w-1/2"
                              />
                           </div>
                           <form method="dialog" className="modal-backdrop">
                              <button>close</button>
                           </form>
                        </dialog>
                     </td>
                     {/* Status validasi pembayaran */}
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

export default PembayaranPerluVerifikasi
