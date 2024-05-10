import QrCodeBayar from "../../assets/qrcodeBayar.png"
import FormatFoto from "../../assets/formatfoto.png"

const QrCodeComponent = () => {
  return (
    <>
      {/* mode hp */}
      <div className="flex flex-col gap-4 lg:hidden">
        <div className="border-[1px] border-black flex flex-col gap-4 justify-center items-center p-4">
          <h1 className="capitalize font-semibold text-xl">upload gambar</h1>
          <div className="flex flex-col justify-center items-center gap-4 bg-gray-200 w-full py-6">
            <img src={FormatFoto} alt="" className="w-32" />
            <h2 className="text-gray-400 font-medium">Format jpg. png. jpeg.</h2>
            <input type="file" name="" id="" className="w-1/2" />
          </div>
          <button type="" className="capitalize bg-blue-500 text-white font-medium py-2 px-8 rounded-lg w-">
            submit
          </button>
        </div>
        <img src={QrCodeBayar} alt="" className="w-full mb-8" />
      </div>

      {/* mode web */}
      <div className="flex flex-row items-start gap-10 w-full">
        {/* upload bukti tf */}
        <div className="flex flex-col gap-4 border-2 border-black p-8 bg-white rounded-lg shadow-lg w-1/2">
          <h1 className="capitalize font-medium text-lg text-center mb-5">upload bukti pembayaran</h1>
          <div className="flex flex-col justify-center items-center gap-4 bg-gray-200 w-full py-6">
            <img src={FormatFoto} alt="" className="w-32" />
            <h2 className="text-gray-400 font-medium">Format jpg. png. jpeg.</h2>
            <input type="file" name="" id="" className="w-1/2" />
          </div>
          <button className="border-none bg-primary hover:bg-green-500 duration-300 rounded-lg py-2 px-4 text-white font-medium capitalize mt-6">submit</button>
        </div>
        {/* qrcode */}
        <img src={QrCodeBayar} alt="" className="w-1/2 mb-8" />
      </div>
    </>
  )
}

export default QrCodeComponent