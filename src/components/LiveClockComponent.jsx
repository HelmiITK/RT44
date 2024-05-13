import { useEffect, useState } from "react";

const LiveClockComponent = () => {
   // Time
   const [time, setTime] = useState(new Date());

   useEffect(() => {
      const interval = setInterval(() => {
         setTime(new Date());
      }, 1000);

      return () => clearInterval(interval);
   }, []);

   const formatTime = (time) => {
      let hours = time.getHours();
      const minutes = String(time.getMinutes()).padStart(2, '0');
      const seconds = String(time.getSeconds()).padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // untuk menangani jam 0
      hours = String(hours).padStart(2, '0'); // tambah 0 jika jam jadi 4 maka 04
      return `${hours}:${minutes}:${seconds} ${ampm}`;
   };

   return (
      <div className="text-4xl text-start font-semibold tracking-widest text-primary border-2 border-slate-300 rounded-lg p-4 drop-shadow-lg shadow-xl">
         <div>{formatTime(time)}</div>
         <div className="text-sm pl-2">Hours Min Sec</div>
      </div>
   )
}

export default LiveClockComponent