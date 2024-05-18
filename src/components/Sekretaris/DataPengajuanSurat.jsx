// import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { CiEdit } from "react-icons/ci";
// import { AiOutlineDelete } from "react-icons/ai";
import PropTypes from "prop-types";

import { updateStatusLetter } from "../../redux/actions/latterActions";

const DataPengajuanSurat = ({ handleMenuClick, letter }) => {
  const dispatch = useDispatch();

  const handleStatusChange = (latterId, event) => {
    const status = event.target.value;
    dispatch(updateStatusLetter(latterId, status));
    window.location.reload();
  };

  return (
    <div className="p-8 mt-4 border-2 rounded-lg shadow-lg border-slate-300">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Tanggal</th>
              <th>Nama</th>
              <th>Tujuan</th>
              <th>Tindakan</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {letter.map((item, i) => (
              <tr key={i}>
                <td>{item.Latter?.date}</td>
                <td>
                  <div className="flex items-center gap-2 ">
                    {/* <FaWhatsapp className="w-6 h-6 " /> */}
                    <h1>{item.Latter?.fullName}</h1>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2 ">
                    <h1>{item.Latter?.perpous}</h1>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    {/* button edit */}
                    <button
                      onClick={() => handleMenuClick(5, item.Latter.id)}
                      className="p-3 duration-300 rounded-lg bg-slate-300 hover:bg-primary hover:text-white"
                    >
                      <CiEdit className="w-6 h-6" />
                    </button>
                    {/* button hapus
                    <button className="p-3 duration-300 rounded-lg bg-slate-300 hover:bg-red-500 hover:text-white">
                      <AiOutlineDelete className="w-6 h-6" />
                    </button> */}
                  </div>
                </td>
                <th>
                  <select
                    className="select select-bordered border-[1px] border-black w-full max-w-xs shadow-md"
                    value={item.status}
                    onChange={(e) => handleStatusChange(item.Latter?.id, e)}
                  >
                    <option value="Sedang Proses">Sedang Proses</option>
                    <option value="Selesai">Selesai</option>
                    <option value="Ditolak">Tolak</option>
                  </select>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataPengajuanSurat;

DataPengajuanSurat.propTypes = {
  handleMenuClick: PropTypes.func,
  letter: PropTypes.array,
};
