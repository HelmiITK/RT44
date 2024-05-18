// import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FaEye } from "react-icons/fa";
import PropTypes from "prop-types";

import { updateVerify } from "../../redux/actions/transactionActions";

const PembayaranPerluVerifikasi = ({ transaction }) => {
  const dispatch = useDispatch();

  const handleVerify = (id) => {
    dispatch(updateVerify(id));
    window.location.reload();
  };

  const sortedTransactions = Array.isArray(transaction)
    ? [...transaction].sort((a, b) => new Date(b.date) - new Date(a.date))
    : [];

  console.log(transaction);
  return (
    <div className="p-8 mt-4 border-2 rounded-lg shadow-lg border-slate-300">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Nama</th>
              <th>Tanggal Bayar</th>
              <th>Nama Pembayaran</th>
              <th>Jenis Pembayaran</th>
              <th>Nomimal</th>
              <th>Bukti Pembayaran</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {sortedTransactions.length > 0 ? (
              sortedTransactions.map((item, i) => (
                <tr key={i}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="font-bold">{item.User?.name}</div>
                    </div>
                  </td>
                  <td>{item?.date}</td>
                  <td>
                    <div className="flex items-center gap-2 ">
                      <h1>{item.Dues?.duesName}</h1>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-2 ">
                      <h1>{item.Dues?.duesType}</h1>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-2 ">
                      <h1>Rp. {item?.totalPrice}</h1>
                    </div>
                  </td>
                  <td>
                    <button
                      className="p-2 border-none bg-slate-200 rounded-xl"
                      onClick={() =>
                        document.getElementById(`my_modal_${i}`).showModal()
                      }
                    >
                      <FaEye className="w-6 h-6" />
                    </button>
                    <dialog id={`my_modal_${i}`} className="modal">
                      <div className="flex flex-col items-center gap-2 text-center modal-box">
                        <h3 className="text-lg font-bold">Bukti Pembayaran</h3>
                        <img
                          src={item?.linkProofPayment}
                          alt=""
                          className="w-1/2"
                        />
                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </td>
                  <th>
                    <button
                      className={`px-4 py-2 font-medium text-white capitalize border-none rounded-md ${
                        item?.verified ? "bg-green-500" : "bg-blue-500"
                      }`}
                      onClick={() => handleVerify(item?.id)}
                    >
                      {item?.verified ? "Verified" : "Verify"}
                    </button>
                  </th>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No transactions available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PembayaranPerluVerifikasi;

PembayaranPerluVerifikasi.propTypes = {
  transaction: PropTypes.array,
};
