import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import DataPengajuanSurat from "../../../components/Sekretaris/DataPengajuanSurat";
import DataSelesai from "../../../components/Sekretaris/DataSelesai";

import { getLetter } from "../../../redux/actions/latterActions";

const PengajuanSuratPage = ({ handleMenuClick, step }) => {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  const { letter } = useSelector((state) => state.latter);

  useEffect(() => {
    dispatch(getLetter());
  }, [dispatch]);

  useEffect(() => {
    if (letter.userLatter) {
      setData(letter.userLatter);
    }
  }, [letter]);

  return (
    <>
      <div className="flex flex-row items-center gap-4">
        {/* surat menunggu validasi */}
        <div
          className="flex flex-col items-center w-full gap-2 py-6 duration-300 border-2 rounded-lg cursor-pointer border-slate-300 hover:bg-primary hover:drop-shadow-lg hover:scale-90 hover:text-white"
          onClick={() => handleMenuClick(1)}
        >
          <h1 className="text-2xl font-bold uppercase">
            surat menunggu verifikasi
          </h1>
          <h2 className="text-4xl font-bold">{letter.latterProcessCount}</h2>
        </div>
        {/* surat selesai */}
        <div
          className="flex flex-col items-center w-full gap-2 py-6 duration-300 border-2 rounded-lg cursor-pointer border-slate-300 hover:bg-primary hover:drop-shadow-lg hover:scale-90 hover:text-white"
          onClick={() => handleMenuClick(2)}
        >
          <h1 className="text-2xl font-bold uppercase">surat selesai</h1>
          <h2 className="text-4xl font-bold">{letter.latterDoneCount}</h2>
        </div>
      </div>
      {/* data pengajuan surat */}
      {step === 1 && (
        <DataPengajuanSurat letter={data} handleMenuClick={handleMenuClick} />
      )}
      {/* data surat selesai */}
      {step === 2 && <DataSelesai letter={data} />}
    </>
  );
};

export default PengajuanSuratPage;

PengajuanSuratPage.propTypes = {
  handleMenuClick: PropTypes.func,
  step: PropTypes.number,
};
