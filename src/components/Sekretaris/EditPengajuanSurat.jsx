import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import PropTypes from "prop-types";

import { getLetterById2, updadte } from "../../redux/actions/latterActions";

const EditPengajuanSurat = ({ handleMenuClick, id }) => {
  const dispatch = useDispatch();

  const [latterType, setLatterType] = useState("");
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [placeDateBday, setPlaceDateBday] = useState("");
  const [status, setStatus] = useState("");
  const [religion, setReligion] = useState("");
  const [work, setWork] = useState("");
  const [blood, setBlood] = useState("");
  const [citizenship, setCitizenship] = useState("");
  const [address, setAddress] = useState("");
  const [nik, setNik] = useState("");
  const [nkk, setNkk] = useState("");
  const [perpous, setPerpous] = useState("");
  // const [destinationAddress, setDestinationAddress] = useState("");
  // const [numberFollower, setNumberFollower] = useState("");

  const { letterById2 } = useSelector((state) => state.latter);

  useEffect(() => {
    dispatch(getLetterById2(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (letterById2) {
      setLatterType(letterById2.latterType || "");
      setFullName(letterById2.fullName || "");
      setGender(letterById2.gender || "");
      setPlaceDateBday(letterById2.placeDateBday || "");
      setStatus(letterById2.status || "");
      setReligion(letterById2.religion || "");
      setWork(letterById2.work || "");
      setBlood(letterById2.blood || "");
      setCitizenship(letterById2.citizenship || "");
      setAddress(letterById2.address || "");
      setNik(letterById2.nik || "");
      setNkk(letterById2.nkk || "");
      setPerpous(letterById2.perpous || "");
      // setDestinationAddress(letterById2.destinationAddress || "");
      // setNumberFollower(letterById2.numberFollower || "");
    }
  }, [letterById2]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updadte(
        id,
        latterType,
        fullName,
        gender,
        placeDateBday,
        status,
        religion,
        work,
        blood,
        citizenship,
        address,
        nik,
        nkk,
        perpous,
        // destinationAddress,
        // numberFollower
      ),
      handleMenuClick(1)
    );
  };

  return (
    <div className="p-8 mx-4 mb-8 border-2 shadow-lg border-slate-200 rounded-2xl lg:bg-white lg:w-full">
      <Link
        onClick={() => handleMenuClick(1)}
        className="flex flex-row items-center w-1/6 gap-2 duration-100 hover:underline hover:scale-105"
      >
        <IoArrowBackOutline className="w-6 h-6" />
        <button className="font-medium">kembali</button>
      </Link>
      <h1 className="text-2xl font-semibold text-center lg:font-bold lg:text-3xl">
        Edit Surat Pengantar
      </h1>
      {/* form surat */}
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 mt-4"
      >
        {/* nama */}
        <label htmlFor="nama" className="flex flex-col gap-2">
          <h2 className="font-semibold">Nama Lengkap</h2>
          <input
            type="text"
            name="nama"
            id="nama"
            className="px-4 py-2 border-2 shadow-md border-slate-200 rounded-xl"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
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

        {/* Tempat tgl lahir */}
        <label htmlFor="ttl" className="flex flex-col gap-2">
          <h2 className="font-semibold">Tempat, tanggal lahir</h2>
          <input
            type="text"
            name="ttl"
            id="ttl"
            className="px-4 py-2 border-2 shadow-md border-slate-200 rounded-xl"
            value={placeDateBday}
            onChange={(e) => setPlaceDateBday(e.target.value)}
          />
        </label>

        {/* Status perkawinan */}
        <label htmlFor="nik" className="flex flex-col gap-2">
          <h2 className="font-semibold">Status Perkawinan</h2>
          <div className="flex flex-col items-start gap-3">
            <label
              htmlFor="bk"
              className="flex flex-row-reverse items-center gap-2 text-blue-500"
            >
              <h2>Belum Kawin</h2>
              <input
                id="bk"
                type="radio"
                name="sk"
                className="radio"
                checked={status === "Belum Kawin"}
                onChange={() => setStatus("Belum Kawin")}
              />
            </label>

            <label
              htmlFor="kawin"
              className="flex flex-row-reverse items-center gap-2 text-blue-500"
            >
              <h2>Kawin</h2>
              <input
                id="kawin"
                type="radio"
                name="sk"
                className="radio"
                checked={status === "Kawin"}
                onChange={() => setStatus("Kawin")}
              />
            </label>

            <label
              htmlFor="jd"
              className="flex flex-row-reverse items-center gap-2 text-blue-500"
            >
              <h2>Janda/Duda</h2>
              <input
                id="jd"
                type="radio"
                name="jd"
                className="radio"
                checked={status === "Janda/Duda"}
                onChange={() => setStatus("Janda/Duda")}
              />
            </label>
          </div>
        </label>

        {/* Agama */}
        <div className="flex flex-col items-start gap-2">
          <h1 className="font-semibold">Agama</h1>
          <div className="w-full font-medium">
            {/* {isEditing ? ( */}
            <select
              name="agama"
              value={religion}
              onChange={(e) => setReligion(e.target.value)}
              className="w-full px-2 py-1 text-blue-500 border-2 rounded-lg border-slate-300"
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
            className="px-4 py-2 border-2 shadow-md border-slate-200 rounded-xl"
            value={work}
            onChange={(e) => setWork(e.target.value)}
          />
        </label>

        {/* Golongan darah */}
        <label htmlFor="nik" className="flex flex-col gap-2">
          <h2 className="font-semibold">Golongan Darah</h2>
          <div className="flex flex-row items-start gap-6">
            <label
              htmlFor="A"
              className="flex flex-row-reverse items-center gap-2 text-blue-500"
            >
              <h2>A</h2>
              <input
                id="A"
                type="radio"
                name="A"
                className="radio"
                checked={blood === "A"}
                onChange={() => setBlood("A")}
              />
            </label>

            <label
              htmlFor="B"
              className="flex flex-row-reverse items-center gap-2 text-blue-500"
            >
              <h2>B</h2>
              <input
                id="B"
                type="radio"
                name="B"
                className="radio"
                checked={blood === "B"}
                onChange={() => setBlood("B")}
              />
            </label>

            <label
              htmlFor="AB"
              className="flex flex-row-reverse items-center gap-2 text-blue-500"
            >
              <h2>AB</h2>
              <input
                id="AB"
                type="radio"
                name="AB"
                className="radio"
                checked={blood === "AB"}
                onChange={() => setBlood("AB")}
              />
            </label>

            <label
              htmlFor="O"
              className="flex flex-row-reverse items-center gap-2 text-blue-500"
            >
              <h2>O</h2>
              <input
                id="O"
                type="radio"
                name="O"
                className="radio"
                checked={blood === "O"}
                onChange={() => setBlood("O")}
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
              className="flex flex-row-reverse items-center gap-2 text-blue-500"
            >
              <h2>WNA</h2>
              <input
                id="wna"
                type="radio"
                name="wna"
                className="radio"
                checked={citizenship === "WNA"}
                onChange={() => setCitizenship("WNA")}
              />
            </label>

            <label
              htmlFor="wni"
              className="flex flex-row-reverse items-center gap-2 text-blue-500"
            >
              <h2>WNI</h2>
              <input
                id="wni"
                type="radio"
                name="wni"
                className="radio"
                checked={citizenship === "WNI"}
                onChange={() => setCitizenship("WNI")}
              />
            </label>
          </div>
        </label>

        {/* Alamat */}
        <label htmlFor="alamat" className="flex flex-col gap-2">
          <span className="font-semibold">Alamat</span>
          <textarea
            id="alamat"
            className="w-full textarea textarea-bordered textarea-sm lg:h-52"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </label>

        {/* NIK */}
        <label htmlFor="nik" className="flex flex-col gap-2">
          <h2 className="font-semibold">NIK</h2>
          <input
            type="number"
            name="nik"
            id="nik"
            className="px-4 py-2 border-2 shadow-md border-slate-200 rounded-xl"
            value={nik}
            onChange={(e) => setNik(e.target.value)}
          />
        </label>

        {/* Nomor kk */}
        <label htmlFor="nk" className="flex flex-col gap-2">
          <h2 className="font-semibold">Nomor KK</h2>
          <input
            type="number"
            name="nk"
            id="nk"
            className="px-4 py-2 border-2 shadow-md border-slate-200 rounded-xl"
            value={nkk}
            onChange={(e) => setNkk(e.target.value)}
          />
        </label>

        {/* Tujuan mengurus */}
        <div className="flex flex-col items-start gap-2">
          <h1 className="font-semibold">Tujuan Mengurus</h1>
          <div className="w-full font-medium">
            {/* {isEditing ? ( */}
            <select
              name="tujuanMengurus"
              value={perpous}
              onChange={(e) => setPerpous(e.target.value)}
              className="w-full px-2 py-1 text-blue-500 border-2 rounded-lg border-slate-300"
            >
              <option value="KTP">KTP</option>
              <option value="KK">KK</option>
              <option value="Akte">
                Pengantar Akte Kelahiran / Kenal lahir
              </option>
              <option value="kematian">Pengantar Surat Kematian</option>
              <option value="nikah">Pengantar Nikah</option>
              <option value="pindah">Pengantar Permohonan Pindah</option>
              <option value="ttl">
                Surat Keterangan Domisili Tempat Tinggal
              </option>
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
        <label htmlFor="alamat" className="flex flex-col gap-2">
          <span className="font-semibold">Alamat yang dituju</span>
          <textarea
            className="w-full textarea textarea-bordered textarea-sm lg:h-52"
            disabled
            placeholder="Data ini diisi hanya pada hard copy"
          ></textarea>
        </label>

        {/* Jumlah pengikut */}
        <label htmlFor="jp" className="flex flex-col gap-2">
          <h2 className="font-semibold">Jumlah Pengikut : ....... org </h2>
          <input
            className="px-4 py-2 border-2 shadow-md cursor-not-allowed border-slate-200 rounded-xl"
            disabled
            placeholder="Data ini diisi hanya pada hard copy"
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

export default EditPengajuanSurat;

EditPengajuanSurat.propTypes = {
  handleMenuClick: PropTypes.func,
  id: PropTypes.number,
};
