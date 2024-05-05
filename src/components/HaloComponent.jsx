import hallo from '../assets/hallo.gif';
import { TypeAnimation } from "react-type-animation";

const HaloComponent = () => {
   return (
      <div className='flex flex-col items-center justify-center mt-20'>
         <img src={hallo} alt="hallo" className='w-96'/>
         <TypeAnimation
            sequence={[
               // Same substring at the start will only be typed out once, initially
               "Hallo 👋🏻",
               500, // wait 1s before replacing "Mice" with "Hamsters"
               "Ada yang bisa mimin bantu ??",
               500,
               "Buka sidebar di pojok kiri atas yah",
               200,
               "Untuk memilih layanan",
               500,
               "Terima kasih 🥰",
               200,
            ]}
            wrapper="span"
            speed={60}
            repeat={Infinity}
            className='font-medium'
         />
      </div>
   )
}

export default HaloComponent