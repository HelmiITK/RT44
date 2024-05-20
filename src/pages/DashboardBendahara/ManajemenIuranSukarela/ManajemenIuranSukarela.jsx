import { useEffect, useState } from "react"
import { createIuranSukarela } from "../../../redux/actions/duesActions"
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { getDuesSukarela } from "../../../redux/actions/duesActions";
import Donasi from "../../../assets/donasi.png";
import { BsCalendar2Date } from "react-icons/bs";
import { IoPricetagsOutline } from "react-icons/io5";

const ManajemenIuranSukarela = () => {
   const dispatch = useDispatch();
   const [nameSukarela, setNameSukarela] = useState("");

   const { sukarela } = useSelector((state) => state.dues)
   console.log(sukarela)
   useEffect(() => {
      dispatch(getDuesSukarela())
   }, [dispatch])

   const handleSubmit = (e) => {
      e.preventDefault();

      if (nameSukarela.trim() === "") {
         Swal.fire("Error", "Nama iuran tidak boleh kosong", "error");
         return;
      }

      Swal.fire({
         title: "Loading...",
         text: "Please wait while the data is being added",
         onBeforeOpen: () => {
            Swal.showLoading();
         },
      });

      dispatch(createIuranSukarela(nameSukarela)).then(() => {
         Swal.close();
         Swal.fire("Success", "Iuran berhasil dibuat", "success");
         setNameSukarela(""); // Reset the input field
      }).catch(error => {
         Swal.close();
         Swal.fire("Error", error.message, "error");
      });
   }
   return (
      <div className="w-full border-2 border-slate-200 shadow-md h-full rounded-lg p-8">
         <h1 className="capitalize text-primary text-4xl font-semibold text-center">iuran sukarela</h1>
         {/* card create sukarela */}
         <div className="border-2 mx-44 mt-6 rounded-lg shadow-lg p-8">
            <form action="" onSubmit={handleSubmit}>
               <label htmlFor="iuran" className="flex flex-col gap-2">
                  <h1 className="capitalize">nama iuran</h1>
                  <input
                     type="text"
                     id="iuran"
                     name="iuran"
                     value={nameSukarela}
                     onChange={(e) => setNameSukarela(e.target.value)}
                     className="border border-slate-300 rounded-md py-2 px-4"
                  />
                  <button
                     type="submit"
                     className="capitalize border-none bg-green-500 rounded-lg py-2 px-4 text-white font-medium hover:scale-105 duration-300 hover:drop-shadow-lg mt-4 hover:bg-green-600"
                  >
                     submit
                  </button>
               </label>
            </form>
         </div>
         {/* data sukarela */}
         <div className="block lg:grid lg:grid-cols-3 lg:gap-6 mt-8">
            {sukarela.map((item, i) => (
               <div
                  key={i}
                  className="p-4 mt-4 border rounded-lg shadow-md border-slate-300 bg-slate-200"
               >
                  {/* heading */}
                  <h1 className="px-4 py-2 font-medium rounded-md bg-primary">
                     {item.duesType}
                  </h1>
                  {/* deskripisi */}
                  <div className="flex flex-row items-center justify-between my-6">
                     <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-1">
                           <BsCalendar2Date className="w-6 h-6" />
                           <h2 className="font-medium">{item.date}</h2>
                        </div>
                        <div className="flex items-center gap-1">
                           <IoPricetagsOutline className="w-6 h-6" />
                           <h3 className="italic font-medium">{item.duesName}</h3>
                        </div>
                     </div>
                     <img src={Donasi} alt="" className="w-1/2 drop-shadow-xl" />
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default ManajemenIuranSukarela
