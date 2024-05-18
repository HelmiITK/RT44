import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import PembayaranPerluVerifikasi from "../../../components/Bendahara/PembayaranPerluVerifikasi";
import BelumMembayar from "../../../components/Bendahara/BelumMembayar";
import SudahMembayar from "../../../components/Bendahara/SudahMembayar";

import { getTransaction } from "../../../redux/actions/transactionActions";
import { trueDues, falseDues } from "../../../redux/actions/duesActions";

const ValidasiPembayaranPage = ({ handleMenuClick, step }) => {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [dataFalse, setDataFalse] = useState([]);
  const [dataTrue, setDataTrue] = useState([]);

  const { transaction } = useSelector((state) => state.transaction);
  const { duesFalse, duesTrue } = useSelector((state) => state.dues);

  useEffect(() => {
    dispatch(getTransaction());
  }, [dispatch]);

  useEffect(() => {
    if (transaction.allTransaction) {
      setData(transaction?.allTransaction);
    }
    if (duesFalse) {
      setDataFalse(duesFalse?.allDuesUser);
    }
    if (duesTrue) {
      setDataTrue(duesTrue?.allDuesUser);
    }
  }, [transaction, duesFalse, duesTrue]);

  useEffect(() => {
    dispatch(falseDues());
  }, [dispatch]);

  useEffect(() => {
    dispatch(trueDues());
  }, [dispatch]);

  // console.log(duesTrue);

  return (
    <>
      <div className="flex flex-row items-center gap-4">
        {/* Pembayaran menunggu validasi */}
        <div
          className="flex flex-col items-center w-full gap-2 py-6 text-center duration-300 border-2 rounded-lg cursor-pointer border-slate-300 hover:bg-primary hover:drop-shadow-lg hover:scale-90 hover:text-white"
          onClick={() => handleMenuClick(1)}
        >
          <h1 className="text-2xl font-bold uppercase">
            pembayaran perlu verifikasi
          </h1>
          <h2 className="text-4xl font-bold">
            {transaction?.transactionCount || 0}
          </h2>
        </div>
        {/* belum melakukan pembayaran */}
        <div
          className="flex flex-col items-center w-full gap-2 py-6 text-center duration-300 border-2 rounded-lg cursor-pointer border-slate-300 hover:bg-primary hover:drop-shadow-lg hover:scale-90 hover:text-white"
          onClick={() => handleMenuClick(2)}
        >
          <h1 className="text-2xl font-bold uppercase">
            jumlah keluarga belum bayar iuran wajib
          </h1>
          <h2 className="text-4xl font-bold">{duesFalse?.duesCount}</h2>
        </div>
        {/* sudah melakukan pembayaran */}
        <div
          className="flex flex-col items-center w-full gap-2 py-6 text-center duration-300 border-2 rounded-lg cursor-pointer border-slate-300 hover:bg-primary hover:drop-shadow-lg hover:scale-90 hover:text-white"
          onClick={() => handleMenuClick(3)}
        >
          <h1 className="text-2xl font-bold uppercase">
            jumlah keluarga sudah bayar iuran wajib
          </h1>
          <h2 className="text-4xl font-bold">{duesTrue?.duesCount}</h2>
        </div>
      </div>

      {/* Data pembayaran perlu verifikasi */}
      {step === 1 && <PembayaranPerluVerifikasi transaction={data} />}
      {step === 2 && <BelumMembayar data={dataFalse} />}
      {step === 3 && <SudahMembayar data={dataTrue} />}
    </>
  );
};

export default ValidasiPembayaranPage;

ValidasiPembayaranPage.propTypes = {
  handleMenuClick: PropTypes.func,
  step: PropTypes.number,
};
