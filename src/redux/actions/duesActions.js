import axios from "axios";
import Swal from "sweetalert2";

import { setDues } from "../reducers/duesReducers";

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

export const getDues = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");

    const id = getUserId(token);

    const response = await axios.get(`${api_url}/duesuser/by-user/${id}`);

    const dues = response.data.allDuesUser;
    dispatch(setDues(dues));
  } catch (error) {
    swal("error", "ERROR", error.message);
  }
};

const getUserId = (token) => {
  const payload = token.split(".")[1];
  const decodedPayload = atob(payload);
  const payloadOject = JSON.parse(decodedPayload);
  const userId = payloadOject.id;
  return userId;
};