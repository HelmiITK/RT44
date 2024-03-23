import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaUserTag } from "react-icons/fa6";
import { TiInfoLargeOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRef } from "react";

const UmkmRt = () => {
   const umkm = [
      {
         nama: "Nasi Kuning",
         owner: "Sarah Najwa",
         img: "https://plus.unsplash.com/premium_photo-1698843272807-5889323c0362?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmljZSUyMHllbGxvd3xlbnwwfHwwfHx8MA%3D%3D",
         deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quaerat ab commodi odit laudantium ipsa eaque debitis? Sint, nemo nobis?"
      },
      {
         nama: "Loundry",
         owner: "Sulindah",
         img: "https://media.istockphoto.com/id/1302553919/photo/white-laundry-machines-and-dryers-in-a-row-in-laundromat-with-wheeled-laundry-baskets.webp?b=1&s=170667a&w=0&k=20&c=CtukwKjHm96IZwScAd_Hr1lkUZ1r_KTj6OIR70lug7U=",
         deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quaerat ab commodi odit laudantium ipsa eaque debitis? Sint, nemo nobis?"
      },
      {
         nama: "Bank Sampah",
         owner: "Rudi Subianto",
         img: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbmslMjB0cmFzaHxlbnwwfHwwfHx8MA%3D%3D",
         deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quaerat ab commodi odit laudantium ipsa eaque debitis? Sint, nemo nobis?"
      },
      {
         nama: "Mamah Frozen",
         owner: "Asry",
         img: "https://images.unsplash.com/photo-1541214113241-21578d2d9b62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZG9nfGVufDB8fDB8fHww",
         deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quaerat ab commodi odit laudantium ipsa eaque debitis? Sint, nemo nobis?"
      },
   ]

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
         <div className="pt-28 container mx-auto lg:pt-32" ref={linkRef}>
            {/* button back to home */}
            <Link
               as={Link}
               to={"/"}
               className="mx-5 cursor-pointer flex gap-2 items-center hover:scale-105 duration-300 hover:text-primary md:w-1/6 md:mx-12 hover:underline"
            >
               <IoIosArrowRoundBack className="w-6 h-6 md:w-8 md:h-8" />
               <p className="md:text-lg">
                  Kembali
               </p>
            </Link>
            {/* heading */}
            <div className="mx-4 text-center flex flex-col gap-2">
               <h1 className="font-semibold text-2xl tracking-widest lg:font-bold lg:text-4xl decoration-primary underline">UMKM</h1>
               <p className="text-sm font-light text-slate-700 lg:text-lg">Usaha Mikro, Kecil dan Menengah</p>
            </div>
            {/* card umkm */}
            <div className="md:grid md:grid-cols-2">
               {umkm.map((item, index) => (
                  <div key={index} className="mx-4 mt-8 border-2 border-slate-100 p-6 rounded-2xl shadow-xl">
                     <img
                        src={item.img}
                        alt="Gambar UMKM"
                        className="rounded-t-3xl object-cover w-full h-56"
                     />
                     <div className="flex flex-col gap-4 mt-6">
                        <div className="flex items-center gap-4">
                           <SiHomeassistantcommunitystore className="text-primary w-6 h-6" />
                           <h1 className="font-medium text-lg">{item.nama}</h1>
                        </div>
                        <div className="flex items-center gap-4">
                           <FaUserTag className="text-primary w-6 h-6" />
                           <h2 className="text-sm font-normal">{item.owner}</h2>
                        </div>
                        <div className="flex gap-4 shadow-md p-3 rounded-b-2xl">
                           <TiInfoLargeOutline className="text-primary w-24 h-24" />
                           <p className="text-sm font-light leading-6 text-justify indent-4">
                              {item.deskripsi}
                           </p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <Footer
            linkRef={linkRef}
            goto={goto}
         />
      </div>
   )
}

export default UmkmRt;