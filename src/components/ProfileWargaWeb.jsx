import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMe } from "../redux/actions/authActions";
const ProfileWargaWeb = () => {
  const dispatch = useDispatch();
  const [profile, setProfile] = useState({
    image: "",
    nik: "",
    name: "",
    gender: "",
    email: "",
    phoneNumber: "",
    placeDateBday: "",
    address: "",
  });
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      setProfile({
        name: user.name,
        gender: user.gender,
        email: user.email,
        phoneNumber: user.phoneNumber,
        placeDateBday: user.placeDateBday,
        address: user.address,
        image: user.image,
        nik: user.nik,
      });
    }
  }, [user]);

  useEffect(() => {
    dispatch(getMe(null));
  }, [dispatch]);

  return (
    <div className="flex flex-col shadow-xl card card-side bg-base-100 lg:flex lg:flex-row">
      <figure>
        <img
          src={profile.image}
          alt="Movie"
          className="w-1/2 ml-10 mr-2 lg:w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="mb-4 text-2xl capitalize card-title">Detail akun</h2>
        {/* data */}
        <div className="flex flex-col gap-2">
          {/* NIK */}
          <div className="flex w-full gap-4">
            <h1 className="w-1/4 text-lg font-light uppercase">nik</h1>
            <div>:</div>
            <h2 className="text-lg font-medium">{profile.nik}</h2>
          </div>
          {/* nama */}
          <div className="flex w-full gap-4">
            <h1 className="w-1/4 text-lg font-light capitalize">nama</h1>
            <div>:</div>
            <h2 className="text-lg font-medium capitalize">{profile.name}</h2>
          </div>
          {/* jenis kelamin */}
          <div className="flex w-full gap-4">
            <h1 className="w-1/4 text-lg font-light capitalize">
              jenis kelamin
            </h1>
            <div>:</div>
            <h2 className="text-lg font-medium capitalize">{profile.gender}</h2>
          </div>
          {/* tempat tgl lahir */}
          <div className="flex w-full gap-4">
            <h1 className="w-1/4 text-lg font-light capitalize">
              tempat, tanggal lahir
            </h1>
            <div>:</div>
            <h2 className="text-lg font-medium capitalize">
              {profile.placeDateBday}
            </h2>
          </div>
          {/* no hp */}
          <div className="flex w-full gap-4">
            <h1 className="w-1/4 text-lg font-light capitalize">
              nomor telepon
            </h1>
            <div>:</div>
            <h2 className="text-lg font-medium capitalize">
              {profile.phoneNumber}
            </h2>
          </div>
          {/* email */}
          <div className="flex w-full gap-4">
            <h1 className="w-1/4 text-lg font-light capitalize">email</h1>
            <div>:</div>
            <h2 className="text-lg font-medium">{profile.email}</h2>
          </div>
          {/* alamat */}
          <div className="flex w-full gap-4">
            <h1 className="w-1/4 text-lg font-light capitalize">alamat</h1>
            <div>:</div>
            <h2 className="text-lg font-medium capitalize">
              {profile.address}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileWargaWeb;
