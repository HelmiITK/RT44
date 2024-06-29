import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GambarTentang from "../assets/TentangKami.jpg";
import GambarLayanan from "../assets/GambarTentang.png";
import pictureHome from "../assets/homePicture.png";
import GambarLogoRT44 from "../assets/GambarLogoRT44.png";
import BarcodeIg from "../assets/BarcodeIg.jpg";
import kegiatan1 from "../assets/Kegiatan1.jpg";
import kegiatan2 from "../assets/kegiatan2.png";
import kegiatan3 from "../assets/kegiatan3.png";
import kegiatan4 from "../assets/kegiatan4.png";
import kegiatan5 from "../assets/kegiatan5.jpg";
import kegiatan6 from "../assets/kegiatan6.jpg";
import kegiatan7 from "../assets/kegiatan7.jpg";
import kegiatan8 from "../assets/kegiatan8.jpg";
import kegiatan9 from "../assets/kegiatan9.jpg";
import ketuaRt from "../assets/GinanJar.jpg";
import bendahara from "../assets/Bendahara.jpg";
import sekretaris from "../assets/Sekretaris.jpg";

import { FaCaretRight } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import { TbArrowBigLeftLinesFilled } from "react-icons/tb";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "swiper/css/effect-flip";
import "swiper/css/navigation";
import {
  EffectCoverflow,
  Pagination,
  EffectCards,
  Navigation,
  EffectFlip,
} from "swiper/modules";

import { useEffect, useRef } from "react";
import Wave from "react-wavify";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";

