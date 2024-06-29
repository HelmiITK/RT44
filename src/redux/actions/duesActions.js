import axios from "axios";
import Swal from "sweetalert2";

import {
  setDues,
  setSukarela,
  setDuesTrue,
  setDuesFalse,
} from "../reducers/duesReducers";

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

export const getDuesSukarela = () => async (dispatch) => {
  try {
    const response = await axios.get(`${api_url}/dues/by-type`);
    const sukarela = response.data.duesSukarela;
    dispatch(setSukarela(sukarela));
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

export const trueDues = () => async (dispatch) => {
  try {
    const response = await axios.get(`${api_url}/duesuser/by-true`);
    const allDuesUser = response.data;
    dispatch(setDuesTrue(allDuesUser));
  } catch (error) {
    swal("error", "ERROR", error.message);
  }
};
export const falseDues = () => async (dispatch) => {
  try {
    const response = await axios.get(`${api_url}/duesuser/by-false`);
    const allDuesUser = response.data;
    dispatch(setDuesFalse(allDuesUser));
  } catch (error) {
    swal("error", "ERROR", error.message);
  }
};

export const createIuranSukarela = (duesName) => async () => {
  try {
    const response = await axios.post(`${api_url}/dues/voluntary`, { duesName }, {
      headers: {'Content-Type': 'application/json'}
    });
    if (response.status === 201) {
      swal("success", "Iuran Sukarela Berhasil Diamabahkan", response.data.message)
    }
  } catch (error) {
    swal("error", "ERROR", error.message);
  }
}

