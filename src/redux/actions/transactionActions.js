import axios from "axios";
import Swal from "sweetalert2";

import { setTransaction } from "../reducers/transactionReducers";

const swal = (icon, title, text) =>
  Swal.fire({
    icon: icon,
    title: title,
    text: text,
    customClass: {
      confirmButton: "custom-ok-button", // Tambahkan kelas CSS khusus untuk tombol "Ok"
    },
  });

const api_url = import.meta.env.VITE_REACT_API_ADDRESS;

export const transactionObligate =
  (duesId, linkProofpayment) => async (dispatch) => {
    try {
      const token = localStorage.getItem("token");

      const responseDues = await axios.get(
        `${api_url}/duesuser/by-user-dues/${duesId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { duesStatus } = responseDues.data.userDues;
      if (duesStatus === true) {
        swal(
          "warning",
          "TAGIHAN SUDAH TERBAYAR",
          "Anda sudah membayar tagihan ini."
        );
        return;
      }

      const response = await axios.post(
        `${api_url}/transaction/obligat/${duesId}`,
        linkProofpayment,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const transaction = response.data;
      dispatch(setTransaction(transaction));
      swal("success", "BERHASIL", "Pembayaran Berhasil");
    } catch (error) {
      if (error.response.status === 404 || error.response.status === 500) {
        swal("error", "ERROR", "Masukkan Bukti Pembayaran");
      }
    }
  };
