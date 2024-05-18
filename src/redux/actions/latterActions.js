import axios from "axios";
import Swal from "sweetalert2";

import {
  setLetter,
  setLetterById,
  updateStatus,
  setError
} from "../reducers/latterReducers";

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

export const getLetter = () => async (dispatch) => {
  try {
    const response = await axios.get(`${api_url}/latter/userlatter`);
    const letter = response.data;

    dispatch(setLetter(letter));
  } catch (error) {
    swal("error", "ERROR", error.message);
  }
};

export const postSurat =
  (
    latterType,
    fullName,
    gender,
    placeDateBday,
    status,
    religion,
    work,
    blood,
    citizenship,
    address,
    nik,
    nkk,
    perpous,
    id
  ) =>
  async () => {
    try {
      const response = await axios.post(`${api_url}/latter/create/${id}`, {
        latterType,
        fullName,
        gender,
        placeDateBday,
        status,
        religion,
        work,
        blood,
        citizenship,
        address,
        nik,
        nkk,
        perpous,
      });

      if (response.status === 201) {
        swal("success", "Surat berhasi diajukan", response.data.message);
      }
    } catch (error) {
      swal("error", "ERROR", error.message);
    }
  };

export const getLetterById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${api_url}/latter/${id}`);
    const letter = response.data.userLatter;
    dispatch(setLetterById(letter));
  } catch (error) {
    swal("error", "ERROR", error.message);
  }
};

export const updateStatusLetter = (latterId, status) => async (dispatch) => {
  try {
    await axios.patch(`${api_url}/latter/update/status/${latterId}`, {
      status,
    });
    dispatch(updateStatus(updateStatus));
  } catch (error) {
    swal("error", "ERROR", error.message);
    dispatch(setError(error.message))
  }
};
