import { Link } from "react-router-dom";
import { IoIosWarning } from "react-icons/io";


const UnauthorizedPage = () => {
   return (
      <div className="container mx-auto flex justify-center mt-32">
         <div className="flex flex-col justify-center items-center border border-black p-8 w-1/2 rounded-md bg-slate-200">
            <div className="flex flex-col justify-center items-center mb-4">
               <IoIosWarning className="text-red-500 w-52 h-52"/>
               <h1 className="text-red-500 font-semibold text-4xl">Peringatan!!!</h1>
            </div>
            <p className="mb-4">Anda tidak memiliki kewewenangan untuk mengakses fitur ini</p>
            <Link className="border-none bg-primary py-2 px-4  mt-4 rounded-md hover:scale-105 hover:drop-shadow-lg duration-300" to="/">Kembali ke halaman utama</Link>
         </div>
      </div>
   );
};

export default UnauthorizedPage;
