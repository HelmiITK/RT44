import FormatFoto from "../../assets/formatfoto.png"

const EditAnggotaComponent = () => {
   return (
      <div className="border-2 border-slate-300 p-8 rounded-lg shadow-lg flex flex-col gap-6 mb-8">
         {/* heading */}
         <h1 className="text-3xl font-semibold text-primary">Edit Anggota</h1>
         {/* Form data tambah umkm */}
         <form action="" className="flex flex-col gap-6">
            {/* nama */}
            <label
               htmlFor="namaAnggota"
               className="flex flex-col gap-2"
            >
               <h2 className="font-medium text-lg">Nama</h2>
               <input
                  type="text"
                  id="namaAnggota"
                  name="namaAnggota"
                  className="border-[1px] border-black rounded-md py-2 px-4 shadow-md"
               />
            </label>
            {/* alamat */}
            <label
               htmlFor="alamat"
               className="flex flex-col gap-2"
            >
               <h2 className="font-medium text-lg">Alamat</h2>
               <input
                  type="text"
                  id="alamat"
                  name="alamat"
                  className="border-[1px] border-black rounded-md py-2 px-4 shadow-md"
               />
            </label>
            {/* no ktp/kk */}
            <label
               htmlFor="kk"
               className="flex flex-col gap-2"
            >
               <h2 className="font-medium text-lg">No KTP/KK</h2>
               <input
                  type="number"
                  id="kk"
                  name="kk"
                  className="border-[1px] border-black rounded-md py-2 px-4 shadow-md"
               />
            </label>
            {/* no nik */}
            <label
               htmlFor="nik"
               className="flex flex-col gap-2"
            >
               <h2 className="font-medium text-lg">No NIK</h2>
               <input
                  type="number"
                  id="nik"
                  name="nik"
                  className="border-[1px] border-black rounded-md py-2 px-4 shadow-md"
               />
            </label>
            {/* jumlah anak */}
            <label
               htmlFor="anak"
               className="flex flex-col gap-2"
            >
               <h2 className="font-medium text-lg">Jumlah Anak</h2>
               <input
                  type="number"
                  id="anak"
                  name="anak"
                  className="border-[1px] border-black rounded-md py-2 px-4 shadow-md"
               />
            </label>

            {/* status rumah */}
            <label
               htmlFor="status"
               className="flex flex-col gap-2"
            >
               <h2 className="font-medium text-lg">Status Rumah</h2>
               <select className="select select-bordered border-[1px] border-black w-full max-w-xs shadow-md">
                  <option disabled selected>Apa status rumah anda?</option>
                  <option>Beli</option>
                  <option>Sewa</option>
               </select>
            </label>
            {/* sumbit */}
            <button className="capitalize border-none py-3 px-4 bg-primary rounded-lg font-semibold mt-4 hover:text-white text-lg hover:bg-green-500 duration-300">
               submit
            </button>
         </form>
      </div>
   )
}

export default EditAnggotaComponent
