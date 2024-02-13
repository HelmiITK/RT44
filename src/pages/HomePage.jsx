import Navbar from "../components/Navbar"
import pictureHome from "../assets/homePicture.png"

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div>
        {/* heading */}
        <div></div>
        {/* pictureHome */}
        <div className="relative">
          <img
            className="object-cover"
            src={pictureHome}
            alt="ini gambar home" />
          {/* heading mobile */}
          <div className="absolute right-14 top-36 ">
            <h1 className="font-bold text-4xl mb-4">RT 44 Sepinggan Baru</h1>
            <button className="px-6 bg-orange-300 rounded-xl py-2 font-semibold text-white">Know More 😊🚀</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage