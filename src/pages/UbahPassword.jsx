import { Link, useNavigate, useParams } from "react-router-dom"
import { IoMdArrowRoundBack } from "react-icons/io";
import GambarPerbaruiPass from "../assets/perbaruiPass.jpg"
import { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";

import { updatePassword } from "../redux/actions/authActions";

const UbahPassword = () => {
   const dispatch = useDispatch();
   const { id } = useParams();
   const [error, setError] = useState("");
   const navigate = useNavigate();

   const [passwordLama, setPasswordLama] = useState("");
   const [passwordBaru, setPasswordBaru] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");

   const [showPasswordLama, setShowPasswordLama] = useState(false);
   const [showPasswordBaru, setShowPasswordBaru] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);


   const handleChangePasswordLama = (e) => {
      setPasswordLama(e.target.value);
   };
   const handleChangePasswordBaru = (e) => {
      setPasswordBaru(e.target.value);
   };
   const handleChangeConfirmPassword = (e) => {
      setConfirmPassword(e.target.value);
   };

   const togglePasswordLamaVisibility = () => {
      setShowPasswordLama(!showPasswordLama);
   };
   const togglePasswordBaruVisibility = () => {
      setShowPasswordBaru(!showPasswordBaru);
   };
   const toggleConfirmPasswordVisibility = () => {
      setShowConfirmPassword(!showConfirmPassword);
   };

   const handleUpdatePassword = (e) => {
      e.preventDefault();
      if (passwordLama === "") {
         setError("Masukkan kata sandi lama");
         return;
      } else if (passwordBaru.length < 8) {
         setError("kata sandi minimal 8 karakter.");
         return;
      } else if (passwordBaru !== confirmPassword) {
         setError("kata sandi tidak sama dengan sandi baru");
         return;
      } else {
         setError("");
      }
      const success = dispatch(updatePassword(passwordLama, passwordBaru, confirmPassword, id, navigate));
      if (success) {
         setPasswordLama("");
         setPasswordBaru("");
         setConfirmPassword("");
      }
   }

   return (
      <div className="container mx-auto flex flex-col gap-2 justify-center items-center relative pt-10">
         <img src={GambarPerbaruiPass} alt="" className="absolute -z-10 top-0" />
         {/* button back to profile */}
         <Link
            as={Link}
            to={'/myprofile'}
            className="capitalize hover:underline hover:scale-105 duration-300 flex gap-2 items-center   "
         >
            <IoMdArrowRoundBack />
            <h1>kembali ke profile</h1>
         </Link>
         <div className="rounded-lg p-8 flex flex-col gap-4 justify-center items-center w-[40%] mt-2 shadow-xl drop-shadow-xl bg-white bg-opacity-45">
            <h1 className="capitalize text-4xl font-semibold">ubah password</h1>
            <form onSubmit={handleUpdatePassword} className="flex flex-col gap-5">
               <label htmlFor="lama" className="flex flex-row gap-6 items-center">
                  <h1 className="capitalize font-medium w-full">kata sandi lama</h1>
                  <div className="relative">
                     <input
                        type={showPasswordLama ? "text" : "password"}
                        name="lama"
                        id="lama"
                        value={passwordLama}
                        onChange={handleChangePasswordLama}
                        className="bg-white bg-opacity-70 py-2 px-4 rounded-lg "
                     />
                     <span
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        onClick={togglePasswordLamaVisibility}
                     >
                        {showPasswordLama ? <FaRegEyeSlash /> : <FaRegEye />}
                     </span>
                  </div>
               </label>
               <label htmlFor="baru" className="flex flex-row gap-6 items-center">
                  <h1 className="capitalize font-medium w-full">kata sandi baru</h1>
                  <div className="relative">
                     <input
                        type={showPasswordBaru ? "text" : "password"}
                        name="baru"
                        id="baru"
                        value={passwordBaru}
                        onChange={handleChangePasswordBaru}
                        className="bg-white bg-opacity-70 py-2 px-4 rounded-lg"
                     />
                     <span
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        onClick={togglePasswordBaruVisibility}
                     >
                        {showPasswordBaru ? <FaRegEyeSlash /> : <FaRegEye />}
                     </span>
                  </div>
               </label>
               <label htmlFor="konfirmasi" className="flex flex-row gap-6 items-center">
                  <h1 className="capitalize font-medium w-full">konfirmasi kata sandi baru</h1>
                  <div className="relative">
                     <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="konfirmasi"
                        id="konfirmasi"
                        value={confirmPassword}
                        onChange={handleChangeConfirmPassword}
                        className="bg-white bg-opacity-70 py-2 px-4 rounded-lg"
                     />
                     <span
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        onClick={toggleConfirmPasswordVisibility}
                     >
                        {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                     </span>
                  </div>
               </label>
               {/* error message */}
               {error && <p className="text-red-500">{error}</p>}
               {/* update password */}
               <button
                  type="submit"
                  className="capitalize rounded-lg border-none bg-white py-2 mt-4 font-medium text-green-700 hover:scale-105 duration-300 hover:drop-shadow-xl"
               >
                  perbarui kata sandi
               </button>
            </form>
         </div>
         <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            style={{ fontSize: "15px" }}
         />
      </div>
   )
}

export default UbahPassword