import { getMe, logout } from "../redux/actions/authActions";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const settingsWeb = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    vertical: true,
    verticalSwiping: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const settingsHp = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const menuLayanan = [
    {
      nama: "Layanan Pembayaran",
      sub: ["Iuran Wajib", "Iuran Sosial", "Iuran Sukarela"],
      link: "/dashboard_warga",
    },
    {
      nama: "Layanan Permohonan Surat",
      sub: ["Surat Pengantar", "Surat Keterangan"],
      link: "/letter_req",
    },
    {
      nama: "UMKM",
      sub: ["Nasi Kuning", "Gado-gado", "Pecel"],
      link: "/umkm",
    },
    {
      nama: "Emergency Button",
      sub: ["Sedang Dikembangkan"],
      link: "/",
    },
  ];

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    const hasReloadedBefore = localStorage.getItem("hasReloaded");

    if (!user && !hasReloadedBefore) {
      localStorage.removeItem('token');
      navigate("/");
      localStorage.setItem("hasReloaded", "true");
      window.location.reload();
    }
  }, [user, navigate]);

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const linkRef = useRef(null);
  // back to MainSection when on click text MovieList in Footer from homepage
  const goto = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const onLogout = () => {
    Swal.fire({
      title: "Konfirmasi Logout",
      text: "Apakah Anda yakin ingin keluar?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Keluar!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logout());
        navigate("/");
      } else {
        navigate("/dashboard_sekretaris");
      }
    });
  };

  return (
    <>
      <Navbar onLogout={onLogout} user={user?.name} />
      <div className="container mx-auto pt-28">
        {/* MainSaction */}
        <div className="relative h-[500px] lg:h-[550px]" ref={linkRef}>
          <div className="flex flex-row">
            {/* heading */}
            <div className="z-20 flex flex-col items-center justify-center gap-4 ml-16 mt-28 lg:flex lg:flex-col lg:justify-start lg:items-start">
              <h1 className="w-64 p-3 text-4xl font-bold bg-white rounded-3xl bg-opacity-65 lg:text-6xl lg:w-full lg:leading-snug lg:tracking-wide lg:text-black lg:font-extrabold">
                RT 44 <br /> Gading City
              </h1>
              <a 
                href='https://wa.me/628115400017'
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 text-center font-semibold text-white duration-300 bg-orange-400 w-60 rounded-xl lg:py-4 lg:text-lg lg:font-bold lg:w-72 hover:bg-orange-600 lg:ml-4 lg:shadow-2xl">
                Hubungi Pak RT 😊🚀
              </a>
            </div>
            {/* gambar v md lg */}
            <img
              className="absolute object-cover top-5 z-10 md:w-1/2 right-0 lg:object-fill lg:h-[530px] rounded-l-full shadow-2xl shadow-orange-500"
              src={pictureHome}
              alt="ini gambar home"
            />
            {/* heading */}
          </div>
          {/* wave */}
          <div>
            <Wave
              mask="url(#mask)"
              fill="#fff199"
              className="absolute bottom-0"
              options={{
                height: 10,
                amplitude: 30,
                speed: 0.4,
                points: 3,
              }}
            >
              <defs>
                <linearGradient id="gradient" gradientTransform="rotate(180)">
                  <stop offset="0" stopColor="white" />
                  <stop offset="0.9" stopColor="black" />
                </linearGradient>
                <mask id="mask">
                  <rect
                    x="0"
                    y="0"
                    className="w-full"
                    height="200"
                    fill="url(#gradient)"
                  />
                </mask>
              </defs>
            </Wave>
            <Wave
              mask="url(#mask)"
              fill="#ffcb5f"
              className="absolute bottom-0"
              options={{
                height: 50,
                amplitude: 30,
                speed: 0.4,
                points: 3,
              }}
            >
              <defs>
                <linearGradient id="gradient" gradientTransform="rotate(180)">
                  <stop offset="0" stopColor="white" />
                  <stop offset="0.9" stopColor="black" />
                </linearGradient>
                <mask id="mask">
                  <rect
                    x="0"
                    y="0"
                    className="w-full"
                    height="200"
                    fill="url(#gradient)"
                  />
                </mask>
              </defs>
            </Wave>
            <Wave
              mask="url(#mask)"
              fill="#ffa736"
              className="absolute bottom-0"
              options={{
                height: 80,
                amplitude: 30,
                speed: 0.4,
                points: 4,
              }}
            >
              <defs>
                <linearGradient id="gradient" gradientTransform="rotate(180)">
                  <stop offset="0" stopColor="white" />
                  <stop offset="0.9" stopColor="black" />
                </linearGradient>
                <mask id="mask">
                  <rect
                    x="0"
                    y="0"
                    className="w-full"
                    height="200"
                    fill="url(#gradient)"
                  />
                </mask>
              </defs>
            </Wave>
          </div>
        </div>

        {/* Tentang Kami */}
        <div className="pb-10 bg-gradient-to-r from-primary via-orange-200 to-orange-100 ">
          {/* deskripsi */}
          <div className="flex flex-col gap-4 pt-8">
            <div
              className="relative mb-2 lg:mt-10"
              data-aos="fade-right"
              data-aos-offset="30"
              data-aos-duration="1000"
            >
              <div className="h-[3px] w-14 bg-white absolute top-[16px] -left-2 lg:h-2"></div>
              <h1 className="flex items-center gap-2 text-2xl font-bold text-white ml-7 lg:text-4xl">
                <FaCaretLeft className="text-white" />
                Tentang Kami
                <FaCaretRight className="text-white" />
              </h1>
              <div className="h-[3px] w-[180px] bg-white absolute top-[16px] right-0 md:w-[510px] lg:w-[670px] xl:w-[920px] 2xl:w-[1160px] lg:h-2"></div>
            </div>
            {/* mode hp */}
            <div
              data-aos="zoom-in"
              data-aos-duration="900"
              className="flex text-sm leading-6 tracking-wide text-justify bg-bottom bg-no-repeat lg:hidden pt-52 md:pt-10"
              style={{
                backgroundImage: `url(${GambarTentang})`,
                overflowY: "auto",
                backgroundSize: "700px",
                marginRight: "10px",
                marginLeft: "10px",
                borderRadius: "20px",
              }}
            >
              <div
                className="flex flex-col gap-4 p-4 mt-24 bg-white md:mt-80 md:mx-8"
                style={{ height: "200px", overflowY: "scroll" }}
              >
                <div>
                  <h1 className="text-2xl font-semibold ">Gading City</h1>
                  <p className="text-slate-500">RT 44</p>
                </div>
                <div className="text-sm leading-6">
                  <p>
                    Perumahan Gading City RT 44 Sepinggan Baru , merupakan
                    perumahan yang berada di Jln. Sepinggan Pratama Blok G dan
                    H, Kel. Sepinggan Baru, Kec. Balikpapan Selatan, Balikpapan,
                    Kalimantan Timur.
                  </p>
                  <br />
                  <p>
                    Kecamatan Balikpapan Selatan memiliki luas wilayah 37,82 km²
                    dan terdiri dari 7 kelurahan, yaitu Kelurahan Gunung
                    Bahagia, Kelurahan Sepinggan, Kelurahan Damai Baru,
                    Kelurahan Sepinggan Raya, Kelurahan Sepinggan Baru, dan
                    Kelurahan Sungai Nangka. Kelurahan yang menjadi sasaran
                    program KKN yang kami adakan adalah Kelurahan Sepinggan
                    Baru, tepatnya di Jalan Sepinggan Pratama Blok G dan H yang
                    tergabung menjadi sebuah RT yaitu RT 44 yang terdiri dari 21
                    Kepala Keluarga.
                  </p>
                  <br />
                  <p>
                    RT 44 Sepinggan Baru memiliki 3 lahan taman, 1 pos penjaga.
                    4 UMKM, dan 1 praktek dokter. Masyarakat RT 44 rata - rata
                    bekerja sebagai karyawan swasta.
                  </p>
                </div>
              </div>
            </div>
            {/* mode laptop */}
            <div className="relative justify-between hidden gap-8 mx-4 lg:flex">
              <div className="z-10 flex flex-col w-1/2 gap-2 p-4 mt-5 leading-6 text-justify">
                <p
                  className="leading-relaxed tracking-wider indent-6"
                  data-aos="fade-right"
                  data-aos-duration="700"
                  data-aos-delay="200"
                >
                  Perumahan Gading City RT 44 Sepinggan Baru , merupakan
                  perumahan yang berada di Jln. Sepinggan Pratama Blok G dan H,
                  Kel. Sepinggan Baru, Kec. Balikpapan Selatan, Balikpapan,
                  Kalimantan Timur.
                </p>
                <br />
                <p
                  className="leading-relaxed tracking-wider indent-6"
                  data-aos="fade-right"
                  data-aos-duration="700"
                  data-aos-delay="300"
                >
                  Kecamatan Balikpapan Selatan memiliki luas wilayah 37,82 km²
                  dan terdiri dari 7 kelurahan, yaitu Kelurahan Gunung Bahagia,
                  Kelurahan Sepinggan, Kelurahan Damai Baru, Kelurahan Sepinggan
                  Raya, Kelurahan Sepinggan Baru, dan Kelurahan Sungai Nangka.
                  Kelurahan yang menjadi sasaran program KKN yang kami adakan
                  adalah Kelurahan Sepinggan Baru, tepatnya di Jalan Sepinggan
                  Pratama Blok G dan H yang tergabung menjadi sebuah RT yaitu RT
                  44 yang terdiri dari 21 Kepala Keluarga.
                </p>
                <br />
                <p
                  className="leading-relaxed tracking-wider indent-6"
                  data-aos="fade-right"
                  data-aos-duration="700"
                  data-aos-delay="400"
                >
                  RT 44 Sepinggan Baru memiliki 3 lahan taman, 1 pos penjaga. 4
                  UMKM, dan 1 praktek dokter. Masyarakat RT 44 rata - rata
                  bekerja sebagai karyawan swasta.
                </p>
              </div>
              <img
                src={GambarTentang}
                alt="Gambar Tentang"
                className="lg:w-1/2"
                data-aos="zoom-in"
                data-aos-duration="900"
                data-aos-offset="200"
              />
            </div>
          </div>
        </div>

        {/* Kegiatan RT 44 mode web*/}
        <div className="hidden mx-6 mt-10 lg:flex lg:justify-between lg:gap-5">
          {/* slick card 1*/}
          <div
            className="w-1/3 pb-10 mt-12 border-2 border-gray-300 shadow-2xl"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-offset="300"
          >
            {/* card slick kegiatan */}
            <Slider {...settingsWeb} className="mt-6">
              <img
                src={kegiatan1}
                alt=""
                className="px-4 py-4 w-44 h-44 lg:w-60 lg:h-60"
              />
              <img
                src={kegiatan2}
                alt=""
                className="px-4 py-4 w-44 h-44 lg:w-60 lg:h-60"
              />
              <img
                src={kegiatan3}
                alt=""
                className="px-4 py-4 w-44 h-44 lg:w-60 lg:h-60"
              />
              <img
                src={kegiatan4}
                alt=""
                className="px-4 py-4 w-44 h-44 lg:w-60 lg:h-60"
              />
            </Slider>
          </div>
          {/* heading */}
          <div
            className="flex items-center justify-center gap-4 md:flex md:justify-evenly lg:justify-end lg:flex lg:flex-col lg:gap-10"
            data-aos="fade-down"
            data-aos-duration="1500"
            data-aos-offset="300"
          >
            <h1 className="text-2xl font-semibold text-center text-black underline lg:text-4xl lg:font-extrabold lg:leading-relaxed decoration-primary">
              Kegiatan RT 44 <br /> Gading City
            </h1>
            <div>
              <Swiper
                effect={"flip"}
                grabCursor={true}
                pagination={true}
                navigation={true}
                modules={[EffectFlip, Pagination, Navigation]}
                className="pb-10 mySwiper w-96 "
              >
                <SwiperSlide>
                  <img
                    src={GambarLogoRT44}
                    alt="Logo RT 44"
                    className="w-48 h-48 rounded-full shadow-2xl lg:w-96 lg:h-96"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={BarcodeIg}
                    alt="Barcode ig RT 44"
                    className="rounded-3xl"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          {/* slick card 2*/}
          <div
            className="w-1/3 pb-10 mt-12 border-2 border-gray-300 shadow-2xl"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-offset="300"
          >
            {/* card slick kegiatan */}
            <Slider {...settingsWeb} className="mt-6">
              <img
                src={kegiatan5}
                alt=""
                className="px-4 py-4 w-44 h-44 lg:w-60 lg:h-60"
              />
              <img
                src={kegiatan6}
                className="px-4 py-4 w-44 h-44 lg:w-60 lg:h-60"
              />
              <img
                src={kegiatan7}
                alt=""
                className="px-4 py-4 w-44 h-44 lg:w-60 lg:h-60"
              />
              <img
                src={kegiatan8}
                alt=""
                className="px-4 py-4 w-44 h-44 lg:w-60 lg:h-60"
              />
              <img
                src={kegiatan9}
                alt=""
                className="px-4 py-4 w-44 h-44 lg:w-60 lg:h-60"
              />
            </Slider>
          </div>
        </div>

        {/* kegiatan RT 44 mode hp dan tablet */}
        <div className="block mx-4 mt-10 lg:hidden">
          <div className="flex flex-col gap-4">
            <h1
              className="text-2xl font-bold leading-relaxed text-center text-black underline decoration-primary"
              data-aos="fade-down"
              data-aos-duration="900"
            >
              Kegiatan RT 44 <br /> Gading City
            </h1>
            <div>
              <Swiper
                data-aos="flip-right"
                data-aos-duration="1500"
                effect={"flip"}
                grabCursor={true}
                pagination={true}
                navigation={true}
                modules={[EffectFlip, Pagination, Navigation]}
                className="pb-10 mySwiper w-96"
              >
                <SwiperSlide>
                  <img
                    src={GambarLogoRT44}
                    alt="Logo RT 44"
                    className="rounded-full shadow-2xl "
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={BarcodeIg}
                    alt="Barcode ig RT 44"
                    className="rounded-3xl"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div
            className="w-full pb-10 mt-4 border-2 border-gray-300 shadow-2xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* card slick kegiatan */}
            <Slider {...settingsHp} className="mx-4 mt-6">
              <div className="flex flex-col text-center">
                <img
                  src={kegiatan1}
                  alt="kegiatan1"
                  className="w-full px-2 mb-3 h-52"
                />
                <h2 className="text-sm font-light">Kegiatan</h2>
                <p className="text-base font-medium">Ramah Tamah</p>
              </div>
              <div className="flex flex-col text-center">
                <img
                  src={kegiatan2}
                  alt="kegiatan2"
                  className="w-full px-2 mb-3 h-52"
                />
                <h2 className="text-sm font-light">Kegiatan</h2>
                <p className="text-base font-medium">HUT NKRI</p>
              </div>
              <div className="flex flex-col text-center">
                <img
                  src={kegiatan3}
                  alt="kegiatan3"
                  className="w-full px-2 mb-3 h-52"
                />
                <h2 className="text-sm font-light">Kegiatan</h2>
                <p className="text-base font-medium">Gotong Royong</p>
              </div>
              <div className="flex flex-col text-center">
                <img
                  src={kegiatan4}
                  alt="kegiatan4"
                  className="w-full px-2 mb-3 h-52"
                />
                <h2 className="text-sm font-light">Kegiatan</h2>
                <p className="text-base font-medium">Kerja Bakti</p>
              </div>
              <div className="flex flex-col text-center">
                <img
                  src={kegiatan5}
                  alt="kegiatan4"
                  className="w-full px-2 mb-3 h-52"
                />
                <h2 className="text-sm font-light">Kegiatan</h2>
                <p className="text-base font-medium">Familiy Gathering</p>
              </div>
              <div className="flex flex-col text-center">
                <img
                  src={kegiatan7}
                  alt="kegiatan4"
                  className="w-full px-2 mb-3 h-52"
                />
                <h2 className="text-sm font-light">Kegiatan</h2>
                <p className="text-base font-medium">Semarak Bersama Warga</p>
              </div>
            </Slider>
          </div>
        </div>

        {/* Layanan RT 44 */}
        <div className="mx-4 mt-16 mb-5 lg:mt-20">
          <div
            className="relative"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <div className="hidden lg:flex absolute h-1 w-[40%] top-[38px] bg-black"></div>
            <h1 className="flex items-center justify-center gap-3 text-2xl font-semibold text-center underline decoration-primary mb-7 lg:text-3xl lg:font-bold lg:leading-10">
              <TbArrowBigRightLinesFilled className="hidden lg:flex" />
              Layanan RT 44 <br /> Gading City
              <TbArrowBigLeftLinesFilled className="hidden lg:flex" />
            </h1>
            <div className="hidden lg:flex absolute h-1 w-[40%] top-[38px] right-0 bg-black"></div>
          </div>
          <div className="grid grid-cols-2 gap-6 lg:gird lg:grid-cols-4">
            {menuLayanan.map((item, index) => (
              <div
                key={index}
                className="relative duration-300 cursor-pointer hover:scale-105"
                data-aos="flip-right"
                data-aos-duration="500"
                data-aos-offset="300"
              >
                <Link as={Link} to={item.link}>
                  <div
                    className="h-[370px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${GambarLayanan})` }}
                  >
                    <div className="w-full h-full bg-gradient-to-b from-black to-transparent lg:hover:bg-gradient-to-b lg:hover:from-orange-400 group">
                      <div className="absolute flex flex-col items-start justify-start gap-3 px-3 pt-6 duration-300 inset-2 lg:group-hover:text-black lg:group-hover:inset-5">
                        <h2 className="text-lg font-semibold text-primary lg:group-hover:text-3xl lg:group-hover:text-white lg:text-xl ">
                          {item.nama}
                        </h2>
                        <ul className="text-sm italic text-white lg:text-base lg:group-hover:text-lg lg:group-hover:font-semibold">
                          {item.sub.map((subItem, subIndex) => (
                            <li key={subIndex}>{subItem}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* inti pedngurus mode website*/}
        <div
          className="relative items-center justify-between hidden mx-4 mt-24 mb-16 lg:flex"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="400"
        >
          {/* heading */}
          <h1 className="text-5xl font-bold leading-relaxed tracking-wider text-orange-600 ml-14">
            Inti Pengurus <br /> RT 44 Gading City
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute top-0 bg-gradient-to-b from-orange-200"
          >
            <path
              fill="#FABA59"
              fillOpacity="1"
              d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,170.7C672,181,768,171,864,160C960,149,1056,139,1152,138.7C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
          {/* card pengurus */}
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="w-[600px] h-[600px] py-10 px-36"
          >
            <SwiperSlide className="flex flex-col justify-center gap-4 text-center">
              <img
                src={ketuaRt}
                alt="Ketua RT 44"
                className="object-cover w-full h-80"
              />
              <div className="flex flex-col gap-3 px-4 pb-4">
                <div className="">
                  <h1 className="text-2xl font-semibold">
                    Ginanjar Kartasasmita
                  </h1>
                  <p className="font-light">Ketua RT 44</p>
                </div>
                <q className="text-sm italic">
                  Ambillah risiko, melewati batasanmu, dan berani bermimpi.
                  Hidupmu akan jauh lebih indah dan bermakna.
                </q>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col justify-center gap-4 text-center">
              <img
                src={sekretaris}
                alt="Sekretaris RT 44"
                className="object-cover w-full h-80"
              />
              <div className="flex flex-col gap-3 px-4 pb-4">
                <div className="">
                  <h1 className="text-2xl font-semibold">Sahar</h1>
                  <p className="font-light">Sekretaris RT 44</p>
                </div>
                <q className="text-sm italic">
                  Berusahalah menjadi versi terbaik dari dirimu sendiri dan
                  inspirasi bagi orang lain.
                </q>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col justify-center gap-4 text-center">
              <img
                src={bendahara}
                alt="Bendahara RT 44"
                className="object-cover w-full h-80"
              />
              <div className="flex flex-col gap-3 px-4 pb-4">
                <div className="">
                  <h1 className="text-2xl font-semibold">Dios Andri Baskoro</h1>
                  <p className="font-light">Bendahara RT 44</p>
                </div>
                <q className="text-sm italic">
                  Cinta, rasa syukur, dan kebaikan adalah kunci untuk menjalani
                  hidup yang indah dan bermakna.
                </q>
              </div>
            </SwiperSlide>
          </Swiper>
          <svg
            className="absolute bottom-0 bg-gradient-to-t from-orange-200"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#FABA59"
              fillOpacity="1"
              d="M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,208C672,213,768,171,864,170.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* inti pengurus mode hp dan tablet */}
        <div className="flex flex-col gap-6 mx-4 mt-14 lg:hidden">
          <div className="flex flex-col items-center justify-center w-full gap-8 shadow-lg rounded-3xl bg-secondary bg-opacity-40">
            <div className="flex items-center justify-center gap-8 px-8 py-2 mt-6 border-2 shadow-md rounded-2xl">
              <div>
                <h1 className="text-2xl font-semibold text-primary">
                  Inti Pengurus
                </h1>
                <p className="font-light text-slate-600">RT 44 Gading City</p>
              </div>
              <div className="rounded-full shadow-lg w-28">
                <img src={GambarLogoRT44} alt="logo rt 44" className="" />
              </div>
            </div>
            {/* card slide */}
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper w-[60%] mt-4 mb-6"
            >
              <SwiperSlide className="flex flex-col items-center justify-center w-full">
                <div className="p-4 text-center border-2 border-orange-700 bg-primary rounded-2xl w-60">
                  <img
                    src={ketuaRt}
                    alt="Ketua RT 44"
                    className="object-cover w-full h-60"
                  />
                  <div className="flex flex-col gap-4 mt-2">
                    <div className="flex flex-col gap-1">
                      <h1 className="text-lg font-medium">
                        Ginanjar Kartasasmita
                      </h1>
                      <p className="text-sm font-light">Ketua RT 44</p>
                    </div>
                    <q className="text-xs italic">
                      Ambillah risiko, melewati batasanmu, dan berani bermimpi.
                      Hidupmu akan jauh lebih indah dan bermakna.
                    </q>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex flex-col items-center justify-center">
                <div className="p-4 text-center border-2 border-orange-700 bg-primary rounded-2xl w-60">
                  <img
                    src={sekretaris}
                    alt="Sekretaris"
                    className="object-cover w-full h-60"
                  />
                  <div className="flex flex-col gap-4 mt-2">
                    <div className="flex flex-col gap-1">
                      <h1 className="text-lg font-medium">Sahar</h1>
                      <p className="text-sm font-light">Sekretaris RT 44</p>
                    </div>
                    <q className="text-xs italic">
                      Berusahalah menjadi versi terbaik dari dirimu sendiri dan
                      inspirasi bagi orang lain.
                    </q>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex flex-col items-center justify-center">
                <div className="p-4 text-center border-2 border-orange-700 bg-primary rounded-2xl w-60">
                  <img
                    src={bendahara}
                    alt="Bendahara"
                    className="object-cover w-full h-60"
                  />
                  <div className="flex flex-col gap-4 mt-2">
                    <div className="flex flex-col gap-1">
                      <h1 className="text-lg font-medium">
                        Dios Andri Baskoro
                      </h1>
                      <p className="text-sm font-light">Bendahara RT 44</p>
                    </div>
                    <q className="text-xs italic">
                      Cinta, rasa syukur, dan kebaikan adalah kunci untuk
                      menjalani hidup yang indah dan bermakna.
                    </q>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <Footer linkRef={linkRef} goto={goto} />
    </>
  );
};

export default HomePage;
