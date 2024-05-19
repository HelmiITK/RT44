import bgITK from "../assets/bg-itk.jpeg";
import helmi from "../assets/helmi.jpg";
import logoITK from "../assets/Logo ITK.png"
import { FaInstagram } from "react-icons/fa";

const OurTeam = () => {
   const Team = [
      {
         nama: "helmi",
         job: "tim pengembang",
         prodi: "informatika",
         kelahiran: "Muara Badak, 22 Juni 2002",
         sosmed: "https://www.instagram.com/helmitwzzz/",
         quotes: "jangan takut badai hari ini bisa jadi besok pelangi keindahan menghampiri mu",
         foto: helmi,
         tagIg: "@helmitwzz",
      },
      {
         nama: "nur ali rajab",
         job: "tim pengembang",
         prodi: "informatika",
         kelahiran: "Sotek, 03 September 2003",
         sosmed: "https://www.instagram.com/helmitwzzz/",
         quotes: "jangan takut badai hari ini bisa jadi besok pelangi keindahan menghampiri mu",
         foto: helmi,
         tagIg: "@_alirajab3",
      },
      {
         nama: "nur ali rajab",
         job: "tim pengembang",
         prodi: "informatika",
         kelahiran: "Sotek, 03 September 2003",
         sosmed: "https://www.instagram.com/helmitwzzz/",
         quotes: "jangan takut badai hari ini bisa jadi besok pelangi keindahan menghampiri mu",
         foto: helmi,
         tagIg: "@_alirajab3",
      },
      {
         nama: "nur ali rajab",
         job: "tim pengembang",
         prodi: "informatika",
         kelahiran: "Sotek, 03 September 2003",
         sosmed: "https://www.instagram.com/helmitwzzz/",
         quotes: "jangan takut badai hari ini bisa jadi besok pelangi keindahan menghampiri mu",
         foto: helmi,
         tagIg: "@_alirajab3",
      },
      {
         nama: "nur ali rajab",
         job: "tim pengembang",
         prodi: "informatika",
         kelahiran: "Sotek, 03 September 2003",
         sosmed: "https://www.instagram.com/helmitwzzz/",
         quotes: "jangan takut badai hari ini bisa jadi besok pelangi keindahan menghampiri mu",
         foto: helmi,
         tagIg: "@_alirajab3",
      },
      {
         nama: "nur ali rajab",
         job: "tim pengembang",
         prodi: "informatika",
         kelahiran: "Sotek, 03 September 2003",
         sosmed: "https://www.instagram.com/helmitwzzz/",
         quotes: "jangan takut badai hari ini bisa jadi besok pelangi keindahan menghampiri mu",
         foto: helmi,
         tagIg: "@_alirajab3",
      },
      {
         nama: "nur ali rajab",
         job: "tim pengembang",
         prodi: "informatika",
         kelahiran: "Sotek, 03 September 2003",
         sosmed: "https://www.instagram.com/helmitwzzz/",
         quotes: "jangan takut badai hari ini bisa jadi besok pelangi keindahan menghampiri mu",
         foto: helmi,
         tagIg: "@_alirajab3",
      }
   ]
   return (
      <>

         {/* mode hp */}
         <div className="container mx-auto lg:hidden">
            <div className="relative flex flex-col gap-4 items-center bg-cyan-100">
               {/* <img
               src={bgITK}
               alt="foto itk"
               className="absolute h-screen object-cover w-full"
            /> */}
               <h2 className="text-2xl font-bold mt-5">Our Team</h2>
               <div className="mx-2 mt-2 grid grid-cols-1 gap-8">
                  {/* card profile 1 */}
                  {Team.map((item, i) => (
                     <div key={i} className="card w-96 glass shadow-lg drop-shadow-md">
                        <figure>
                           <img
                              src={item?.foto}
                              alt="car!"
                           />
                        </figure>
                        <div className="card-body">
                           <h2 className="card-title capitalize">{item?.nama}</h2>
                           <div className="h-px w-full bg-gray-400"></div>
                           <div>
                              <h2 className="capitalize text-base font-medium">{item?.job}</h2>
                              <h3 className="text-sm font-light">{item?.prodi}</h3>
                              <h4 className="text-sm font-light">{item?.kelahiran}</h4>
                           </div>
                           <div className="h-px w-full bg-gray-600"></div>
                           <div className="card-actions ">
                              <q className="text-sm font-light italic font-sans">{item?.quotes}</q>
                              <a
                                 href={item?.sosmed}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="flex gap-2 items-center justify-center py-[5px] px-4 w-full rounded-lg bg-blue-500 bg-opacity-40 hover:bg-blue-500 duration-300 hover:drop-shadow-lg hover:text-white hover:scale-105"
                              >
                                 <FaInstagram className="w-8 h-8" />
                                 <h2>{item?.tagIg}</h2>
                              </a>
                           </div>
                        </div>
                     </div>
                  ))}

               </div>
            </div>
         </div>

         {/* mode web */}
         <div className="hidden lg:block container mx-auto">
            <div className="relative flex flex-col gap-4 items-center bg-cyan-100">
               <img
                  src={bgITK}
                  alt="foto itk"
                  className="absolute h-full object-cover bg-repeat-y w-full"
               />
               <div className="z-10 flex justify-center gap-6 items-center tracking-wide mt-2">
                  <img src={logoITK} alt="logo itk" className="w-[13%]" />
                  <div className="flex flex-col items-start">
                     <h2 className="text-4xl font-bold mt-5 font-serif text-blue-800">Our Team</h2>
                     <h3 className="text-2xl font-bold mt-2 font-serif text-blue-800">KKN B1 2023-2024</h3>
                  </div>
               </div>
               <div className="mx-2 mt-2 grid grid-cols-3 gap-8 mb-8">
                  {/* card profile 1 */}
                  {Team.map((item, i) => (
                     <div key={i} className="card w-96 glass shadow-lg drop-shadow-md">
                        <figure>
                           <img
                              src={item?.foto}
                              alt="car!"
                           />
                        </figure>
                        <div className="card-body">
                           <h2 className="card-title capitalize">{item?.nama}</h2>
                           <div className="h-px w-full bg-gray-400"></div>
                           <div>
                              <h2 className="capitalize text-base font-medium">{item?.job}</h2>
                              <h3 className="text-sm font-light">{item?.prodi}</h3>
                              <h4 className="text-sm font-light">{item?.kelahiran}</h4>
                           </div>
                           <div className="h-px w-full bg-gray-600"></div>
                           <div className="card-actions ">
                              <q className="text-sm font-light italic font-sans text-gray-500">{item?.quotes}</q>
                              <a
                                 href={item?.sosmed}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="flex gap-2 items-center justify-center py-[5px] px-4 w-full rounded-lg bg-cyan-300 bg-opacity-40 hover:bg-cyn-500 duration-300 hover:drop-shadow-lg hover:text-white hover:scale-105"
                              >
                                 <FaInstagram className="w-8 h-8" />
                                 <h2>{item?.tagIg}</h2>
                              </a>
                           </div>
                        </div>
                     </div>
                  ))}

               </div>
            </div>
         </div>
      </>
   )
}

export default OurTeam
