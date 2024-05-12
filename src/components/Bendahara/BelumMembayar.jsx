
const BelumMembayar = () => {
   return (
      <div className="boder-2 border-slate-300 rounded-lg shadow-lg p-8 mt-4">
         <div className="overflow-x-auto">
            <table className="table">
               {/* head */}
               <thead>
                  <tr>
                     <th>Nama</th>
                     <th>Alamat</th>
                     <th>Jenis Pembayaran</th>
                     <th>Nomimal</th>
                     <th>Keterangan</th>
                  </tr>
               </thead>
               <tbody>
                  {/* row 1 */}
                  <tr>
                     {/* Nama */}
                     <td>
                        <div className="flex items-center gap-3">
                           <div className="font-bold">Jacop Sayuri</div>
                        </div>
                     </td>
                     {/* Tanggal */}
                     <td>
                        Jln Palacari ilir rt22 no20
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
                           <h1>Rp. 220.000,00</h1>
                        </div>
                     </td>
                     {/* Bukti pembayaran */}
                     <td>
                        <div className="border-none bg-red-500 rounded-lg py-2 px-4 text-white font-medium">
                           belum bayar
                        </div>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   )
}

export default BelumMembayar
