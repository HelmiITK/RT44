import PropTypes from "prop-types";

const BelumMembayar = ({ data }) => {
  return (
    <div className="p-8 mt-4 rounded-lg shadow-lg boder-2 border-slate-300">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Nama</th>
              <th>Bulan Iuran</th>
              <th>Jenis Pembayaran</th>
              <th>Nomimal</th>
              <th>Keterangan</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data.map((item, i) => (
              <tr key={i}>
                {/* Nama */}
                <td>
                  <div className="flex items-center gap-3">
                    <div className="font-bold">{item.User?.name}</div>
                  </div>
                </td>
                {/* Tanggal */}
                <td>{item.Dues?.duesName}</td>
                {/* Jenis pembayaran */}
                <td>
                  <div className="flex items-center gap-2 ">
                    <h1>{item.Dues?.duesType}</h1>
                  </div>
                </td>
                {/* Nominal */}
                <td>
                  <div className="flex items-center gap-2 ">
                    <h1>Rp. {item.Dues?.price}</h1>
                  </div>
                </td>
                {/* Bukti pembayaran */}
                <td>
                  <div className="px-4 py-2 font-medium text-white bg-red-500 border-none rounded-lg">
                    Belum bayar
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BelumMembayar;

BelumMembayar.propTypes = {
  data: PropTypes.array,
};
