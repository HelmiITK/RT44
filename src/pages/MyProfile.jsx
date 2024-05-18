import { FaHouseUser } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getMe } from "../redux/actions/authActions";

const MyProfile = () => {
  const dispatch = useDispatch();
  const [profile, setProfile] = useState({
    image: "",
    nik: "",
    name: "",
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

  const linkRef = useRef(null);
  // back to MainSection when on click text MovieList in Footer from homepage
  const goto = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />
      {/* mode tablet dan web */}
      <div className="relative hidden lg:block" ref={linkRef}>
        <img
          src="https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-screen"
        />
        <div className="container flex items-center justify-center mx-auto">
          {/* blur bg */}
          <div className="absolute inset-0 bg-gray-900 opacity-50 blur"></div>
          {/* card detail user */}
          <div className="absolute w-auto gap-5 bg-opacity-25 border-4 border-white shadow-2xl shadow-white bg-slate-950 rounded-2xl top-44">
            <div className="flex items-start justify-between">
              {/* button back to home */}
              <Link
                as={Link}
                to={"/"}
                className="z-10 flex items-center gap-2 pt-4 pl-4 duration-300 hover:scale-110 hover:underline hover:decoration-white"
              >
                <IoMdArrowRoundBack className="w-8 h-8 text-white" />
                <p className="font-medium text-white">Kembali</p>
              </Link>
              <h1 className="z-10 pt-10 mb-4 text-4xl font-extrabold text-white">
                Akun Saya
              </h1>
              <span></span>
            </div>
            <div className="z-10 flex items-center justify-between gap-20 p-12 text-white">
              <FaHouseUser className="w-52 h-52" />
              {/* <img src={profile.image} alt="profile" className="w-52 h-52" /> */}
              {/* data  */}
              <div className="flex flex-row gap-12">
                <div className="flex flex-col gap-3 text-lg font-light">
                  <h1>NIK</h1>
                  <h1>Nama</h1>
                  <h1>Tempat, tanggal lahir</h1>
                  <h1>No hp</h1>
                  <h1>Email</h1>
                  <h1>Alamat</h1>
                </div>
                <div className="flex flex-col gap-3 text-lg font-medium">
                  <p>{profile.nik}</p>
                  <p>{profile.name}</p>
                  <p>{profile.placeDateBday}</p>
                  <p>{profile.phoneNumber}</p>
                  <p>{profile.email}</p>
                  <p>{profile.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mode hp */}
      <div className="container pt-32 mx-auto mb-10 lg:hidden">
        <div className="px-6 pt-4 pb-6 mx-4 border-2 border-orange-500 shadow-2xl rounded-2xl shadow-orange-300 bg-gradient-to-b from-orange-300 to-orange-100">
          {/* button back to home */}
          <Link
            as={Link}
            to={"/"}
            className="flex items-center gap-2 underline"
          >
            <IoMdArrowRoundBack className="w-6 h-6" />
            <p>Kembali</p>
          </Link>
          <h1 className="mt-4 text-3xl font-semibold text-center">Akun Saya</h1>
          <div className="mt-5 text-center">
            <div className="flex flex-col gap-3">
              <div className="">
                <h1 className="text-sm font-light text-slate-600">NIK</h1>
                <p>{profile.nik}</p>
              </div>
              <div className="">
                <h1 className="text-sm font-light text-slate-600">Nama</h1>
                <p>{profile.name}</p>
              </div>
              <div className="">
                <h1 className="text-sm font-light text-slate-600">
                  Tenpat, tanggal lahir
                </h1>
                <p>{profile.placeDateBday}</p>
              </div>
              <div className="">
                <h1 className="text-sm font-light text-slate-600">No hp</h1>
                <p>{profile.phoneNumber}</p>
              </div>
              <div className="">
                <h1 className="text-sm font-light text-slate-600">Email</h1>
                <p>{profile.email}</p>
              </div>
              <div className="">
                <h1 className="text-sm font-light text-slate-600">Alamat</h1>
                <p>{profile.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer linkRef={linkRef} goto={goto} />
    </>
  );
};

export default MyProfile;
