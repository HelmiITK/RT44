import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaUserTag } from "react-icons/fa6";
import { TiInfoLargeOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRef } from "react";

import { getUmkm } from "../redux/actions/umkmActions";

const UmkmRt = () => {
  const dispatch = useDispatch();

  const { umkm } = useSelector((state) => state.umkm);

  useEffect(() => {
    dispatch(getUmkm());
  }, [dispatch]);

  const linkRef = useRef(null);
  // back to MainSection when on click text MovieList in Footer from homepage
  const goto = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Navbar />
      <div className="container mx-auto pt-28 lg:pt-32" ref={linkRef}>
        {/* button back to home */}
        <Link
          as={Link}
          to={"/"}
          className="flex items-center gap-2 mx-5 duration-300 cursor-pointer hover:scale-105 hover:text-primary md:w-1/6 md:mx-12 hover:underline"
        >
          <IoIosArrowRoundBack className="w-6 h-6 md:w-8 md:h-8" />
          <p className="md:text-lg">Kembali</p>
        </Link>
        {/* heading */}
        <div className="flex flex-col gap-2 mx-4 text-center">
          <h1 className="text-2xl font-semibold tracking-widest underline lg:font-bold lg:text-4xl decoration-primary">
            UMKM
          </h1>
          <p className="text-sm font-light text-slate-700 lg:text-lg">
            Usaha Mikro, Kecil dan Menengah
          </p>
        </div>
        {/* card umkm */}
        <div className="md:grid md:grid-cols-2">
          {umkm.map((item, index) => (
            <div
              key={index}
              className="p-6 mx-4 mt-8 border-2 shadow-xl border-slate-100 rounded-2xl"
            >
              <img
                src={item.imageUrl}
                alt="Gambar UMKM"
                className="object-cover w-full h-56 rounded-t-3xl"
              />
              <div className="flex flex-col gap-4 mt-6">
                <div className="flex items-center gap-4">
                  <SiHomeassistantcommunitystore className="w-6 h-6 text-primary" />
                  <h1 className="text-lg font-medium">{item.name}</h1>
                </div>
                <div className="flex items-center gap-4">
                  <FaUserTag className="w-6 h-6 text-primary" />
                  <h2 className="text-sm font-normal">{item.owner}</h2>
                </div>
                <div className="flex gap-4 p-3 shadow-md rounded-b-2xl">
                  <TiInfoLargeOutline className="w-24 h-24 text-primary" />
                  <p className="text-sm font-light leading-6 text-justify indent-4">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer linkRef={linkRef} goto={goto} />
    </div>
  );
};

export default UmkmRt;
