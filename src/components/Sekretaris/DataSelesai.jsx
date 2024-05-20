import { useEffect } from "react";
import PropTypes from "prop-types";

const DataSelesai = ({ letter }) => {
  useEffect(() => {}, [letter]);

  return (
    <div className="hidden p-8 mt-4 border-2 rounded-lg shadow-lg border-slate-300 lg:block">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Tanggal</th>
              <th>Nama</th>
              <th>Tujuan</th>
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

                <th>
                  {item.status === "Selesai" && (
                    <div className="px-4 py-2 font-medium text-white capitalize bg-green-500 border-none rounded-md">
                      Selesai
                    </div>
                  )}
                  {item.status === "Sedang Proses" && (
                    <div className="px-4 py-2 font-medium text-white capitalize bg-yellow-500 border-none rounded-md">
                      Sedang Proses
                    </div>
                  )}
                  {item.status === "Ditolak" && (
                    <div className="px-4 py-2 font-medium text-white capitalize bg-red-500 border-none rounded-md">
                      Ditolak
                    </div>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataSelesai;

DataSelesai.propTypes = {
  letter: PropTypes.array,
};
