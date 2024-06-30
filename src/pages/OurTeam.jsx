import bgITK from "../assets/bg-itk.jpeg";
import logoITK from "../assets/Logo ITK.png";
import { FaInstagram } from "react-icons/fa";
import helmi from "../assets/helmi.png";
import rajab from "../assets/Rajab.png";
import rudi from "../assets/Rudi.png";
import asry from "../assets/Asry.png";
import sarah from "../assets/Sarah.png";
import sulindah from "../assets/Sulindah.png";
import jio from "../assets/jio.png";
import { Link } from "react-router-dom";

const OurTeam = () => {
  const Team = [
    {
      nama: "Helmi",
      job: "Tim Pengembang Website (Ketua)",
      prodi: "Informatika",
      kelahiran: "Muara Badak, 22 Juni 2002",
      sosmed: "https://www.instagram.com/helmitwzzz/",
      quotes:
        "jangan takut badai hari ini bisa jadi besok pelangi keindahan menghampiri mu",
      foto: helmi,
      tagIg: "@helmitwzz",
    },
    {
      nama: "nur ali rajab",
      job: "tim pengembang Website (Perkamjin)",
      prodi: "Informatika",
      kelahiran: "Sotek, 03 September 2003",
      sosmed: "https://www.instagram.com/helmitwzzz/",
      quotes:
        "Hidup sekali hiduplah yg berarti, berani hidup tak takut mati, takut mati jangan hidup, takut hidup mati saja",
      foto: rajab,
      tagIg: "@_alirajab3",
    },
    {
      nama: "Rudi Subriyanto",
      job: "Perkamjin",
      prodi: " Informatika",
      kelahiran: "Balikpapan, 28 Agustus 2002",
      sosmed: "https://www.instagram.com/rudi_subriyanto?igsh=cXJ0eHFzOXcwNWtm",
      quotes:
        "Waktu tidak bisa di ulang lagi, waktu akan terus maju kedepan. jangan sedih karena itu telah berakhir tapi berbahagialah karena itu pernah terjadi.",
      foto: rudi,
      tagIg: "@rudi_subriyanto",
    },
    {
      nama: "Asry",
      job: "Sekretaris",
      prodi: "Sistem Informasi",
      kelahiran: "Kuaro, 13 Januari 2003",
      sosmed: "https://www.instagram.com/asryatiii",
      quotes: "apapun yang terjadi, jangan lewatkan indomie kari 🤙",
      foto: asry,
      tagIg: "@asryatiii",
    },
    {
      nama: "Sarah Najwa",
      job: "PDD",
      prodi: "Sistem Informasi",
      kelahiran: "Balikpapan, 23 Maret 2003",
      sosmed:
        "https://www.instagram.com/heysarnaj?igsh=MThwYWw3Mmtna2RmNg%3D%3D&utm_source=qr",
      quotes: "Hidup memang sulit. Kalau gamau sulit tidur aja",
      foto: sarah,
      tagIg: "@heysarnaj",
    },
    {
      nama: "Jio Wilson",
      job: "Designer",
      prodi: "Sistem Informasi",
      kelahiran: "Balikpapan, 03 Oktober 2003",
      sosmed: "https://www.instagram.com/jio.wilson/",
      quotes:
        "It's not good to expect too much, but you can't do anything if you're being overly pessimistic. If you just wait thinking it's useless, nothing will come of it",
      foto: jio,
      tagIg: "@jio.wilson",
    },
    {
      nama: "Sulindah Permatasari",
      job: "Bendahara",
      prodi: "Ilmu Aktuaria",
      kelahiran: "Balikpapan, 27 Juni 2003",
      sosmed:
        "https://www.instagram.com/sulindahhh_?igsh=ZDIwN282cGIzY2Ew&utm_source=qr",
      quotes: " healing - healing - wisuda",
      foto: sulindah,
      tagIg: "@Sulindahhh_",
    },
  ];
  return (
    <>
      {/* mode hp */}
      <div className="container mx-auto lg:hidden">
        <div className="relative flex flex-col items-center gap-4 bg-cyan-100">
          <Link as={Link} to={"/"} className="flex items-center gap-4 mt-4">
            <img src={logoITK} alt="logo itk" className="w-28" />
            <div>
              <h2 className="font-serif text-2xl font-bold ">Our Team</h2>
              <h2 className="font-serif text-2xl font-bold ">
                KKN B1 2023-2024
              </h2>
            </div>
          </Link>
          <div className="grid grid-cols-1 gap-8 mx-2 mt-2">
            {/* card profile 1 */}
            {Team.map((item, i) => (
              <div key={i} className="shadow-lg card w-96 glass">
                <figure>
                  <img src={item?.foto} alt="car!" className="" />
                </figure>
                <div className="card-body">
                  <h2 className="capitalize card-title">{item?.nama}</h2>
                  <div className="w-full h-px bg-gray-400"></div>
                  <div>
                    <h2 className="text-base font-medium capitalize">
                      {item?.job}
                    </h2>
                    <h3 className="text-sm font-light">{item?.prodi}</h3>
                    <h4 className="text-sm font-light">{item?.kelahiran}</h4>
                  </div>
                  <div className="w-full h-px bg-gray-600"></div>
                  <div className="card-actions ">
                    <q className="font-sans text-sm italic font-light">
                      {item?.quotes}
                    </q>
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
      <div className="container hidden mx-auto lg:block">
        <Link
          as={Link}
          to={"/"}
          className="relative flex flex-col items-center gap-4 bg-cyan-100"
        >
          <img
            src={bgITK}
            alt="foto itk"
            className="absolute object-cover w-full h-full bg-repeat-y"
          />
          <div className="z-10 flex items-center justify-center gap-6 mt-2 tracking-wide">
            <img src={logoITK} alt="logo itk" className="w-[13%]" />
            <div className="flex flex-col items-start">
              <h2 className="mt-5 font-serif text-4xl font-bold text-blue-800">
                Our Team
              </h2>
              <h3 className="mt-2 font-serif text-2xl font-bold text-blue-800">
                KKN B1 2023-2024
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8 mx-2 mt-2 mb-8">
            {/* card profile 1 */}
            {Team.map((item, i) => (
              <div key={i} className="shadow-lg card w-96 glass drop-shadow-md">
                <figure>
                  <img src={item?.foto} alt="car!" />
                </figure>
                <div className="card-body">
                  <h2 className="capitalize card-title">{item?.nama}</h2>
                  <div className="w-full h-px bg-gray-400"></div>
                  <div>
                    <h2 className="text-base font-medium capitalize">
                      {item?.job}
                    </h2>
                    <h3 className="text-sm font-light">{item?.prodi}</h3>
                    <h4 className="text-sm font-light">{item?.kelahiran}</h4>
                  </div>
                  <div className="w-full h-px bg-gray-600"></div>
                  <div className="card-actions ">
                    <q className="px-2 py-1 font-sans text-sm italic font-light text-white bg-gray-400 rounded-md">
                      {item?.quotes}
                    </q>
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
        </Link>
      </div>
    </>
  );
};

export default OurTeam;
