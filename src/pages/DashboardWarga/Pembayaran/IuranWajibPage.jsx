import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GambarIuran from "../../../assets/iuran.png";
import { FaArrowRightLong } from "react-icons/fa6";
import PropTypes from "prop-types";

import { getDues } from "../../../redux/actions/duesActions";

const IuranWajibPage = ({ handleMenuClick }) => {
  const dispatch = useDispatch();
  const { dues } = useSelector((state) => state.dues);

  useEffect(() => {
    dispatch(getDues(null));
  }, [dispatch]);

  //   const tagihan = [
  //     {
  //       status: "belum bayar",
  //       jenisIuran: "wajib",
  //       bulan: "Februari 2024",
  //       jumlah: "150,000",
  //     },
  //     {
  //       status: "belum bayar",
  //       jenisIuran: "wajib",
  //       bulan: "Maret 2024",
  //       jumlah: "220,000",
  //     },
  //     {
  //       status: "sudah bayar",
  //       jenisIuran: "wajib",
  //       bulan: "April 2024",
  //       jumlah: "290,000",
  //     },
  //   ];
  return (
    <div className="p-4 mx-4 mt-6 border-2 border-black rounded-lg">
      <h1 className="mb-4 text-xl font-semibold capitalize">tagihan</h1>
      {/* card tagihan */}
      {dues.map((item, i) => (
        <div key={i} className="p-4 mt-4 bg-gray-200 border-none rounded-lg">
          <p
            className={`font-medium capitalize text-end ${
              item.duesStatus ? "text-green-500" : "text-red-500"
            }`}
          >
            {item.duesStatus ? "Sudah Bayar" : "Belum Bayar"}
          </p>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col justify-around">
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold capitalize">
                  {item.Dues.duesType}
                </h1>
                <p>{item.Dues.duesName}</p>
                <span className="font-semibold">Rp. {item.Dues.price}</span>
              </div>
              {/* button bayar */}
              <div
                className="flex items-center gap-2 px-3 py-1 border-none cursor-pointer bg-primary rounded-xl"
                onClick={() => handleMenuClick(5, item.duesId)}
              >
                <h1 className="font-medium text-white capitalize">
                  bayar sekarang
                </h1>
                <FaArrowRightLong className="w-8 h-5 p-1 bg-white rounded-3xl text-primary" />
              </div>
            </div>
            <div>
              <img src={GambarIuran} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IuranWajibPage;

IuranWajibPage.propTypes = {
  handleMenuClick: PropTypes.func,
};
