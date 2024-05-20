import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaWhatsapp } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import PropTypes from "prop-types";

import { getUmkm, removeUmkm } from "../../../redux/actions/umkmActions";

const UmkmRtPage = ({ handleMenuClick }) => {
  const dispatch = useDispatch();

  const { umkm } = useSelector((state) => state.umkm);

  useEffect(() => {
    dispatch(getUmkm());
  }, [dispatch]);
  console.log(umkm);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Apakah anda yakin?",
      text: "Data yang dihapus tidak dapat dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeUmkm(id));
        Swal.fire("Dihapus!", "Data UMKM telah dihapus.", "success");
      }
    });
  };
  return (
    <div className="flex flex-col gap-4">
      {/* heading */}
      <div className="flex flex-col justify-center gap-4 p-8 border-2 rounded-lg shadow-lg border-slate-300">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-center">Jumlah UMKM</h1>
          <h2 className="text-5xl font-bold text-center">{umkm.length}</h2>
        </div>
        <button
          onClick={() => handleMenuClick(4)}
          className="px-4 py-2 font-medium text-white capitalize duration-300 border-none rounded-lg cursor-pointer bg-primary hover:bg-orange-500"
        >
          tambah umkm
        </button>
      </div>
      {/* konten data */}
      <div className="p-8 border-2 rounded-lg shadow-lg border-slate-300">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Nama UMKM</th>
                <th>Pemilik UMKM</th>
                <th>Nomor Usaha</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {umkm.map((item, i) => (
                <tr key={i}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </td>
                  <td>{item.owner}</td>
                  <td>
                    <div className="flex items-center gap-2 ">
                      <FaWhatsapp className="w-6 h-6 " />
                      <h1>{item.noUmkm}</h1>
                    </div>
                  </td>
                  <th>
                    <div className="flex items-center gap-2">
                      {/* button edit */}
                      <button
                        onClick={() => handleMenuClick(5, item.id)}
                        className="p-3 duration-300 rounded-lg bg-slate-300 hover:bg-primary hover:text-white"
                      >
                        <CiEdit className="w-6 h-6" />
                      </button>
                      {/* button hapus */}
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-3 duration-300 rounded-lg bg-slate-300 hover:bg-red-500 hover:text-white"
                      >
                        <AiOutlineDelete className="w-6 h-6" />
                      </button>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UmkmRtPage;

UmkmRtPage.propTypes = {
  step: PropTypes.number,
  handleMenuClick: PropTypes.func,
};
