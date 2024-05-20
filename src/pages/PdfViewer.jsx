import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import SuratPengantar from "../components/SuratPengantar";
import PropTypes from "prop-types";

import { getLetterById2 } from "../redux/actions/latterActions";

const PdfViewerPage = ({ id }) => {
  const dispatch = useDispatch();

  const { letterById2 } = useSelector((state) => state.latter);

  useEffect(() => {
    dispatch(getLetterById2(id));
  }, [dispatch, id]);
  console.log(letterById2);
  return (
    <div className="w-screen h-screen">
      <PDFViewer width="100%" height="100%">
        <SuratPengantar letter={letterById2} />
      </PDFViewer>
    </div>
  );
};

export default PdfViewerPage;

PdfViewerPage.propTypes = {
  id: PropTypes.number,
};
