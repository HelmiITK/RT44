
const StatusSuratPage = () => {
   return (
      <div>
         {/* status suerat mobile */}
         <div className="flex lg:hidden border border-black rounded-md p-4 flex-col gap-2">
            {/* status */}
            <div className="mb-4">
               <div className="capitalize border-none rounded-md py-2 px-4 bg-green-500 font-medium text-white">selesai</div>
               <div className="capitalize border-none rounded-md py-2 px-4 bg-red-500 font-medium text-white">ditolak</div>
            </div>
            {/* kode surat */}
            <div className="flex items-center justify-between mx-4 gap-3">
               <h2 className="capitalize font-medium w-[80%]">
                  kode surat
               </h2>
               <div>:</div>
               <h3 className="w-full">8787</h3>
            </div>
            {/* tanggal */}
            <div className="flex items-center justify-between mx-4 gap-3">
               <h2 className="capitalize font-medium w-[80%]">
                  tanggal
               </h2>
               <div>:</div>
               <h3 className="w-full">22 Juni 1987</h3>
            </div>
            {/* nama */}
            <div className="flex items-center justify-between mx-4 gap-3">
               <h2 className="capitalize font-medium w-[80%]">
                  nama
               </h2>
               <div>:</div>
               <h3 className="w-full">Asep Suriyadi</h3>
            </div>
            {/* tujuan */}
            <div className="flex items-center justify-between mx-4 gap-3">
               <h2 className="capitalize font-medium w-[80%]">
                  tujuan
               </h2>
               <div>:</div>
               <h3 className="w-full">Nikah</h3>
            </div>

         </div>

         {/* status suarat web */}
         <div className="border-2 border-slate-300 rounded-lg shadow-lg p-8">
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
      </div>
   )
}

export default StatusSuratPage
