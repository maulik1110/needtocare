import React from "react";
import {FaRegFileAlt} from "react-icons/fa"
import {LuDownload} from "react-icons/lu"
import {IoClose} from "react-icons/io5"
import {motion} from "framer-motion"


const Card = ({data,reference}) => {
  return <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2} className="relative w-60 h-72 bg-zinc-900 rounded-[30px] text-white p-5 overflow-hidden">
    <FaRegFileAlt/>
    <p className="text-sm mt-5 text-left font-semibold leading-tight">{data.desc}</p>
    <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between mb-3 py-3 px-8">
            <h5>{data.filesize}</h5>
            <span className="flex justify-center items-center rounded-full bg-zinc-500 w-8 h-8">
                {data.close ? <IoClose/> : <LuDownload/>}
            {/* <LuDownload/> */}
            </span>
        </div>

        {data.tag.isOpen ? (
        <div className={`tag w-full py-4 bg-green-500 flex items-center justify-center`}>
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
        </div>

        ) : null}
    </div>

  </motion.div>;
};

export default Card;
