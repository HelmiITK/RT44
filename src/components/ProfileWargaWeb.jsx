
const ProfileWargaWeb = () => {
   return (
      <div className="card card-side bg-base-100 shadow-xl flex flex-col lg:flex lg:flex-row">
         <figure><img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" className="ml-10 mr-2 w-1/2 lg:w-full"/></figure>
         <div className="card-body">
            <h2 className="card-title capitalize text-2xl mb-4">Detail akun</h2>
            {/* data */}
            <div className="flex flex-col gap-2">
               {/* NIK */}
               <div className="flex w-full gap-4">
                  <h1 className="text-lg uppercase w-1/4 font-light">nik</h1>
                  <div>:</div>
                  <h2 className="font-medium text-lg">21212121221212121</h2>
               </div>
               {/* nama */}
               <div className="flex w-full gap-4">
                  <h1 className="text-lg capitalize w-1/4 font-light">nama</h1>
                  <div>:</div>
                  <h2 className="font-medium text-lg capitalize">Helmi</h2>
               </div>
               {/* jenis kelamin */}
               <div className="flex w-full gap-4">
                  <h1 className="text-lg capitalize w-1/4 font-light">jenis kelamin</h1>
                  <div>:</div>
                  <h2 className="font-medium text-lg capitalize">laki-laki</h2>
               </div>
               {/* tempat tgl lahir */}
               <div className="flex w-full gap-4">
                  <h1 className="text-lg capitalize w-1/4 font-light">tempat, tanggal lahir</h1>
                  <div>:</div>
                  <h2 className="font-medium text-lg capitalize">muara badak, 22 juni 2002</h2>
               </div>
               {/* no hp */}
               <div className="flex w-full gap-4">
                  <h1 className="text-lg capitalize w-1/4 font-light">nomor telepon</h1>
                  <div>:</div>
                  <h2 className="font-medium text-lg capitalize">085346901814</h2>
               </div>
               {/* email */}
               <div className="flex w-full gap-4">
                  <h1 className="text-lg capitalize w-1/4 font-light">email</h1>
                  <div>:</div>
                  <h2 className="font-medium text-lg capitalize">helmi22@gmail.com</h2>
               </div>
               {/* alamat */}
               <div className="flex w-full gap-4">
                  <h1 className="text-lg capitalize w-1/4 font-light">alamat</h1>
                  <div>:</div>
                  <h2 className="font-medium text-lg capitalize">Jalan palacari ilir, RT69 No 69</h2>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProfileWargaWeb
