import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import GambarTentang from "../assets/TentangKami.jpg"
import GambarLayanan from "../assets/GambarTentang.png"
import pictureHome from "../assets/homePicture.png"
import GambarLogoRT44 from "../assets/GambarLogoRT44.png"
import BarcodeIg from "../assets/BarcodeIg.jpg"
import kegiatan1 from "../assets/Kegiatan1.jpg"
import kegiatan2 from "../assets/kegiatan2.png"
import kegiatan3 from "../assets/kegiatan3.png"
import kegiatan4 from "../assets/kegiatan4.png"
import kegiatan5 from "../assets/kegiatan5.JPG"
import kegiatan6 from "../assets/kegiatan6.JPG"
import kegiatan7 from "../assets/kegiatan7.JPG"
import kegiatan8 from "../assets/kegiatan8.JPG"
import kegiatan9 from "../assets/kegiatan9.JPG"
import ketuaRt from "../assets/GinanJar.jpg"
import bendahara from "../assets/Bendahara.jpg"
import sekretaris from "../assets/Sekretaris.jpg"

import { FaCaretRight } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import { TbArrowBigLeftLinesFilled } from "react-icons/tb";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-flip';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, EffectCards, Navigation, EffectFlip } from 'swiper/modules';

import Wave from "react-wavify"

const HomePage = () => {
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
         sub: ["Iuran Wajib", "Iuran Sosial", "Iuran Sukarela"]
      },
      {
         nama: "Layanan Permohonan Surat",
         sub: ["Surat Pengantar", "Surat Keterangan"]
      },
      {
         nama: "UMKM",
         sub: ["Nasi Kuning", "Gado-gado", "Pecel"]
      },
      {
         nama: "Emergency Button",
         sub: ["Sedang Dikembangkan"]
      }
   ]

   return (
      <>
         <Navbar />
         <div className="container mx-auto pt-28">
            {/* MainSaction */}
            <div className="relative h-[500px] lg:h-[550px]">

               <div className="flex flex-row">
                  {/* heading */}
                  <div className="z-20 flex flex-col justify-center items-center mt-28 ml-16 gap-4 lg:flex lg:flex-col lg:justify-start lg:items-start">
                     <h1 className="font-bold text-4xl bg-white w-64 rounded-3xl p-3 bg-opacity-65 lg:text-6xl lg:w-full lg:leading-snug lg:tracking-wide lg:text-black lg:font-extrabold">
                        RT 44 <br /> Gading City
                     </h1>
                     <button className="px-6 w-60 bg-orange-400 rounded-xl py-2 font-semibold text-white lg:py-4 lg:text-lg lg:font-bold lg:w-72 hover:bg-orange-600 duration-300 lg:ml-4 lg:shadow-2xl">
                        Info Lebih Lanjut 😊🚀
                     </button>
                  </div>
                  {/* gambar v md lg */}
                  <img
                     className="absolute object-cover top-5 z-10 md:w-1/2 right-0 lg:object-fill lg:h-[530px] rounded-l-full shadow-2xl shadow-orange-500"
                     src={pictureHome}
                     alt="ini gambar home" />
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
                        speed: 0.40,
                        points: 3
                     }}
                  >
                     <defs>
                        <linearGradient id="gradient" gradientTransform="rotate(180)">
                           <stop offset="0" stopColor="white" />
                           <stop offset="0.9" stopColor="black" />
                        </linearGradient>
                        <mask id="mask">
                           <rect x="0" y="0" className="w-full" height="200" fill="url(#gradient)" />
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
                        speed: 0.40,
                        points: 3
                     }}
                  >
                     <defs>
                        <linearGradient id="gradient" gradientTransform="rotate(180)">
                           <stop offset="0" stopColor="white" />
                           <stop offset="0.9" stopColor="black" />
                        </linearGradient>
                        <mask id="mask">
                           <rect x="0" y="0" className="w-full" height="200" fill="url(#gradient)" />
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
                        speed: 0.40,
                        points: 4
                     }}
                  >
                     <defs>
                        <linearGradient id="gradient" gradientTransform="rotate(180)">
                           <stop offset="0" stopColor="white" />
                           <stop offset="0.9" stopColor="black" />
                        </linearGradient>
                        <mask id="mask">
                           <rect x="0" y="0" className="w-full" height="200" fill="url(#gradient)" />
                        </mask>
                     </defs>
                  </Wave>
               </div>
            </div>


            {/* Tentang Kami */}
            <div className="pb-10 bg-gradient-to-r from-primary via-orange-200 to-orange-100 ">
               {/* deskripsi */}
               <div className="flex flex-col gap-4 pt-8">
                  <div className="relative mb-2 lg:mt-10">
                     <div className="h-[3px] w-14 bg-white absolute top-[16px] -left-2 lg:h-2"></div>
                     <h1 className="font-bold text-white text-2xl ml-7 flex items-center gap-2 lg:text-4xl">
                        <FaCaretLeft className="text-white" />
                        Tentang Kami
                        <FaCaretRight className="text-white" />
                     </h1>
                     <div className="h-[3px] w-[180px] bg-white absolute top-[16px] right-0 md:w-[510px] lg:w-[670px] xl:w-[920px] 2xl:w-[1160px] lg:h-2"></div>
                  </div>
                  {/* mode hp */}
                  <div
                     className="flex lg:hidden pt-52 text-sm text-justify leading-6 tracking-wide bg-no-repeat bg-bottom md:pt-10"
                     style={
                        {
                           backgroundImage: `url(${GambarTentang})`,
                           overflowY: 'auto',
                           backgroundSize: '700px',
                           marginRight: '10px',
                           marginLeft: '10px',
                           borderRadius: '20px'
                        }
                     }>
                     <div className="bg-white p-4 flex flex-col gap-4 mt-24 md:mt-80 md:mx-8" style={{ height: '200px', overflowY: 'scroll' }}>
                        <div>
                           <h1 className="text-2xl font-semibold ">Gading City</h1>
                           <p className="text-slate-500">RT 44</p>
                        </div>
                        <div className="text-sm leading-6">
                           <p>Perumahan Gading City RT 44 Sepinggan Baru , merupakan perumahan yang berada di Jln. Sepinggan Pratama Blok G dan H, Kel. Sepinggan Baru, Kec. Balikpapan Selatan, Balikpapan, Kalimantan Timur.</p><br />
                           <p>Kecamatan Balikpapan Selatan memiliki luas wilayah 37,82 km² dan terdiri dari 7 kelurahan, yaitu Kelurahan Gunung Bahagia, Kelurahan Sepinggan, Kelurahan Damai Baru, Kelurahan Sepinggan Raya, Kelurahan Sepinggan Baru, dan Kelurahan Sungai Nangka. Kelurahan yang menjadi sasaran program KKN yang kami adakan adalah Kelurahan Sepinggan Baru, tepatnya di Jalan Sepinggan Pratama Blok G dan H yang tergabung menjadi sebuah RT yaitu RT 44 yang terdiri dari 21 Kepala Keluarga.</p><br />
                           <p>RT 44 Sepinggan Baru memiliki 3 lahan taman, 1 pos penjaga. 4 UMKM, dan 1 praktek dokter. Masyarakat RT 44 rata - rata bekerja sebagai karyawan swasta.</p>
                        </div>
                     </div>
                  </div>
                  {/* mode laptop */}
                  <div className="hidden lg:flex gap-8  mx-4 justify-between relative">
                     <div className="leading-6 w-1/2 text-justify flex flex-col gap-2 mt-5 p-4 z-10">
                        <p className="indent-6 leading-relaxed tracking-wider">Perumahan Gading City RT 44 Sepinggan Baru , merupakan perumahan yang berada di Jln. Sepinggan Pratama Blok G dan H, Kel. Sepinggan Baru, Kec. Balikpapan Selatan, Balikpapan, Kalimantan Timur.</p><br />
                        <p className="indent-6 leading-relaxed tracking-wider">Kecamatan Balikpapan Selatan memiliki luas wilayah 37,82 km² dan terdiri dari 7 kelurahan, yaitu Kelurahan Gunung Bahagia, Kelurahan Sepinggan, Kelurahan Damai Baru, Kelurahan Sepinggan Raya, Kelurahan Sepinggan Baru, dan Kelurahan Sungai Nangka. Kelurahan yang menjadi sasaran program KKN yang kami adakan adalah Kelurahan Sepinggan Baru, tepatnya di Jalan Sepinggan Pratama Blok G dan H yang tergabung menjadi sebuah RT yaitu RT 44 yang terdiri dari 21 Kepala Keluarga.</p><br />
                        <p className="indent-6 leading-relaxed tracking-wider">RT 44 Sepinggan Baru memiliki 3 lahan taman, 1 pos penjaga. 4 UMKM, dan 1 praktek dokter. Masyarakat RT 44 rata - rata bekerja sebagai karyawan swasta.</p>
                     </div>
                     <img src={GambarTentang} alt="Gambar Tentang" className="lg:w-1/2" />
                  </div>
               </div>
            </div>

            {/* Kegiatan RT 44 mode web*/}
            <div className="hidden mt-10 mx-6 lg:flex lg:justify-between lg:gap-5">
               {/* slick card 1*/}
               <div className="mt-12 w-1/3 border-2 border-gray-300 pb-10 shadow-2xl">
                  {/* card slick kegiatan */}
                  <Slider {...settingsWeb} className="mt-6">
                     <img
                        src={kegiatan1}
                        alt=""
                        className="w-44 h-44 px-4 lg:w-60 lg:h-60 py-4"
                     />
                     <img
                        src={kegiatan2}
                        alt=""
                        className="w-44 h-44 px-4 lg:w-60 lg:h-60 py-4"
                     />
                     <img
                        src={kegiatan3}
                        alt=""
                        className="w-44 h-44 px-4 lg:w-60 lg:h-60 py-4"
                     />
                     <img
                        src={kegiatan4}
                        alt=""
                        className="w-44 h-44 px-4 lg:w-60 lg:h-60 py-4"
                     />
                  </Slider>
               </div>
               {/* heading */}
               <div className="flex items-center gap-4 justify-center md:flex md:justify-evenly lg:justify-end lg:flex lg:flex-col lg:gap-10">
                  <h1 className="text-2xl font-semibold text-black lg:text-4xl lg:font-extrabold lg:leading-relaxed text-center decoration-primary underline">Kegiatan RT 44 <br /> Gading City</h1>
                  <div>
                     <Swiper
                        effect={'flip'}
                        grabCursor={true}
                        pagination={true}
                        navigation={true}
                        modules={[EffectFlip, Pagination, Navigation]}
                        className="mySwiper w-96 pb-10 "
                     >
                        <SwiperSlide>
                           <img src={GambarLogoRT44} alt="Logo RT 44" className="w-48 h-48 lg:w-96 lg:h-96 rounded-full shadow-2xl" />
                        </SwiperSlide>
                        <SwiperSlide>
                           <img src={BarcodeIg} alt="Barcode ig RT 44" className="rounded-3xl" />
                        </SwiperSlide>

                     </Swiper>
                  </div>
               </div>
               {/* slick card 2*/}
               <div className="mt-12 w-1/3 border-2 border-gray-300  pb-10 shadow-2xl">
                  {/* card slick kegiatan */}
                  <Slider {...settingsWeb} className="mt-6">
                     <img
                        src={kegiatan5}
                        alt=""
                        className="w-44 h-44 px-4 lg:w-60 lg:h-60 py-4"
                     />
                     <img
                        src={kegiatan6}
                        className="w-44 h-44 px-4 lg:w-60 lg:h-60 py-4"
                     />
                     <img
                        src={kegiatan7}
                        alt=""
                        className="w-44 h-44 px-4 lg:w-60 lg:h-60 py-4"
                     />
                     <img
                        src={kegiatan8}
                        alt=""
                        className="w-44 h-44 px-4 lg:w-60 lg:h-60 py-4"
                     />
                     <img
                        src={kegiatan9}
                        alt=""
                        className="w-44 h-44 px-4 lg:w-60 lg:h-60 py-4"
                     />
                  </Slider>
               </div>
            </div>

            {/* kegiatan RT 44 mode hp dan tablet */}
            <div className="block lg:hidden mt-10 mx-4">
               <div className="flex flex-col gap-4">
                  <h1 className="text-2xl font-bold text-black leading-relaxed text-center decoration-primary underline">Kegiatan RT 44 <br /> Gading City</h1>
                  <div>
                     <Swiper
                        effect={'flip'}
                        grabCursor={true}
                        pagination={true}
                        navigation={true}
                        modules={[EffectFlip, Pagination, Navigation]}
                        className="mySwiper w-96 pb-10"
                     >
                        <SwiperSlide>
                           <img src={GambarLogoRT44} alt="Logo RT 44" className=" rounded-full shadow-2xl" />
                        </SwiperSlide>
                        <SwiperSlide>
                           <img src={BarcodeIg} alt="Barcode ig RT 44" className="rounded-3xl" />
                        </SwiperSlide>
                     </Swiper>
                  </div>
               </div>
               <div className="mt-4 w-full border-2 border-gray-300  pb-10 shadow-2xl">
                  {/* card slick kegiatan */}
                  <Slider {...settingsHp} className="mt-6 mx-4">
                     <div className="flex flex-col text-center">
                        <img
                           src={kegiatan1}
                           alt="kegiatan1"
                           className="w-full h-52 mb-3 px-2"
                        />
                        <h2 className="font-light text-sm">Kegiatan</h2>
                        <p className="text-base font-medium">Ramah Tamah</p>
                     </div>
                     <div className="flex flex-col text-center">
                        <img
                           src={kegiatan2}
                           alt="kegiatan2"
                           className="w-full h-52 mb-3 px-2"
                        />
                        <h2 className="font-light text-sm">Kegiatan</h2>
                        <p className="text-base font-medium">HUT NKRI</p>
                     </div>
                     <div className="flex flex-col text-center">
                        <img
                           src={kegiatan3}
                           alt="kegiatan3"
                           className="w-full h-52 mb-3 px-2"
                        />
                        <h2 className="font-light text-sm">Kegiatan</h2>
                        <p className="text-base font-medium">Gotong Royong</p>
                     </div>
                     <div className="flex flex-col text-center">
                        <img
                           src={kegiatan4}
                           alt="kegiatan4"
                           className="w-full h-52 mb-3 px-2"
                        />
                        <h2 className="font-light text-sm">Kegiatan</h2>
                        <p className="text-base font-medium">Kerja Bakti</p>
                     </div>
                     <div className="flex flex-col text-center">
                        <img
                           src={kegiatan5}
                           alt="kegiatan4"
                           className="w-full h-52 mb-3 px-2"
                        />
                        <h2 className="font-light text-sm">Kegiatan</h2>
                        <p className="text-base font-medium">Familiy Gathering</p>
                     </div>
                     <div className="flex flex-col text-center">
                        <img
                           src={kegiatan7}
                           alt="kegiatan4"
                           className="w-full h-52 mb-3 px-2"
                        />
                        <h2 className="font-light text-sm">Kegiatan</h2>
                        <p className="text-base font-medium">Semarak Bersama Warga</p>
                     </div>
                  </Slider>
               </div>
            </div>

            {/* Layanan RT 44 */}
            <div className="mt-16 lg:mt-20 mx-4 mb-5">
               <div className="relative">
                  <div className="hidden lg:flex absolute h-1 w-[40%] top-[38px] bg-black"></div>
                  <h1 className="flex items-center justify-center gap-3 text-2xl font-semibold underline decoration-primary text-center mb-7 lg:text-3xl lg:font-bold lg:leading-10">
                     <TbArrowBigRightLinesFilled className="hidden lg:flex" />
                     Layanan RT 44 <br /> Gading City
                     <TbArrowBigLeftLinesFilled className="hidden lg:flex" />
                  </h1>
                  <div className="hidden lg:flex absolute h-1 w-[40%] top-[38px] right-0 bg-black"></div>
               </div>
               <div className="grid grid-cols-2 gap-6 lg:gird lg:grid-cols-4">
                  {menuLayanan.map((item, index) => (
                     <div key={index} className="relative cursor-pointer hover:scale-105 duration-300">
                        <div className="h-[370px] bg-cover bg-center" style={{ backgroundImage: `url(${GambarLayanan})` }}>
                           <div className="bg-gradient-to-b from-black to-transparent w-full h-full lg:hover:bg-gradient-to-b lg:hover:from-orange-400 group">
                              <div className="absolute inset-2 flex flex-col gap-3 justify-start items-start px-3 pt-6 lg:group-hover:text-black lg:group-hover:inset-5 duration-300">
                                 <h2 className="font-semibold text-lg text-primary lg:group-hover:text-3xl lg:group-hover:text-white lg:text-xl ">{item.nama}</h2>
                                 <ul className="italic text-sm lg:text-base text-white lg:group-hover:text-lg lg:group-hover:font-semibold">
                                    {item.sub.map((subItem, subIndex) => (
                                       <li key={subIndex}>{subItem}</li>
                                    ))}
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* inti pedngurus mode website*/}
            <div className="hidden mt-24 mx-4 relative lg:flex justify-between items-center ">
               {/* heading */}
               <h1 className="text-5xl font-bold ml-14 leading-relaxed tracking-wider text-orange-600">Inti Pengurus <br /> RT 44 Gading City</h1>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                  className="absolute top-0 bg-gradient-to-b from-orange-200"
               >
                  <path
                     fill="#FABA59"
                     fillOpacity="1"
                     d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,170.7C672,181,768,171,864,160C960,149,1056,139,1152,138.7C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
                  </path>
               </svg>
               {/* card pengurus */}
               <Swiper
                  effect={'coverflow'}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={'auto'}
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
                  <SwiperSlide className="flex justify-center flex-col text-center gap-4">
                     <img src={ketuaRt} alt="Ketua RT 44" className="object-cover w-full h-80" />
                     <div className="flex flex-col gap-3 px-4 pb-4">
                        <div className="">
                           <h1 className="font-semibold text-2xl">Ginanjar Kartasasmita</h1>
                           <p className="font-light">Ketua RT 44</p>
                        </div>
                        <q className="italic text-sm">Ambillah risiko, melewati batasanmu, dan berani bermimpi. Hidupmu akan jauh lebih indah dan bermakna.</q>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide className="flex justify-center flex-col text-center gap-4">
                     <img src={sekretaris} alt="Sekretaris RT 44" className="object-cover w-full h-80" />
                     <div className="flex flex-col gap-3 px-4 pb-4">
                        <div className="">
                           <h1 className="font-semibold text-2xl">Sahar</h1>
                           <p className="font-light">Sekretaris RT 44</p>
                        </div>
                        <q className="italic text-sm">Berusahalah menjadi versi terbaik dari dirimu sendiri dan inspirasi bagi orang lain.</q>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide className="flex justify-center flex-col text-center gap-4">
                     <img src={bendahara} alt="Bendahara RT 44" className="object-cover w-full h-80" />
                     <div className="flex flex-col gap-3 px-4 pb-4">
                        <div className="">
                           <h1 className="font-semibold text-2xl">Dios Andri Baskoro</h1>
                           <p className="font-light">Bendahara RT 44</p>
                        </div>
                        <q className="italic text-sm">Cinta, rasa syukur, dan kebaikan adalah kunci untuk menjalani hidup yang indah dan bermakna.</q>
                     </div>
                  </SwiperSlide>
               </Swiper>
               <svg className="absolute bottom-0 bg-gradient-to-t from-orange-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FABA59" fillOpacity="1" d="M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,208C672,213,768,171,864,170.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>

            {/* inti pengurus mode hp dan tablet */}
            <div className="mx-4 mt-14 flex flex-col gap-6 lg:hidden">
               <div className="flex flex-col gap-8 justify-center items-center w-full shadow-lg rounded-3xl bg-secondary bg-opacity-40">
                  <div className="flex justify-center items-center gap-8 px-8 py-2 border-2 mt-6 rounded-2xl shadow-md">
                     <div>
                        <h1 className="text-primary font-semibold text-2xl">Inti Pengurus</h1>
                        <p className="font-light text-slate-600">RT 44 Gading City</p>
                     </div>
                     <div className="rounded-full shadow-lg w-28">
                        <img src={GambarLogoRT44} alt="logo rt 44" className="" />
                     </div>
                  </div>
                  {/* card slide */}
                  <Swiper
                     effect={'cards'}
                     grabCursor={true}
                     modules={[EffectCards]}
                     className="mySwiper w-[60%] mt-4 mb-6"
                  >
                     <SwiperSlide className="flex flex-col justify-center items-center w-full">
                        <div className="border-2 border-orange-700 bg-primary p-4 rounded-2xl w-60 text-center">
                           <img src={ketuaRt} alt="Ketua RT 44" className="object-cover w-full h-60" />
                           <div className="mt-2 flex flex-col gap-4">
                              <div className="flex flex-col gap-1">
                                 <h1 className="text-lg font-medium">Ginanjar Kartasasmita</h1>
                                 <p className="text-sm font-light">Ketua RT 44</p>
                              </div>
                              <q className="italic text-xs">Ambillah risiko, melewati batasanmu, dan berani bermimpi. Hidupmu akan jauh lebih indah dan bermakna.</q>
                           </div>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide className="flex flex-col justify-center items-center">
                        <div className="border-2 border-orange-700 bg-primary p-4 rounded-2xl w-60 text-center">
                           <img src={sekretaris} alt="Sekretaris" className="object-cover w-full h-60" />
                           <div className="mt-2 flex flex-col gap-4">
                              <div className="flex flex-col gap-1">
                                 <h1 className="text-lg font-medium">Sahar</h1>
                                 <p className="text-sm font-light">Sekretaris RT 44</p>
                              </div>
                              <q className="italic text-xs">Berusahalah menjadi versi terbaik dari dirimu sendiri dan inspirasi bagi orang lain.</q>
                           </div>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide className="flex flex-col justify-center items-center">
                        <div className="border-2 border-orange-700 bg-primary p-4 rounded-2xl w-60 text-center">
                           <img src={bendahara} alt="Bendahara" className="object-cover w-full h-60" />
                           <div className="mt-2 flex flex-col gap-4">
                              <div className="flex flex-col gap-1">
                                 <h1 className="text-lg font-medium">Dios Andri Baskoro</h1>
                                 <p className="text-sm font-light">Bendahara RT 44</p>
                              </div>
                              <q className="italic text-xs">Cinta, rasa syukur, dan kebaikan adalah kunci untuk menjalani hidup yang indah dan bermakna.</q>
                           </div>
                        </div>
                     </SwiperSlide>
                  </Swiper>
               </div>
            </div>
         </div>
         <Footer />
      </>
   )
}

export default HomePage