import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import PropTypes from "prop-types";

const IuranSukarelaPage = ({ handleMenuClick }) => {
   const [startDate, setStartDate] = useState(new Date());

   return (
      <div className="mx-4 border-2 border-black px-4 pt-4 pb-8 rounded-lg">
         <form action="" className="flex flex-col gap-4">
            {/* tanggal */}
            <div className="flex flex-col gap-2">
               <h1 className="capitalize font-semibold">tanggal</h1>
               <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="border-[1px] border-black py-2 px-4 shadow-lg rounded-lg"
               />
            </div>
            {/* jumlah donasi */}
            <label htmlFor="donasi" className="flex flex-col gap-2">
               <h1 className="capitalize font-semibold">jumlah iuran</h1>
               <input
                  type="text"
                  name="donasi"
                  id="donasi"
                  placeholder="Rp.xxx.xxx,xx"
                  className="border-[1px] border-black py-2 px-4 shadow-lg rounded-lg"
               />
            </label>
            {/* keterangan donasi */}
            <label htmlFor="donasi" className="flex flex-col gap-2">
               <span className="font-semibold capitalize">deskripsi iuran</span>
               <textarea id="donasi" className="textarea textarea-bordered textarea-sm w-full border-[1px] border-black py-2 px-4 shadow-lg" ></textarea>
            </label>
            {/* submit */}
            <button
               className="capitalize bg-blue-500 text-white rounded-lg font-medium py-2 mt-4"
               onClick={() => handleMenuClick(5)}
            >
               submit
            </button>
         </form>
      </div>
   )
}

export default IuranSukarelaPage;

IuranSukarelaPage.propTypes = {
   handleMenuClick: PropTypes.func,
}
