import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import Donasi from "../../assets/donasi.png";
import { BsCalendar2Date } from "react-icons/bs";
import { GiCash } from "react-icons/gi";
import { IoPricetagsOutline } from "react-icons/io5";

import { getDuesSukarela } from "../../redux/actions/duesActions";

const CardIuranSukarela = ({ handleMenuClick }) => {
  const dispatch = useDispatch();

  const { sukarela } = useSelector((state) => state.dues);

  useEffect(() => {
    dispatch(getDuesSukarela(null));
  }, [dispatch]);

  return (
    <>
      <div className="p-4 border border-black rounded-lg">
        <h1 className="text-lg font-semibold capitalize">iuran sukarela</h1>
        <div className="block lg:grid lg:grid-cols-3 lg:gap-3">
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
                    <GiCash className="w-6 h-6" />
                    <h3 className="font-medium">Rp. {item.price}</h3>
                  </div>
                  <div className="flex items-center gap-1">
                    <IoPricetagsOutline className="w-6 h-6" />
                    <h3 className="italic font-medium">{item.duesName}</h3>
                  </div>
                </div>
                <img src={Donasi} alt="" className="w-1/2 drop-shadow-xl" />
              </div>
              {/* button donasi */}
              <button
                onClick={() => handleMenuClick(8, item.id)}
                className="px-4 py-2 font-medium text-white capitalize duration-300 bg-green-500 border-none rounded-lg hover:drop-shadow-lg hover:bg-green-700 hover:scale-105"
              >
                donasi sekarang
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardIuranSukarela;

CardIuranSukarela.propTypes = {
  handleMenuClick: PropTypes.func,
};
