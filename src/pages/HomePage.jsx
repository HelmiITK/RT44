import Navbar from "../components/Navbar"
import GambarTentang from "../assets/GambarTentang.png"
import pictureHome from "../assets/homePicture.png"
import { FaCaretRight } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import GambarLogoRT44 from "../assets/GambarLogoRT44.png"
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import { TbArrowBigLeftLinesFilled } from "react-icons/tb";

const HomePage = () => {
   const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
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
            <div className="relative md:flex md:flex-row-reverse md:justify-between md:items-center h-[450px] lg:h-[500px] lg:mt-14">
               {/* gambar v mobile */}
               <img className="absolute -z-10 md:hidden" src={pictureHome} alt="ini gambar home" />
               {/* gambar v md lg */}
               <img className="hidden md:flex md:w-2/4 lg:w-1/2 lg:shadow-2xl lg:shadow-orange-400 rounded-l-full" src={pictureHome} alt="ini gambar home" />
               {/* heading */}
               <div className="flex flex-col gap-2 pt-20 pl-24 md:pt-0 md:pl-0 lg:gap-3 lg:ml-10">
                  <h1 className="font-bold text-4xl bg-white w-64 rounded-3xl p-3 bg-opacity-65 lg:text-6xl lg:w-full lg:leading-snug lg:tracking-wide lg:text-black lg:font-extrabold">
                     RT 44 <br /> Gading City
                  </h1>
                  <button className="px-6 w-60 bg-orange-300 rounded-xl py-2 font-semibold text-white lg:py-4 lg:text-lg lg:font-bold lg:w-72 hover:bg-orange-500 duration-300 lg:ml-4 lg:shadow-xl">Info Lebih Lanjut 😊🚀</button>
               </div>
            </div>

            {/* Tentang Kami */}
            <div className="pb-10 bg-gradient-to-r from-orange-400 via-orange-200 to-orange-100 ">
               {/* deskripsi */}
               <div className="flex flex-col gap-4 pt-8">
                  <div className="relative mb-2 lg:mt-10">
                     <div className="h-[3px] w-14 bg-white absolute top-[14px] -left-4 lg:h-2"></div>
                     <h1 className="font-bold text-white text-2xl ml-7 flex items-center gap-2 lg:text-3xl">
                        <FaCaretLeft className="text-white" />
                        Tentang Kami
                        <FaCaretRight className="text-white" />
                     </h1>
                     <div className="h-[3px] w-[245px] bg-white absolute top-[14px] right-0 lg:w-[1210px] lg:h-2"></div>
                  </div>
                  {/* mode hp */}
                  <div
                     className="flex lg:hidden pt-52 text-sm text-justify leading-6 tracking-wide bg-no-repeat bg-center md:pt-10"
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
                  <div className="hidden lg:flex gap-4 mx-4 justify-between">
                     <div className="leading-6 w-1/2 text-justify flex flex-col gap-2 mt-5">
                        <p>Perumahan Gading City RT 44 Sepinggan Baru , merupakan perumahan yang berada di Jln. Sepinggan Pratama Blok G dan H, Kel. Sepinggan Baru, Kec. Balikpapan Selatan, Balikpapan, Kalimantan Timur.</p><br />
                        <p>Kecamatan Balikpapan Selatan memiliki luas wilayah 37,82 km² dan terdiri dari 7 kelurahan, yaitu Kelurahan Gunung Bahagia, Kelurahan Sepinggan, Kelurahan Damai Baru, Kelurahan Sepinggan Raya, Kelurahan Sepinggan Baru, dan Kelurahan Sungai Nangka. Kelurahan yang menjadi sasaran program KKN yang kami adakan adalah Kelurahan Sepinggan Baru, tepatnya di Jalan Sepinggan Pratama Blok G dan H yang tergabung menjadi sebuah RT yaitu RT 44 yang terdiri dari 21 Kepala Keluarga.</p><br />
                        <p>RT 44 Sepinggan Baru memiliki 3 lahan taman, 1 pos penjaga. 4 UMKM, dan 1 praktek dokter. Masyarakat RT 44 rata - rata bekerja sebagai karyawan swasta.</p>
                     </div>
                     <img src={GambarTentang} alt="Gambar Tentang" />
                  </div>
               </div>
            </div>

            {/* Kegiatan RT 44 */}
            <div className="mt-10 mx-4 lg:grid lg:grid-cols-2">
               {/* heading */}
               <div className="flex items-center gap-4 justify-center md:flex md:justify-evenly lg:justify-end lg:flex lg:flex-row-reverse lg:gap-10">
                  <h1 className="text-2xl font-semibold text-black lg:text-4xl lg:font-extrabold lg:leading-relaxed lg:">Kegiatan RT 44 <br /> Gading City</h1>
                  <img src={GambarLogoRT44} alt="Logo RT 44" className="w-48 h-48 lg:w-96 lg:h-96 rounded-full shadow-2xl" />
               </div>
               <div className="mt-12 border-2 border-orange-500 p-6 rounded-xl shadow-2xl shadow-orange-400">
                  {/* card slick kegiatan */}
                  <Slider {...settings} className="mt-6">
                     <img
                        src="https://images.unsplash.com/photo-1710441970901-c9c2ae39a77c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="w-44 h-44 px-4 lg:w-60 lg:h-60"
                     />
                     <img
                        src="https://images.unsplash.com/photo-1707327259268-2741b50ef5e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="w-44 h-44 px-4 lg:w-60 lg:h-60"
                     />
                     <img
                        src="https://plus.unsplash.com/premium_photo-1710631508355-fb67bb79cd74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="w-44 h-44 px-4 lg:w-60 lg:h-60"
                     />
                     <img
                        src="https://images.unsplash.com/photo-1682685794690-dea7c8847a50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="w-44 h-44 px-4 lg:w-60 lg:h-60"
                     />
                  </Slider>
                  {/* deskripsi kegiatan */}
                  <div className="text-sm font-light mt-8 text-justify leading-6 tracking-wide lg:text-base lg">
                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum eaque nisi quisquam fuga magni voluptates blanditiis ducimus enim, illo expedita optio totam sed impedit facilis et temporibus fugit sequi deleniti quia illum quod sunt? Accusamus temporibus rem facilis veritatis, eos dicta quae error veniam adipisci illum iste doloremque, et odio!</p>
                  </div>
               </div>
            </div>

            {/* Layanan RT 44 */}
            <div className="mt-20 mx-4 mb-5">
               <div className="relative">
                  <div className="hidden lg:flex absolute h-1 w-[40%] top-[38px] bg-black"></div>
                  <h1 className="flex items-center justify-center gap-3 text-2xl font-medium text-center mb-7 lg:text-3xl lg:font-semibold lg:leading-10">
                     <TbArrowBigRightLinesFilled className="hidden lg:flex"/>
                     Layanan RT 44 <br /> Gading City
                     <TbArrowBigLeftLinesFilled className="hidden lg:flex"/>
                  </h1>
                  <div className="hidden lg:flex absolute h-1 w-[40%] top-[38px] right-0 bg-black"></div>
               </div>
               <div className="grid grid-cols-2 gap-6 lg:gird lg:grid-cols-4">
                  {menuLayanan.map((item, index) => (
                     <div key={index} className="relative cursor-pointer hover:scale-105 duration-300">
                        <div className="h-80 bg-cover bg-center" style={{ backgroundImage: `url(${GambarTentang})` }}>
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
            
            {/* inti pengurus */}
            <div></div>
         </div>
      </>
   )
}

export default HomePage