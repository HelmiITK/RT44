import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";
import { IoChevronBackOutline } from "react-icons/io5";

const IuranSukarelaPage = ({ handleMenuClick }) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="px-4 pt-4 pb-8 mx-4 border-2 border-black rounded-lg">
      {/* button back to list iuran sukarela */}
      <button
        onClick={() => handleMenuClick(3)}
        className="flex items-center mb-4 ga-2"
      >
        <IoChevronBackOutline className="w-6 h-6" />
        <h2 className="italic font-medium underline">Back</h2>
      </button>
      <form action="" className="flex flex-col gap-4">
        {/* tanggal */}
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold capitalize">tanggal</h1>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="border-[1px] border-black py-2 px-4 shadow-lg rounded-lg"
          />
        </div>
        {/* jumlah donasi */}
        <label htmlFor="donasi" className="flex flex-col gap-2">
          <h1 className="font-semibold capitalize">jumlah iuran</h1>
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
          <textarea
            id="donasi"
            className="textarea textarea-bordered textarea-sm w-full border-[1px] border-black py-2 px-4 shadow-lg"
          ></textarea>
        </label>
        {/* button aksi */}
        <div className="flex items-center justify-center gap-8">
          {/* sumbit */}
          <button
            onClick={() => handleMenuClick(5)}
            className="px-8 py-3 mt-4 text-lg font-semibold capitalize duration-300 border-none rounded-lg bg-primary hover:text-white hover:bg-green-500 hover:shadow-lg hover:drop-shadow-md"
          >
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

export default IuranSukarelaPage;

IuranSukarelaPage.propTypes = {
  handleMenuClick: PropTypes.func,
};
