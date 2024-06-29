import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import FormatFoto from "../../assets/formatfoto.png";
import { IoArrowBackOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

import { postUmkm } from "../../redux/actions/umkmActions";

const TambahUmkmComponent = ({ handleMenuClick }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [description, setDescription] = useState("");
  const [noUmkm, setNoUmkm] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImageUrl(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Loading...",
      text: "Please wait while the data is being added",
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
    dispatch(postUmkm(name, owner, description, noUmkm, imageUrl)).then(() => {
      Swal.close();
      Swal.fire("Success", "Data UMKM berhasil ditambahkan", "success").then(
        () => {
          handleMenuClick(1);
        }
      );
    });
  };

  const handleCancel = () => {
    Swal.fire({
      title: 'Apakah kamu yakin?',
      text: "Ini akan menghapus data yang sudah kamu isi",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ya, hapus!',
      cancelButtonText: 'Batal',
    }).then((result) => {
      if (result.isConfirmed) {
        setName("");
        setOwner("");
        setDescription("");
        setNoUmkm("");
        setImageUrl("");
      }
    });
  };

  return (
    <>
      {/* Create UMKM */}
      <div className="flex flex-col p-8 mb-8 border-2 rounded-lg shadow-lg border-slate-300">
        {/* button back to main dashboard UMKM  */}
        <Link
          onClick={() => handleMenuClick(1)}
          className="flex flex-row items-center w-1/6 gap-2 duration-100 hover:underline hover:scale-105"
        >
          <IoArrowBackOutline className="w-6 h-6" />
          <button className="font-medium">kembali</button>
        </Link>
        {/*heading */}
        <h1 className="text-3xl font-semibold text-center text-primary">
          Tambah UMKM
        </h1>
        {/* Form data tambah umkm */}
        <form
          action=""
          className="flex flex-col gap-6 mt-4"
          onSubmit={handleSubmit}
        >
          {/* nama umkm */}
          <label htmlFor="namaUmkm" className="flex flex-col gap-2">
            <h2 className="text-lg font-medium">Nama UMKM</h2>
            <input
              type="text"
              id="namaUmkm"
              name="namaUmkm"
              className="border-[1px] border-black rounded-md py-2 px-4 shadow-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          {/* nama umkm */}
          <label htmlFor="namaPemilik" className="flex flex-col gap-2">
            <h2 className="text-lg font-medium">Nama Pemilik</h2> 
            <input
              type="text"
              id="namaPemilik"
              name="namaPemilik"
              className="border-[1px] border-black rounded-md py-2 px-4 shadow-md"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              required
            />
          </label>
          {/* nama umkm */}
          <label htmlFor="namaPemilik" className="flex flex-col gap-2">
            <h2 className="text-lg font-medium">No Pemilik</h2>
            <input
              type="number"
              id="namaPemilik"
              name="namaPemilik"
              className="border-[1px] border-black rounded-md py-2 px-4 shadow-md"
              value={noUmkm}
              onChange={(e) => setNoUmkm(e.target.value)}
              required
            />
          </label>
          {/* deskripisi umkm */}
          <label htmlFor="donasi" className="flex flex-col gap-2">
            <span className="font-semibold capitalize">deskripsi UMKM</span>
            <textarea
              id="donasi"
              className="textarea textarea-bordered textarea-sm w-full border-[1px] border-black py-2 px-4 shadow-lg"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </label>
          {/* upload gambar */}
          <div className="flex flex-col gap-4 border-[1px] border-black p-8 bg-white rounded-lg shadow-md w-1/2">
            <h1 className="mb-5 text-lg font-medium text-center capitalize">
              upload gambar UMKM
            </h1>
            <div className="flex flex-col items-center justify-center w-full gap-4 py-6 bg-gray-200">
              <img src={FormatFoto} alt="" className="w-32" />
              <h2 className="font-medium text-gray-400">
                Format jpg. png. jpeg.
              </h2>
              <input
                type="file"
                name=""
                id=""
                className="w-1/2"
                onChange={handleFileChange}
                required
              />
            </div>
          </div>
          {/* button aksi */}
          <div className="flex items-center justify-center gap-8">
            {/* sumbit */}
            <button className="px-8 py-3 mt-4 text-lg font-semibold capitalize duration-300 border-none rounded-lg bg-primary hover:text-white hover:bg-green-500 hover:shadow-lg hover:drop-shadow-md">
              submit
            </button>
            {/* cancel */}
            <button 
              type="button"
              onClick={handleCancel}
              className="px-8 py-3 mt-4 text-lg font-semibold capitalize duration-300 bg-red-500 border-none rounded-lg hover:text-white hover:bg-red-700 hover:shadow-lg hover:drop-shadow-md">
              cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TambahUmkmComponent;

TambahUmkmComponent.propTypes = {
  handleMenuClick: PropTypes.func,
};
