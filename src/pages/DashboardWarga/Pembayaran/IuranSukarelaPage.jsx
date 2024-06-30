import { useState } from "react";
import { useDispatch } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";
import { IoChevronBackOutline } from "react-icons/io5";
import qrCode from "../../../assets/qrcodeBayar.png";
import FormatFoto from "../../../assets/formatfoto.png";
import Swal from "sweetalert2";

import { transactionVoluntary } from "../../../redux/actions/transactionActions";

const IuranSukarelaPage = ({ handleMenuClick, duesId }) => {
  const dispatch = useDispatch();
  const [linkProofPayment, setLinkProofpayment] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setLinkProofpayment(file);
  };

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   const formData = new FormData();
  //   formData.append("linkProofPayment", file);
  //   setLinkProofpayment(formData);
  // };
  // const formData = new FormData();
  // formData.append("totalPrice", totalPrice);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!linkProofPayment) {
      Swal.fire("Error", "Bukti Transfer harus diisi", "error");
      return;
    }

    const formData = new FormData();
    formData.append("linkProofPayment", linkProofPayment);
    formData.append("totalPrice", totalPrice);

    Swal.fire({
      title: "Loading...",
      text: "Please wait while the data is being updated",
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
    dispatch(transactionVoluntary(duesId, formData))
      .then(() => {
        Swal.close();
        Swal.fire("Success", "Pembayaran Berhasil", "success").then(() => {
          handleMenuClick(3);
        });
      })
      .catch((error) => {
        Swal.close(); // Close the loading indicator
        Swal.fire("Error", error.message, "error");
      });
  };

  return (
    <div className="px-4 pt-4 pb-8 mb-4 border-2 border-black rounded-lg">
      {/* button back to list iuran sukarela */}
      <button
        onClick={() => handleMenuClick(3)}
        className="flex items-center mb-4 ga-2"
      >
        <IoChevronBackOutline className="w-6 h-6" />
        <h2 className="italic font-medium underline">Back</h2>
      </button>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* jumlah donasi */}
        <label htmlFor="donasi" className="flex flex-col gap-2">
          <h1 className="font-semibold capitalize">jumlah iuran</h1>
          <input
            type="text"
            name="totalPrice"
            id="donasi"
            placeholder="Rp.xxx.xxx,xx"
            className="border-[1px] border-black py-2 px-4 shadow-lg rounded-lg"
            onChange={(e) => setTotalPrice(e.target.value)}
            required
          />
        </label>
        <div className="flex flex-col items-center justify-center w-full gap-4 py-6 bg-gray-200">
          <img src={FormatFoto} alt="" className="w-32" />
          <h2 className="font-medium text-gray-400">Format jpg. png. jpeg.</h2>
          <input
            type="file"
            name="linkProofPayment"
            id="linkProofPayment"
            className="w-1/2"
            onChange={handleFileChange}
            required
          />
        </div>

        <label htmlFor="donasi" className="flex items-baseline justify-center">
          <img src={qrCode} alt="qrcode" className="w-full lg:w-1/2" />
        </label>
        {/* button aksi */}
        <div className="flex items-center justify-center gap-8">
          {/* sumbit */}
          <button
            type="submit"
            className="px-8 py-3 mt-4 text-lg font-semibold capitalize duration-300 border-none rounded-lg bg-primary hover:text-white hover:bg-green-500 hover:shadow-lg hover:drop-shadow-md"
          >
            submit
          </button>
          {/* cancel */}
          <button className="px-8 py-3 mt-4 text-lg font-semibold capitalize duration-300 bg-red-500 border-none rounded-lg hover:text-white hover:bg-red-700 hover:shadow-lg hover:drop-shadow-md">
            cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default IuranSukarelaPage;

IuranSukarelaPage.propTypes = {
  handleMenuClick: PropTypes.func,
  duesId: PropTypes.number,
  userId: PropTypes.number,
};
