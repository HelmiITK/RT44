import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import PropTypes from "prop-types";

import { editUser, getUserById } from "../../redux/actions/userActions";

const EditMasyarakat = ({ handleMenuClick, id }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [placeDateBday, setPlaceDateBday] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [blockHome, setBlockHome] = useState("");
  const [noHome, setNoHome] = useState("");
  const [nkk, setNkk] = useState("");
  const [nik, setNik] = useState("");
  const [member, setMember] = useState("");

  const { userbyId } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (userbyId) {
      setName(userbyId.name || "");
      setEmail(userbyId.Auth?.email || "");
      setGender(userbyId.gender || "");
      setPlaceDateBday(userbyId.placeDateBday || "");
      setPhoneNumber(userbyId.phoneNumber || "");
      setAddress(userbyId.address || "");
      setBlockHome(userbyId.blockHome || "");
      setNoHome(userbyId.noHome || "");
      setNkk(userbyId.nkk || "");
      setNik(userbyId.nik || "");
      setMember(userbyId.member || "");
    }
  }, [userbyId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editUser(
        id,
        name,
        email,
        gender,
        placeDateBday,
        member,
        phoneNumber,
        noHome,
        address,
        nik,
        nkk,
        blockHome
      ),
      handleMenuClick(3)
    );
  };

  console.log(userbyId);
  return (
    <div className="flex flex-col p-8 mb-8 border-2 rounded-lg shadow-lg border-slate-300">
      {/* button back to main dashboard Anggota  */}
      <Link
        onClick={() => handleMenuClick(3)}
        className="flex flex-row items-center w-1/6 gap-2 duration-100 hover:underline hover:scale-105"
      >
        <IoArrowBackOutline className="w-6 h-6" />
        <button className="font-medium">kembali</button>
      </Link>
      {/* heading */}
      <h1 className="text-3xl font-semibold text-center text-primary">
        Edit Data Masyarakat
      </h1>
      {/* Form data tambah umkm */}
      <form
        action="multipart/form-data"
        className="flex flex-col gap-6 mt-4"
        onSubmit={handleSubmit}
      >
        {/* nama */}
        <label htmlFor="namaAnggota" className="flex flex-col gap-2">
          <h2 className="text-lg font-medium">Nama</h2>
          <input
            type="text"
            id="namaAnggota"
            name="namaAnggota"
            className="border-[1px] border-black rounded-md py-2 px-4 shadow-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
              checked={gender === "Pria"}
              onChange={() => setGender("Pria")}
            />
            <label htmlFor="male" className="text-blue-500">
              Laki-laki
            </label>

            <input
              id="female"
              type="radio"
              name="gender"
              className="radio"
              checked={gender === "Wanita"}
              onChange={() => setGender("Wanita")}
            />
            <label htmlFor="female" className="text-blue-500">
              Perempuan
            </label>
          </div>
        </label>
        {/* placeDateBday */}
        <label htmlFor="kk" className="flex flex-col gap-2">
          <h2 className="text-lg font-medium">Tempat, Tanggal Lahir</h2>
          <input
            type="text"
            id="placeDateBday"
            name="placeDateBday"
            className="border-[1px] border-black rounded-md py-2 px-4 shadow-md"
            value={placeDateBday}
            onChange={(e) => setPlaceDateBday(e.target.value)}
          />
        </label>

        {/* email */}
        <label htmlFor="namaAnggota" className="flex flex-col gap-2">
          <h2 className="text-lg font-medium">Email</h2>
          <input
            type="text"
            id="email"
            name="email"
            className="border-[1px] border-black rounded-md py-2 px-4 shadow-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        {/* phoneNumber */}
        <label htmlFor="namaAnggota" className="flex flex-col gap-2">
          <h2 className="text-lg font-medium">No Handphone</h2>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            className="border-[1px] border-black rounded-md py-2 px-4 shadow-md"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        {/* alamat */}
        <label htmlFor="alamat" className="flex flex-col gap-2">
          <h2 className="text-lg font-medium">Alamat</h2>
          <input
            type="text"
            id="alamat"
            name="alamat"
            className="border-[1px] border-black rounded-md py-2 px-4 shadow-md"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        {/* BlokHome */}
        <label htmlFor="alamat" className="flex flex-col gap-2">
          <h2 className="text-lg font-medium">Blok</h2>
          <input
            type="text"
            id="blockHome"
            name="blockHome"
            className="border-[1px] border-black rounded-md py-2 px-4 shadow-md"
            value={blockHome}
            onChange={(e) => setBlockHome(e.target.value)}
          />
        </label>
        {/* noHome */}
        <label htmlFor="alamat" className="flex flex-col gap-2">
          <h2 className="text-lg font-medium">No Rumah</h2>
          <input
            type="text"
            id="noHome"
            name="noHome"
            className="border-[1px] border-black rounded-md py-2 px-4 shadow-md"
            value={noHome}
            onChange={(e) => setNoHome(e.target.value)}
          />
        </label>

        {/* no kk */}
        <label htmlFor="kk" className="flex flex-col gap-2">
          <h2 className="text-lg font-medium">No KK</h2>
          <input
            type="number"
            id="nkk"
            name="nkk"
            className="border-[1px] border-black rounded-md py-2 px-4 shadow-md"
            value={nkk}
            onChange={(e) => setNkk(e.target.value)}
          />
        </label>
        {/* no nik */}
        <label htmlFor="nik" className="flex flex-col gap-2">
          <h2 className="text-lg font-medium">No NIK</h2>
          <input
            type="number"
            id="nik"
            name="nik"
            className="border-[1px] border-black rounded-md py-2 px-4 shadow-md"
            value={nik}
            onChange={(e) => setNik(e.target.value)}
          />
        </label>
        {/* jumlah anak */}
        <label htmlFor="anak" className="flex flex-col gap-2">
          <h2 className="text-lg font-medium">Jumlah Anggota Keluarga</h2>
          <input
            type="number"
            id="member"
            name="member"
            className="border-[1px] border-black rounded-md py-2 px-4 shadow-md"
            value={member}
            onChange={(e) => setMember(e.target.value)}
          />
        </label>
        {/* button aksi */}
        <div className="flex items-center justify-center gap-8">
          {/* sumbit */}
          <button className="px-8 py-3 mt-4 text-lg font-semibold capitalize duration-300 border-none rounded-lg bg-primary hover:text-white hover:bg-green-500 hover:shadow-lg hover:drop-shadow-md">
            submit
          </button>
          {/* cancel */}
          <button className="px-8 py-3 mt-4 text-lg font-semibold capitalize duration-300 bg-red-500 border-none rounded-lg hover:text-white hover:bg-red-700 hover:shadow-lg hover:drop-shadow-md">
            cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditMasyarakat;

EditMasyarakat.propTypes = {
  handleMenuClick: PropTypes.func,
  id: PropTypes.number,
};
