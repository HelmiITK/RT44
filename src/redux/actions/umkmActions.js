import axios from "axios";
import Swal from "sweetalert2";

import {
  setUmkm,
  setUmkmById,
  updateUmkm,
  deleteUmkm,
  setError,
} from "../reducers/umkmReducers";

const swal = (icon, title, text) =>
  Swal.fire({
    icon: icon,
    title: title,
    text: text,
    customClass: {
      confirmButton: "custom-ok-button",
    },
  });

const api_url = import.meta.env.VITE_REACT_API_ADDRESS;

export const getUmkm = () => async (dispatch) => {
  try {
    const response = await axios.get(`${api_url}/umkm`);

    const umkm = response.data.allUmkm;
    const umkmCount = umkm.length;
    dispatch(setUmkm(umkm, umkmCount));
  } catch (error) {
    swal("error", "ERROR", error.message);
    dispatch(setError(error.message))
  }
};

export const getUmkmById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${api_url}/umkm/get/${id}`);
    const umkm = response.data.umkm;
    dispatch(setUmkmById(umkm));
  } catch (error) {
    swal("error", "ERROR", error.message);
  }
};

export const postUmkm =
  (name, owner, description, noUmkm, imageUrl) => async () => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("owner", owner);
      formData.append("noUmkm", noUmkm);
      formData.append("description", description);
      if (imageUrl) {
        formData.append("imageUrl", imageUrl);
      }
      const response = await axios.post(
        `${api_url}/umkm/create/`,
        {
          name,
          owner,
          description,
          noUmkm,
          imageUrl,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 201) {
        swal("success", "UMKM berhasi ditambahkan", response.data.message);
      }
    } catch (error) {
      swal("error", "ERROR", error.message);
    }
  };

export const editUmkm =
  (id, name, owner, noUmkm, description, imageUrl) => async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("owner", owner);
      formData.append("noUmkm", noUmkm);
      formData.append("description", description);
      if (imageUrl) {
        formData.append("imageUrl", imageUrl);
      }

      await axios.patch(
        `${api_url}/umkm/update/${id}`,
        {
          name,
          owner,
          noUmkm,
          description,
          imageUrl,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      dispatch(updateUmkm(updateUmkm));
      swal("success", "Berhasil", "Berhasil Memperbaharui Data UMKM");
    } catch (error) {
      swal("error", "ERROR", error.message);
    }
  };

export const removeUmkm = (id) => async (dispatch) => {
  try {
    await axios.delete(`${api_url}/umkm/delete/${id}`);
    dispatch(deleteUmkm(id));
  } catch (error) {
    swal("error", "ERROR", error.message);
  }
};
