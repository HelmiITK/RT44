import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import PropTypes from "prop-types";

import { getUser, removeUser } from "../../../redux/actions/userActions";

const DataMasyarakat = ({ handleMenuClick }) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

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
        dispatch(removeUser(id));
        Swal.fire("Dihapus!", "Data anggota telah dihapus.", "success");
      }
    });
  };

  console.log(user);
  return (
    <div className="flex flex-col items-center gap-4">
      {/* heading */}
      <div className="flex flex-col items-center w-full gap-2 py-6 border-2 rounded-lg border-slate-300">
        <h1 className="text-2xl font-bold uppercase">jumlah masyarakat</h1>
        <h2 className="text-4xl font-bold">{user.length}</h2>
      </div>
      {/* konten data */}
      <div className="w-full p-8 border-2 rounded-lg shadow-lg border-slate-300">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Nama</th>
                <th>Alamat</th>
                <th>No KK</th>
                <th>NIK</th>
                <th>Jumlah Anggota</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {user.map((item, i) => (
                <tr key={i}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </td>
                  <td>{item.address}</td>
                  <td>
                    <div className="flex items-center gap-2 ">{item.nkk}</div>
                  </td>
                  <td>
                    <h1>{item.nik}</h1>
                  </td>
                  <td>
                    <h1>{item.member}</h1>
                  </td>
                  <th>
                    <div className="flex items-center gap-2">
                      {/* button edit */}
                      <button
                        onClick={() => handleMenuClick(4, item.id)}
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

export default DataMasyarakat;

DataMasyarakat.propTypes = {
  handleMenuClick: PropTypes.func,
};
