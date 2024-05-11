import FormatFoto from "../../assets/formatfoto.png"

const EditUmkmComponent = () => {
   return (
      <div className="border-2 border-slate-300 p-8 rounded-lg shadow-lg flex flex-col gap-6 mb-8">
         {/* heading */}
         <h1 className="text-3xl font-semibold text-primary">Edit UMKM</h1>
         {/* Form data tambah umkm */}
         <form action="" className="flex flex-col gap-6">
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
            {/* sumbit */}
            <button className="capitalize border-none py-3 px-4 bg-primary rounded-lg font-semibold mt-4 hover:text-white text-lg hover:bg-green-500 duration-300">
               submit
            </button>
         </form>
      </div>
   )
}

export default EditUmkmComponent
