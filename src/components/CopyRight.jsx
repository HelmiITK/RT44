import { FaRegCopyright } from "react-icons/fa";

const CopyRight = () => {
   return (
      <div className="mt-10 pb-10 mx-4 flex flex-col items-center justify-center">
         <div className="h-px w-full bg-black bg-opacity-25"></div>
         <h1 className="flex gap-2 items-center mt-6">CopyRight <FaRegCopyright /> Helmi 2024 <div className="w-px h-6 bg-black"></div> All rights reserved</h1>
      </div>
   )
}

export default CopyRight