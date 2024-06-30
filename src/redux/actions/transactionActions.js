import axios from "axios";
import Swal from "sweetalert2";

import {
  setTransaction,
  setUpdateVerify,
} from "../reducers/transactionReducers";

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
  (duesId, userId, linkProofpayment) => async (dispatch) => {
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
        `${api_url}/transaction/obligat/${duesId}/${userId}`,
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

export const transactionVoluntary = (duesId, formData) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    console.log(token);

    // const formData = new FormData();
    // formData.append("linkProofPayment", linkProofPayment);
    // formData.append("totalPrice", totalPrice);

    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    const response = await axios.post(
      `${api_url}/transaction/voluntary/${duesId}`,
      formData,
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

export const getTransaction = () => async (dispatch) => {
  try {
    const response = await axios.get(`${api_url}/transaction/`);
    const transaction = response.data;
    dispatch(setTransaction(transaction));
  } catch (error) {
    swal("error", "ERROR", error.message);
  }
};

export const updateVerify = (id) => async (dispatch, getState) => {
  try {
    await axios.patch(`${api_url}/transaction/update-verify/${id}`);
    const { transaction } = getState().transaction;

    const updatedTransaction = transaction.map((item) =>
      item.id === id ? { ...item, verified: true } : item
    );
    dispatch(setUpdateVerify(updatedTransaction));
    swal("success", "BERHASIL", "Verifikasi Berhasil");
  } catch (error) {
    swal("error", "ERROR", error.message);
  }
};
