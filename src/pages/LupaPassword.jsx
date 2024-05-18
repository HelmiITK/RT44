import { Link, useNavigate } from "react-router-dom"
import { IoMdArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { resetPassword } from "../redux/actions/authActions";
import { ToastContainer } from "react-toastify";

const LupaPassword = () => {
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [error, setError] = useState("");
   const [email, setEmail] = useState("");
   const [showPassword, setShowPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   useEffect(() => {
      const validatedEmail = localStorage.getItem('validatedEmail');
      if (validatedEmail) {
         setEmail(validatedEmail);
      } else {
         navigate("/login");
      }
   }, [navigate]);

   const handleChangePassword = (e) => {
      setPassword(e.target.value);
   };

   const handleChangeConfirmPassword = (e) => {
      setConfirmPassword(e.target.value);
   };

   const handleResetPassword = (e) => {
      e.preventDefault();
      if (password.length < 8) {
         setError("Kata sandi harus memiliki minimal 8 karakter.");
      } else if (password !== confirmPassword) {
         setError("Kedua kata sandi tidak sama.");
      } else {
         setError("");
      }
      dispatch(resetPassword(password, confirmPassword, navigate, email));
   };

   const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
   };

   const toggleConfirmPasswordVisibility = () => {
      setShowConfirmPassword(!showConfirmPassword);
   };

   return (
      <div className="container mx-auto">
         {/* button back to login */}
         <Link
            as={Link}
            to={'/login'}
            className="flex items-center gap-2 pt-4 ml-4"
         >
            <IoMdArrowBack />
            <h2 className="capitalize">kembali ke login</h2>
         </Link>
         <div className="border border-primary mx-4 rounded-md mt-4 p-4 flex flex-col gap-2 mb-6">
            <div className="flex flex-col items-center">
               <h1 className="capitalize text-2xl font-semibold">perbarui kata sandi</h1>
               <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/forgot-password-2814113-2368063.png"
                  alt="gambar lupa kata sandi"
                  className="w-[70%]"
               />
            </div>
            <p className="text-center mb-4">Email: {email}</p>
            <form onSubmit={handleResetPassword} className="flex flex-col gap-4">
               <label htmlFor="baru" className="flex flex-col gap-2">
                  <h1 className="capitalize font-medium">kata sandi baru</h1>
                  <div className="relative">
                     <input
                        type={showPassword ? "text" : "password"}
                        id="baru"
                        name="baru"
                        value={password}
                        onChange={handleChangePassword}
                        placeholder="masukkan kata sandi baru"
                        className="border border-black py-2 px-4 rounded-lg w-full"
                     />
                     <span
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        onClick={togglePasswordVisibility}
                     >
                        {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                     </span>
                  </div>
               </label>
               <label htmlFor="konfirmasi" className="flex flex-col gap-2">
                  <h1 className="capitalize font-medium">ulangi kata sandi</h1>
                  <div className="relative">
                     <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="konfirmasi"
                        name="konfirmasi"
                        value={confirmPassword}
                        onChange={handleChangeConfirmPassword}
                        placeholder="ulangi kata sandi baru"
                        className="border border-black py-2 px-4 rounded-lg w-full"
                     />
                     <span
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        onClick={toggleConfirmPasswordVisibility}
                     >
                        {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                     </span>
                  </div>
               </label>
               {error && <p className="text-red-500">{error}</p>}
               {/* {success && <p className="text-green-500">Kata sandi berhasil diperbarui! Anda akan diarahkan ke halaman login.</p>} */}
               <button
                  type="submit"
                  className="font-medium border-none bg-primary rounded-lg py-2 px-4 mt-4 text-white capitalize"
               >
                  update kata sandi
               </button>
            </form>
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
            style={{ fontSize: "13px" }}
         />
      </div>
   )
}

export default LupaPassword
