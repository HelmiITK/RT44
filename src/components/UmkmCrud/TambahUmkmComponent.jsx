import { Link } from "react-router-dom";
import FormatFoto from "../../assets/formatfoto.png"
import { IoArrowBackOutline } from "react-icons/io5";
import PropTypes from "prop-types"

const TambahUmkmComponent = ({ handleMenuClick }) => {
   return (
      <>
         {/* Create UMKM */}
         <div className="border-2 border-slate-300 p-8 rounded-lg shadow-lg flex flex-col mb-8">
            {/* button back to main dashboard UMKM  */}
            <Link
               onClick={() => handleMenuClick(1)}
               className="flex flex-row items-center gap-2 w-1/6 hover:underline hover:scale-105 duration-100">
               <IoArrowBackOutline className="w-6 h-6" />
               <button className="font-medium">
                  kembali
               </button>
            </Link>
            {/*heading */}
            <h1 className="text-3xl font-semibold text-primary text-center">Tambah UMKM</h1>
            {/* Form data tambah umkm */}
            <form action="" className="flex flex-col gap-6 mt-4">
               {/* nama umkm */}
               <label
                  htmlFor="namaUmkm"
                  className="flex flex-col gap-2"
               >
                  <h2 className="font-medium text-lg">Nama UMKM</h2>
                  <input
                     type="text"
                     id="namaUmkm"
                     name="namaUmkm"
                     className="border-[1px] border-black rounded-md py-2 px-4 shadow-md"
                  />
               </label>
               {/* nama umkm */}
               <label
                  htmlFor="namaPemilik"
                  className="flex flex-col gap-2"
               >
                  <h2 className="font-medium text-lg">Nama Pemilik</h2>
                  <input
                     type="text"
                     id="namaPemilik"
                     name="namaPemilik"
                     className="border-[1px] border-black rounded-md py-2 px-4 shadow-md"
                  />
               </label>
               {/* deskripisi umkm */}
               <label htmlFor="donasi" className="flex flex-col gap-2">
                  <span className="font-semibold capitalize">deskripsi UMKM</span>
                  <textarea id="donasi" className="textarea textarea-bordered textarea-sm w-full border-[1px] border-black py-2 px-4 shadow-lg" ></textarea>
               </label>
               {/* upload gambar */}
               <div className="flex flex-col gap-4 border-[1px] border-black p-8 bg-white rounded-lg shadow-md w-1/2">
                  <h1 className="capitalize font-medium text-lg text-center mb-5">upload gambar UMKM</h1>
                  <div className="flex flex-col justify-center items-center gap-4 bg-gray-200 w-full py-6">
                     <img src={FormatFoto} alt="" className="w-32" />
                     <h2 className="text-gray-400 font-medium">Format jpg. png. jpeg.</h2>
                     <input type="file" name="" id="" className="w-1/2" />
                  </div>
               </div>
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
      </>
   )
}

export default TambahUmkmComponent

TambahUmkmComponent.propTypes = {
   handleMenuClick: PropTypes.func
}
