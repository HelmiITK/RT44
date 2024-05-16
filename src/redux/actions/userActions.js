import axios from "axios";
import Swal from "sweetalert2";

import {
  setUser,
  setUserById,
  deleteUser,
  updateUser,
} from "../reducers/userReducers";

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

export const getUser = () => async (dispatch) => {
  try {
    const response = await axios.get(`${api_url}/user`);

    const user = response.data.allUsers;
    const filteredUser = user.slice(3);
    const userCount = filteredUser.length;
    console.log(filteredUser);
    dispatch(setUser(filteredUser, userCount));
  } catch (error) {
    swal("error", "ERROR", error.message);
  }
};

export const getUserById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${api_url}/user/get/${id}`);
    const user = response.data.user;
    dispatch(setUserById(user));
  } catch (error) {
    swal("error", "ERROR", error.message);
  }
};

export const postUser =
  (
    name,
    email,
    gender,
    placeDateBday,
    member,
    phoneNumber,
    noHome,
    address,
    nik,
    nkk,
    blockHome
  ) =>
  async () => {
    try {
      const response = await axios.post(`${api_url}/user/create/`, {
        name,
        email,
        gender,
        placeDateBday,
        member,
        phoneNumber,
        noHome,
        address,
        nik,
        nkk,
        blockHome,
      });

      if (response.status === 201) {
        swal("success", "Anggota berhasi ditambahkan", response.data.message);
      }
    } catch (error) {
      if (error.response.status === 400) {
        swal("error", "ERROR", "Email telah digunakan");
      } else {
        swal("error", "ERROR", error.message);
      }
    }
  };

export const editUser =
  (
    id,
    name,
    email,
    gender,
    placeDateBday,
    member,
    phoneNumber,
    noHome,
    address,
    nik,
    nkk,
    blockHome
  ) =>
  async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("gender", gender);
      formData.append("placeDateBday", placeDateBday);
      formData.append("member", member);
      formData.append("phoneNumber", phoneNumber);
      formData.append("noHome", noHome);
      formData.append("address", address);
      formData.append("nik", nik);
      formData.append("nkk", nkk);
      formData.append("blockHome", blockHome);

      await axios.patch(
        `${api_url}/user/update/${id}`,
        {
          name,
          email,
          gender,
          placeDateBday,
          member,
          phoneNumber,
          noHome,
          address,
          nik,
          nkk,
          blockHome,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      dispatch(updateUser(updateUser));
      swal("success", "Berhasil", "Berhasil Memperbaharui Data User");
    } catch (error) {
      swal("error", "ERROR", error.message);
    }
  };

export const removeUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`${api_url}/user/delete/${id}`);
    dispatch(deleteUser(id));
  } catch (error) {
    swal("error", "ERROR", error.message);
  }
};
