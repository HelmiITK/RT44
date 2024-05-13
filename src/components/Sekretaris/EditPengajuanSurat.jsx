import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import PropTypes from "prop-types"
const EditPengajuanSurat = ({ handleMenuClick }) => {
   return (
      <div className="p-8 border-2 border-slate-200 shadow-lg rounded-2xl mx-4 mb-8 lg:bg-white lg:w-full">
         <Link
            onClick={() => handleMenuClick(1)}
            className="flex flex-row items-center gap-2 w-1/6 hover:underline hover:scale-105 duration-100">
            <IoArrowBackOutline className="w-6 h-6" />
            <button className="font-medium">
               kembali
            </button>
         </Link>
         <h1 className="text-center text-2xl font-semibold lg:font-bold lg:text-3xl">Edit Surat Pengantar</h1>
         {/* form surat */}
         <form action="" className="flex flex-col gap-4 mt-4">

            {/* nama */}
            <label htmlFor="nama" className="flex flex-col gap-2">
               <h2 className="font-semibold">Nama Lengkap</h2>
               <input
                  type="text"
                  name="nama"
                  id="nama"
                  className="border-2 border-slate-200 shadow-md rounded-xl py-2 px-4"
               />
            </label>

            {/* Jenis kelamin */}
            <label htmlFor="nik" className="flex flex-col gap-2">
               <h2 className="font-semibold">Jenis Kelamin</h2>
               <div className="flex items-center gap-3">
                  <input
                     id="male"
                     type="radio"
                     name="gender"
                     className="radio"
                  // checked={editedGender === 'Male'}
                  // onChange={() => setEditedGender('Male')}
                  />
                  <label
                     htmlFor="male"
                     className="text-blue-500">
                     Laki-laki
                  </label>

                  <input
                     id="female"
                     type="radio"
                     name="gender"
                     className="radio"
                  // checked={editedGender === 'Female'}
                  // onChange={() => setEditedGender('Female')}
                  />
                  <label
                     htmlFor="female"
                     className="text-blue-500">
                     Perempuan
                  </label>
               </div>
            </label>

            {/* Tempat tgl lahir */}
            <label htmlFor="ttl" className="flex flex-col gap-2">
               <h2 className="font-semibold">Tempat, tanggal lahir</h2>
               <input
                  type="text"
                  name="ttl"
                  id="ttl"
                  className="border-2 border-slate-200 shadow-md rounded-xl py-2 px-4"
               />
            </label>

            {/* Status perkawinan */}
            <label htmlFor="nik" className="flex flex-col gap-2">
               <h2 className="font-semibold">Status Perkawinan</h2>
               <div className="flex flex-col items-start gap-3">
                  <label
                     htmlFor="bk"
                     className="text-blue-500 flex flex-row-reverse gap-2 items-center"
                  >
                     <h2>Belum Kawin</h2>
                     <input
                        id="bk"
                        type="radio"
                        name="sk"
                        className="radio"
                     // checked={editedGender === 'Male'}
                     // onChange={() => setEditedGender('Male')}
                     />
                  </label>

                  <label
                     htmlFor="kawin"
                     className="text-blue-500 flex flex-row-reverse gap-2 items-center"
                  >
                     <h2>Kawin</h2>
                     <input
                        id="kawin"
                        type="radio"
                        name="sk"
                        className="radio"
                     // checked={editedGender === 'Female'}
                     // onChange={() => setEditedGender('Female')}
                     />
                  </label>

                  <label
                     htmlFor="jd"
                     className="text-blue-500 flex flex-row-reverse gap-2 items-center"
                  >
                     <h2>Janda/Duda</h2>
                     <input
                        id="jd"
                        type="radio"
                        name="jd"
                        className="radio"
                     // checked={editedGender === 'Female'}
                     // onChange={() => setEditedGender('Female')}
                     />
                  </label>
               </div>
            </label>

            {/* Agama */}
            <div className="flex flex-col items-start gap-2">
               <h1 className="font-semibold">Agama</h1>
               <div className="font-medium w-full">
                  {/* {isEditing ? ( */}
                  <select
                     name="agama"
                     // value={editedReligion}
                     // onChange={(e) => setEditedReligion(e.target.value)}
                     className="border-2 border-slate-300 rounded-lg px-2 text-blue-500 w-full  py-1"
                  >
                     <option value="Islam">Islam</option>
                     <option value="Protestan">Protestan</option>
                     <option value="Katolik">Katolik</option>
                     <option value="Hindu">Hindu</option>
                     <option value="Budha">Budha</option>
                     <option value="KongHuCu">KongHuCu</option>
                  </select>
                  {/* ) : (
                              <h1>{selectedEmployee?.religion || '-'}</h1>
                           )} */}
               </div>
            </div>

            {/* Pekerjaan */}
            <label htmlFor="pekerjaan" className="flex flex-col gap-2">
               <h2 className="font-semibold">Pekerjaan</h2>
               <input
                  type="text"
                  name="pekerjaan"
                  id="pekerjaan"
                  className="border-2 border-slate-200 shadow-md rounded-xl py-2 px-4"
               />
            </label>

            {/* Golongan darah */}
            <label htmlFor="nik" className="flex flex-col gap-2">
               <h2 className="font-semibold">Golongan Darah</h2>
               <div className="flex flex-row items-start gap-6">
                  <label
                     htmlFor="A"
                     className="text-blue-500 flex flex-row-reverse gap-2 items-center"
                  >
                     <h2>A</h2>
                     <input
                        id="A"
                        type="radio"
                        name="A"
                        className="radio"
                     // checked={editedGender === 'Male'}
                     // onChange={() => setEditedGender('Male')}
                     />
                  </label>

                  <label
                     htmlFor="B"
                     className="text-blue-500 flex flex-row-reverse gap-2 items-center"
                  >
                     <h2>B</h2>
                     <input
                        id="B"
                        type="radio"
                        name="B"
                        className="radio"
                     // checked={editedGender === 'Female'}
                     // onChange={() => setEditedGender('Female')}
                     />
                  </label>

                  <label
                     htmlFor="AB"
                     className="text-blue-500 flex flex-row-reverse gap-2 items-center"
                  >
                     <h2>AB</h2>
                     <input
                        id="AB"
                        type="radio"
                        name="AB"
                        className="radio"
                     // checked={editedGender === 'Female'}
                     // onChange={() => setEditedGender('Female')}
                     />
                  </label>

                  <label
                     htmlFor="O"
                     className="text-blue-500 flex flex-row-reverse gap-2 items-center"
                  >
                     <h2>O</h2>
                     <input
                        id="O"
                        type="radio"
                        name="O"
                        className="radio"
                     // checked={editedGender === 'Female'}
                     // onChange={() => setEditedGender('Female')}
                     />
                  </label>
               </div>
            </label>

            {/* Kewarganegaraan */}
            <label htmlFor="negara" className="flex flex-col gap-2">
               <h2 className="font-semibold">Kewarganegaraan</h2>
               <div className="flex flex-row items-start gap-6">
                  <label
                     htmlFor="wna"
                     className="text-blue-500 flex flex-row-reverse gap-2 items-center"
                  >
                     <h2>WNA</h2>
                     <input
                        id="wna"
                        type="radio"
                        name="wna"
                        className="radio"
                     // checked={editedGender === 'Male'}
                     // onChange={() => setEditedGender('Male')}
                     />
                  </label>

                  <label
                     htmlFor="wni"
                     className="text-blue-500 flex flex-row-reverse gap-2 items-center"
                  >
                     <h2>WNI</h2>
                     <input
                        id="wni"
                        type="radio"
                        name="wni"
                        className="radio"
                     // checked={editedGender === 'Female'}
                     // onChange={() => setEditedGender('Female')}
                     />
                  </label>
               </div>
            </label>

            {/* Alamat */}
            <label htmlFor="alamat" className="flex flex-col gap-2">
               <span className="font-semibold">Alamat</span>
               <textarea id="alamat" className="textarea textarea-bordered textarea-sm w-full lg:h-52" ></textarea>
            </label>

            {/* NIK */}
            <label htmlFor="nik" className="flex flex-col gap-2">
               <h2 className="font-semibold">NIK</h2>
               <input
                  type="number"
                  name="nik"
                  id="nik"
                  className="border-2 border-slate-200 shadow-md rounded-xl py-2 px-4"
               />
            </label>

            {/* Nomor kk */}
            <label htmlFor="nk" className="flex flex-col gap-2">
               <h2 className="font-semibold">Nomor KK</h2>
               <input
                  type="number"
                  name="nk"
                  id="nk"
                  className="border-2 border-slate-200 shadow-md rounded-xl py-2 px-4"
               />
            </label>

            {/* Tujuan mengurus */}
            <div className="flex flex-col items-start gap-2">
               <h1 className="font-semibold">Tujuan Mengurus</h1>
               <div className="font-medium w-full">
                  {/* {isEditing ? ( */}
                  <select
                     name="tujuanMengurus"
                     // value={editedReligion}
                     // onChange={(e) => setEditedReligion(e.target.value)}
                     className="border-2 border-slate-300 rounded-lg px-2 text-blue-500 w-full  py-1"
                  >
                     <option value="KTP">KTP</option>
                     <option value="KK">KK</option>
                     <option value="Akte">Pengantar Akte Kelahiran / Kenal lahir</option>
                     <option value="kematian">Pengantar Surat Kematian</option>
                     <option value="nikah">Pengantar Nikah</option>
                     <option value="pindah">Pengantar Permohonan Pindah</option>
                     <option value="ttl">Surat Keterangan Domisili Tempat Tinggal</option>
                     <option value="jalan">Surat Keterangan Berpergian / Jalan</option>
                     <option value="usaha">Surat Keterangan Domisili Usaha</option>
                     <option value="skck">SKCK</option>
                     <option value="lain-lain">Lain-lain</option>
                  </select>
                  {/* ) : (
                              <h1>{selectedEmployee?.religion || '-'}</h1>
                           )} */}
               </div>
            </div>

            {/* Alamat yang dituju */}
            <div className="flex flex-col gap-2">
               <h2 className="font-semibold">Alamat Yang Dituju</h2>
               <div className="border-2 border-slate-200 shadow-md rounded-md p-4">

                  {/* jalan, no, rt */}
                  <div className="flex flex-row gap-2">
                     {/* jalan */}
                     <label htmlFor="jalan" className="flex flex-row">
                        <h2>Jalan</h2>
                        <input
                           type="text"
                           name="jalan"
                           id="jalan"
                           placeholder="................................................"
                           className="w-full"
                        />
                     </label>
                     {/* no n RT */}
                     <div className="flex flex-row">
                        {/* No */}
                        <label htmlFor="no" className="flex flex-row">
                           <h2>No</h2>
                           <input
                              type="text"
                              name="no"
                              id="no"
                              placeholder="......"
                              className="w-11"
                           />
                        </label>
                        {/* RT */}
                        <label htmlFor="rt" className="flex flex-row">
                           <h2>Rt</h2>
                           <input
                              type="text"
                              name="rt"
                              id="rt"
                              placeholder="......"
                              className="w-11"
                           />
                        </label>
                     </div>
                  </div>

                  {/* Kelurahan */}
                  <label htmlFor="kelurahan" className="flex flex-row">
                     <h2>Kelurahan</h2>
                     <input
                        type="text"
                        name="kelurahan"
                        id="kelurahan"
                        placeholder="..................................................."
                        className="w-full"
                     />
                  </label>

                  {/* Kecamatan */}
                  <label htmlFor="Kecamatan" className="flex flex-row">
                     <h2>Kecamatan</h2>
                     <input
                        type="text"
                        name="Kecamatan"
                        id="Kecamatan"
                        placeholder="................................................"
                        className="w-full"
                     />
                  </label>

                  {/* Kab/Kota */}
                  <label htmlFor="Kab/Kota" className="flex flex-row">
                     <h2>Kab/Kota</h2>
                     <input
                        type="text"
                        name="Kab/Kota"
                        id="Kab/Kota"
                        placeholder="......................................................"
                        className="w-full"
                     />
                  </label>

                  {/* Provinsi */}
                  <label htmlFor="Provinsi" className="flex flex-row">
                     <h2>Provinsi</h2>
                     <input
                        type="text"
                        name="Provinsi"
                        id="Provinsi"
                        placeholder="..........................................................."
                        className="w-full"
                     />
                  </label>

               </div>
            </div>

            {/* Jumlah pengikut */}
            <label htmlFor="jp" className="flex flex-col gap-2">
               <h2 className="font-semibold">Jumlah Pengikut : ....... org </h2>
               <input type="text" name="" id="" placeholder="Admin yang mengisi data ini" disabled className="border-2 border-slate-200 shadow-md rounded-xl py-2 px-4 cursor-not-allowed" />
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
      </div >
   )
}

export default EditPengajuanSurat

EditPengajuanSurat.propTypes = {
   handleMenuClick: PropTypes.func
}