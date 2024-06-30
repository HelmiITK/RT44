import LogoRt from "../assets/GambarLogoRT44.png";
import GambarLogin from "../assets/gambarLoginRt44.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

import { MdOutlineKeyOff } from "react-icons/md";
import { login, cekEmail } from "../redux/actions/authActions";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // const allowedEmails = JSON.parse(localStorage.getItem('allowedEmails')) || [];

  const handleLogin = (event) => {
    event.preventDefault();

    if (!email) {
      setErrorEmail("Silahkan isi email anda");
      return;
    }
    if (!password) {
      setErrorPassword("Silahkan isi password anda!");
      return;
    }

    // // fungsi redux jika sudah ada API
    dispatch(login(email, password, navigate));
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    const response = await dispatch(cekEmail(email));
    if (response == "Success") {
      localStorage.setItem("validatedEmail", email);
      navigate("/lupa_password");
    } else {
      setErrorEmail("Email tidak valid atau tidak terdaftar!");
    }
  };

  return (
    <div className="container mx-auto">
      {/* heading mode mobile*/}
      <div className="flex items-center justify-center gap-4 px-4 py-4 bg-primary lg:hidden">
        <img src={LogoRt} alt="Logo RT" className="w-40" />
        <q className="text-2xl italic font-semibold text-white">
          Kami ada untuk memberikan pelayanan terbaik bagi masyarakat
        </q>
      </div>

      {/* button back to home mode mobile*/}
      <Link
        as={Link}
        to={"/"}
        className="flex items-center gap-2 mx-6 mt-4 duration-300 cursor-pointer hover:scale-105 hover:text-primary md:w-1/6 md:mx-12 hover:underline lg:hidden"
      >
        <IoIosArrowRoundBack className="w-6 h-6 md:w-8 md:h-8" />
        <p className="md:text-lg">Kembali</p>
      </Link>

      {/* card login mode mobile*/}
      <div className="flex flex-col gap-6 p-6 mx-4 mt-6 border-2 shadow-md border-slate-100 rounded-xl lg:hidden">
        <img
          src={GambarLogin}
          alt="Gambar Login"
          className="shadow-sm rounded-2xl shadow-primary"
        />
        <form
          action="submit"
          onSubmit={handleLogin}
          className="flex flex-col gap-5"
        >
          {/* username */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <label htmlFor="username">
                <FaUser className="w-6 h-6 text-primary" />
              </label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="w-full px-4 py-2 text-sm border-2 shadow-sm border-slate-100 rounded-xl placeholder:font-light placeholder:text-sm"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setErrorEmail("");
                }}
              />
            </div>
            {errorEmail && (
              <p className="ml-12 text-xs text-red-500">{errorEmail}</p>
            )}
          </div>
          {/* password */}
          <div className="flex flex-col gap-2">
            <div className="relative flex items-center gap-4">
              <label htmlFor="password">
                <RiLockPasswordFill className="w-6 h-6 text-primary" />
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-2 text-sm border-2 shadow-sm border-slate-100 rounded-xl placeholder:font-light placeholder:text-sm"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setErrorPassword("");
                }}
              />
              <button
                className="absolute right-4"
                type="button"
                aria-label="toggle password visibility"
                onClick={togglePassword}
              >
                {showPassword ? (
                  <IoEye className="w-5 h-5 text-slate-400 lg:w-5 lg:h-5" />
                ) : (
                  <IoEyeOff className="w-5 h-5 text-slate-400 lg:w-5 lg:h-5" />
                )}
              </button>
            </div>
            {errorPassword && (
              <p className="ml-12 text-xs text-red-500">{errorPassword}</p>
            )}
          </div>
          {/* lupa password  */}
          <button
            onClick={handleForgotPassword}
            className="flex items-center gap-4 text-sm font-light text-red-500 "
          >
            <MdOutlineKeyOff className="w-6 h-6" />
            <h1>Lupa kata sandi?</h1>
          </button>

          {/* button submit */}
          <button className="py-2 text-lg font-semibold tracking-widest text-white border-none bg-primary rounded-2xl">
            Login
          </button>
        </form>
      </div>

      {/* login mode web */}
      <div className="items-center hidden gap-10 lg:flex">
        {/* heading */}
        <div className="flex items-center justify-center w-auto h-screen gap-4 px-10 bg-gradient-to-b from-orange-400 via-primary to-orange-100">
          <img src={LogoRt} alt="Logo RT" className="w-72 h-72" />
          <q className="mr-8 text-3xl italic font-bold leading-10 tracking-wider text-white capitalize">
            Kami ada untuk memberikan pelayanan terbaik bagi masyarakat
          </q>
        </div>

        <div className="flex flex-col w-full gap-4 mr-10">
          {/* button back to home */}
          <Link
            as={Link}
            to={"/"}
            className="flex items-center w-32 gap-2 duration-300 hover:text-primary hover:scale-105"
          >
            <IoIosArrowRoundBack className="w-6 h-6 md:w-8 md:h-8" />
            <p className="md:text-lg">Kembali</p>
          </Link>

          {/* card login */}
          <div className="flex flex-col justify-center gap-6 px-10 py-6 border-2 shadow-2xl border-slate-100 rounded-2xl">
            <div className="flex flex-col items-center justify-center gap-5">
              <h1 className="text-3xl font-bold tracking-wide text-center">
                Login
              </h1>
              <img
                src={GambarLogin}
                alt="Gambar Login"
                className="object-cover object-center w-2/3 rounded-3xl h-72"
              />
            </div>
            <form
              action="submit"
              onSubmit={handleLogin}
              className="flex flex-col gap-5"
            >
              {/* username */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <label htmlFor="username">
                    <FaUser className="w-7 h-7 text-primary" />
                  </label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    className="w-full px-4 py-3 text-base border-2 shadow-sm border-slate-100 rounded-xl placeholder:font-light placeholder:text-base"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setErrorEmail("");
                    }}
                  />
                </div>
                {errorEmail && (
                  <p className="ml-12 text-sm text-red-500">{errorEmail}</p>
                )}
              </div>
              {/* password */}
              <div className="flex flex-col gap-2">
                <div className="relative flex items-center gap-4">
                  <label htmlFor="password">
                    <RiLockPasswordFill className="w-7 h-7 text-primary" />
                  </label>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full px-4 py-3 text-base border-2 shadow-sm border-slate-100 rounded-xl placeholder:font-light placeholder:text-base"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      setErrorPassword("");
                    }}
                  />
                  <button
                    className="absolute right-4"
                    type="button"
                    aria-label="toggle password visibility"
                    onClick={togglePassword}
                  >
                    {showPassword ? (
                      <IoEye className="w-6 h-6 text-slate-400 lg:w-5 lg:h-5" />
                    ) : (
                      <IoEyeOff className="w-6 h-6 text-slate-400 lg:w-5 lg:h-5" />
                    )}
                  </button>
                </div>
                {errorPassword && (
                  <p className="ml-12 text-sm text-red-500">{errorPassword}</p>
                )}
              </div>
              {/* lupa password */}
              <button
                onClick={handleForgotPassword}
                className="text-red-500 font-light text-sm flex items-center gap-4 hover:scale-105 hover:underline hover:text-red-600 duration-300 w-[30%]"
              >
                <MdOutlineKeyOff className="w-6 h-6" />
                <h1>Lupa kata sandi?</h1>
              </button>
              {/* button submit */}
              <button className="py-3 text-xl font-semibold tracking-widest text-white duration-300 border-none bg-primary rounded-2xl hover:bg-orange-400">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{ fontSize: "13px" }} // Atur ukuran teks di sini
      />
    </div>
  );
};

export default LoginPage;
