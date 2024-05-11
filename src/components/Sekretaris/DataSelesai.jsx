
const DataSelesai = () => {
   return (
      <div className="border-2 border-slate-300 rounded-lg shadow-lg p-8 hidden lg:block mt-4">
         <div className="overflow-x-auto">
            <table className="table">
               {/* head */}
               <thead>
                  <tr>
                     <th>Kode Surat</th>
                     <th>Tanggal</th>
                     <th>Nama</th>
                     <th>Tujuan</th>
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
                     <th>
                        <div className="capitalize border-none rounded-md py-2 px-4 bg-green-500 font-medium text-white">selesai</div>
                        <div className="capitalize border-none rounded-md py-2 px-4 bg-red-500 font-medium text-white">ditolak</div>
                     </th>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   )
}

export default DataSelesai
