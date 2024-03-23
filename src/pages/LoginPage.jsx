import LogoRt from "../assets/GambarLogoRT44.png"
import GambarLogin from "../assets/gambarLoginRt44.png"
import { Link } from "react-router-dom"
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useState } from "react";

const LoginPage = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [errorUsername, setErrorUsername] = useState("");
   const [errorPassword, setErrorPassword] = useState("");
   const [showPassword, setShowPassword] = useState(false);

   const handleLogin = (event) => {
      event.preventDefault();

      if (!username) {
         setErrorUsername("Silahkan isi nama anda");
         return;
      }
      if (!password) {
         setErrorPassword("Silahkan isi password anda!");
         return;
      }

      // // fungsi redux jika sudah ada API
      // dispatch(login(email, password, navigate));
   }

   const togglePassword = () => {
      setShowPassword(!showPassword);
   }

   return (
      <div className="container mx-auto">
         {/* heading */}
         <div className="px-4 flex justify-center items-center gap-4 bg-primary py-4 ">
            <img
               src={LogoRt}
               alt="Logo RT"
               className="w-40"
            />
            <q className="italic text-2xl font-semibold text-white">
               Kami ada untuk memberikan pelayanan terbaik bagi masyarakat
            </q>

         </div>

         {/* button back to home */}
         <Link
            as={Link}
            to={"/"}
            className="mx-6 mt-4 cursor-pointer flex gap-2 items-center hover:scale-105 duration-300 hover:text-primary md:w-1/6 md:mx-12 hover:underline"
         >
            <IoIosArrowRoundBack className="w-6 h-6 md:w-8 md:h-8" />
            <p className="md:text-lg">
               Kembali
            </p>
         </Link>

         {/* card login */}
         <div className="mx-4 border-2 border-slate-100 p-6 mt-6 rounded-xl shadow-md flex flex-col gap-6">
            <img
               src={GambarLogin}
               alt="Gambar Login"
               className="rounded-2xl shadow-sm shadow-primary"
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
                        className="border-2 border-slate-100 shadow-sm py-2 px-4 rounded-xl w-full placeholder:font-light placeholder:text-sm text-sm"
                        value={username}
                        onChange={(event) => {
                           setUsername(event.target.value);
                           setErrorUsername("");
                        }}
                     />
                  </div>
                  {errorUsername && <p className="text-xs text-red-500 ml-12">{errorUsername}</p>}
               </div>
               {/* password */}
               <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-4 relative">
                     <label htmlFor="password">
                        <RiLockPasswordFill className="w-6 h-6 text-primary" />
                     </label>
                     <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="border-2 border-slate-100 shadow-sm py-2 px-4 rounded-xl w-full placeholder:font-light placeholder:text-sm text-sm"
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
                           < IoEye className="w-5 h-5 text-slate-400 lg:w-5 lg:h-5" />
                        ) : (
                           <IoEyeOff className="w-5 h-5 text-slate-400 lg:w-5 lg:h-5" />
                        )}
                     </button>
                  </div>
                  {errorPassword && <p className="text-xs text-red-500 ml-12">{errorPassword}</p>}
               </div>
               {/* button submit */}
               <button className="border-none bg-primary rounded-2xl py-2 text-lg font-semibold text-white tracking-widest">
                  Login
               </button>
            </form>
         </div>
      </div>
   )
}

export default LoginPage