import { useDispatch } from "react-redux";
import { useState } from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

import QrCodeBayar from "../../assets/qrcodeBayar.png";
import FormatFoto from "../../assets/formatfoto.png";
import { transactionObligate } from "../../redux/actions/transactionActions";

const QrCodeComponent = ({ handleMenuClick, duesId, userId }) => {
  const dispatch = useDispatch();

  const [linkProofpayment, setLinkProofpayment] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("linkProofPayment", file);
    setLinkProofpayment(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Loading...",
      text: "Please wait while the data is being updated",
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
    dispatch(transactionObligate(duesId, userId, linkProofpayment))
      .then(() => {
        Swal.close();
        Swal.fire("Success", "Pembayaran Berhasil", "success").then(() => {
          handleMenuClick(2);
        });
      })
      .catch((error) => {
        Swal.close(); // Close the loading indicator
        Swal.fire("Error", error.message, "error");
      });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="border-[1px] border-black flex flex-col gap-4 justify-center items-center p-4">
        <h1 className="text-xl font-semibold capitalize">upload gambar</h1>
        <div className="flex flex-col items-center justify-center w-full gap-4 py-6 bg-gray-200">
          <img src={FormatFoto} alt="" className="w-32" />
          <h2 className="font-medium text-gray-400">Format jpg. png. jpeg.</h2>
          <input
            type="file"
            name="linkProofpayment"
            id="linkProofpayment"
            className="w-1/2"
            onChange={handleFileChange}
          />
        </div>
        <button
          type=""
          className="px-8 py-2 font-medium text-white capitalize bg-blue-500 rounded-lg w-"
          onClick={handleSubmit}
        >
          submit
        </button>
      </div>
      <img src={QrCodeBayar} alt="" className="w-full mb-8" />
    </div>
  );
};

QrCodeComponent.propTypes = {
  handleMenuClick: PropTypes.func,
  duesId: PropTypes.number,
  userId: PropTypes.number,
};

export default QrCodeComponent;
