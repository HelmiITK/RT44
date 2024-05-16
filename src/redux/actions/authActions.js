import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { setToken, setUser } from "../reducers/authReducers";

const api_url = import.meta.env.VITE_REACT_API_ADDRESS;

export const login = (email, password, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(`${api_url}/auth/login`, {
      email,
      password,
    });

    const { data } = response.data;
    const { token } = data;
    const role = data.role;

    dispatch(setToken(token));
    toast.success("Login berhasil");
    if (role === "superAdmin") {
      setTimeout(() => navigate("/dashboard_rt"), 1000);
    } else if (role === "sekretaris") {
      setTimeout(() => navigate("/dashboard_sekretaris"), 1000);
    } else if (role === "bendahara") {
      setTimeout(() => navigate("/dashboard_bendahara"), 1000);
    } else {
      setTimeout(() => navigate("/dashboard_warga"), 1000);
    }
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        toast.error("Email atau Password Anda salah. Silahkan coba lagi.");
      } else if (error.response.status === 404) {
        toast.error("Email tidak terdaftar. Silakan cek kembali email Anda.");
      } else {
        toast.error("Login gagal. Silakan coba lagi nanti.");
      }
    } else {
      toast.error("Terjadi kesalahan pada server. Silakan coba lagi nanti.");
    }
  }
};

export const getMe =
  (navigate, navigatePathSuccess, navigatePathError) =>
  async (dispatch, getState) => {
    try {
      let { token } = getState().auth;
      const response = await axios.get(`${api_url}/auth/authme`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response.data.data;
      dispatch(setUser(data));
      if (navigatePathSuccess) navigate(navigatePathSuccess);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response.status === 401) {
          dispatch(logout());
        }
      }

      if (navigatePathError) navigate(navigatePathError);
      return;
    }
  };

export const logout = () => (dispatch) => {
  dispatch(setToken(null));
  dispatch(setUser(null));
};
