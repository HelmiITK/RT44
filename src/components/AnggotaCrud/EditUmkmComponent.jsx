import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import PropTypes from "prop-types"

const EditAnggotaComponent = ({ handleMenuClick }) => {
   return (
      <div className="border-2 border-slate-300 p-8 rounded-lg shadow-lg flex flex-col mb-8">
         {/* button back to main dashboard Anggota  */}
         <Link
            onClick={() => handleMenuClick(2)}
            className="flex flex-row items-center gap-2 w-1/6 hover:underline hover:scale-105 duration-100">
            <IoArrowBackOutline className="w-6 h-6" />
            <button className="font-medium">
               kembali
            </button>
         </Link>
         {/* heading */}
         <h1 className="text-3xl font-semibold text-primary text-center">Edit Anggota</h1>
         {/* Form data tambah umkm */}
         <form action="" className="flex flex-col gap-6 mt-4">
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
            {/* button aksi */}
            <div className="flex items-center gap-8 justify-center">
               {/* sumbit */}
               <button className="capitalize border-none py-3 px-8 bg-primary rounded-lg font-semibold mt-4 hover:text-white text-lg hover:bg-green-500 duration-300 hover:shadow-lg hover:drop-shadow-md">
                  submit
               </button>
               {/* cancel */}
               <button className="capitalize border-none py-3 px-8 bg-red-500 rounded-lg font-semibold mt-4 hover:text-white text-lg hover:bg-red-700 duration-300 hover:shadow-lg hover:drop-shadow-md">
                  cancel
               </button>
            </div>
         </form>
      </div>
   )
}

export default EditAnggotaComponent

EditAnggotaComponent.propTypes = {
   handleMenuClick: PropTypes.func
}
