import { NavLink, Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect } from "react";
import logo from "../assets/Logo.svg"
import { FaPhoneVolume } from "react-icons/fa6";

const Navbar = () => {
  const [openHamburger, setOpenHamburger] = useState(false);

  const handleHamburgerClick = (e) => {
    e.stopPropagation();
    setOpenHamburger(!openHamburger);
    // setSelectedIcon(null);
  };

  // logic ketika diklik diluar hamburgermenu maka otomatis tertutup dan begitu juga ketika klik pindah halaman
  useEffect(() => {
    const closeHamburgerMenu = () => {
      setOpenHamburger(false);
    };

    // Menambahkan event listener ke window
    window.addEventListener("click", closeHamburgerMenu);
  }, []);

  const Menus = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Profile",
      link: "/myprofile",
    },
    {
      name: "Pembayaran",
      link: "/payment"
    },
    {
      name: "Permohonon Surat",
      link: "/permohonanSurat"
    }
  ]

  return (
    <>
      <div className="w-full flex items-center justify-between mt-4 bg-white shadow-md mb-4">
        {/* logo */}
        <div className="flex items-center gap-2 mb-2 ml-2">
          <Link to={"/"}>
            <img src={logo} alt="Ini Logo" className="w-20" />
          </Link>
          <FaPhoneVolume />
          <p>Call Us - 085346901814
          </p>

        </div>
        {/* Navmenu Mobile */}
        <div className="flex mx-4 lg:hidden">
          <button
            className="px-4"
            onClick={handleHamburgerClick}
          >
            {openHamburger ? (
              <RxCross2 className="w-10 h-10" />
            ) : (
              <FiMenu className="w-10 h-10" />
            )}
          </button>
          {/* jika dia login ini muncul */}
          <div
            className={`${openHamburger ? "translate-y-0" : "-translate-y-[350px]"
              } transition-transform duration-300 ease-in-out absolute top-4 right-4 mt-24 bg-gradient-to-l from-orange-200 border border-orange-300 px-5 py-6 rounded-md shadow-lg `}
          >
            <ul className="flex flex-col gap-2">
              {Menus.map((item, index) => (
                <li key={index} className="hover:text-orange-500">
                  <NavLink to={item.link}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* jika belum login ini muncul */}
          <div>
            <button className="py-2 px-4 rounded-md bg-orange-300 text-white tracking-wide font-medium">Login</button>
          </div>
        </div>

        {/* Navmenu website */}
        <div className="hidden lg:flex lg:gap-4 lg:items-center">
          {Menus.map((item, index) => (
            <ul key={index}>
              <Link to={item.link}>
                <li>{item.name}</li>
              </Link>
            </ul>
          ))}
          {/* jika belum login ini muncul */}
          <div className="mx-4">
            <button className="py-2 px-12 rounded-md bg-orange-300 text-white tracking-wider hover:text-orange-500 hover:bg-white hover:border-orange-500 hover:border-2 duration-300 hover:shadow-lg shadow-orange-500">Login</button>
          </div>
        </div>
      </div >
    </>
  )
}

export default Navbar