import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PropTypes from "prop-types";

import { getLetter } from "../../../redux/actions/latterActions";

const StatusSuratPage = ({ id }) => {
  const dispatch = useDispatch();
  const { letter } = useSelector((state) => state.latter);

  useEffect(() => {
    dispatch(getLetter(id));
  }, [dispatch, id]);
  console.log(letter);

  return (
    <div>
      {/* status suerat mobile */}
      {letter.map((item, i) => (
        <div key={i}>
          <div className="flex flex-col gap-2 p-4 border border-black rounded-md lg:hidden">
            {/* status */}
            {/* <div className="mb-4">
              <div className="px-4 py-2 font-medium text-white capitalize bg-green-500 border-none rounded-md">
                selesai
              </div>
              <div className="px-4 py-2 font-medium text-white capitalize bg-red-500 border-none rounded-md">
                ditolak
              </div>
            </div> */}
            {item.status ? (
              <div className="px-4 py-2 font-medium text-white capitalize bg-green-500 border-none rounded-md">
                selesai
              </div>
            ) : (
              <div className="px-4 py-2 font-medium text-white capitalize bg-red-500 border-none rounded-md">
                ditolak
              </div>
            )}
            {/* kode surat */}
            {/* <div className="flex items-center justify-between gap-3 mx-4">
              <h2 className="capitalize font-medium w-[80%]">kode surat</h2>
              <div>:</div>
              <h3 className="w-full">8787</h3>
            </div> */}
            {/* tanggal */}
            <div className="flex items-center justify-between gap-3 mx-4">
              <h2 className="capitalize font-medium w-[80%]">tanggal</h2>
              <div>:</div>
              <h3 className="w-full">{item.Latter.date}</h3>
            </div>
            {/* nama */}
            <div className="flex items-center justify-between gap-3 mx-4">
              <h2 className="capitalize font-medium w-[80%]">nama</h2>
              <div>:</div>
              <h3 className="w-full">{item.Latter.fullName}</h3>
            </div>
            {/* tujuan */}
            <div className="flex items-center justify-between gap-3 mx-4">
              <h2 className="capitalize font-medium w-[80%]">tujuan</h2>
              <div>:</div>
              <h3 className="w-full">{item.Latter.perpous}</h3>
            </div>
          </div>

          <div className="hidden p-8 border-2 rounded-lg shadow-lg border-slate-300 lg:block">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    {/* <th>Kode Surat</th> */}
                    <th>Tanggal</th>
                    <th>Nama</th>
                    <th>Tujuan</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    {/* <td>
                      <div className="flex items-center gap-3">
                        <div className="font-bold">8787</div>
                      </div>
                    </td> */}
                    <td>{item.Latter.date}</td>
                    <td>
                      <div className="flex items-center gap-2 ">
                        {/* <FaWhatsapp className="w-6 h-6 " /> */}
                        <h1>{item.Latter.fullName}</h1>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2 ">
                        <h1>{item.Latter.perpous}</h1>
                      </div>
                    </td>
                    <th>
                      {/* <div className="px-4 py-2 font-medium text-white capitalize bg-green-500 border-none rounded-md">
                        selesai
                      </div>
                      <div className="px-4 py-2 font-medium text-white capitalize bg-red-500 border-none rounded-md">
                        ditolak
                      </div> */}
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}

      {/* status suarat web */}
    </div>
  );
};

StatusSuratPage.propTypes = {
  id: PropTypes.number,
};

export default StatusSuratPage;
