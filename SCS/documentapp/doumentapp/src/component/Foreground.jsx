import React, { useRef, useState } from "react";
import Card from "./Card";
import {motion} from "framer-motion"


const Foreground = () => {

    const refe = useRef(null);

    const data= [
        {
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, iusto?",
            filesize: "0.9mb",
            close: true, tag: {isOpen:true, tagTitle:"Download Now",tagColor: "green"},
        },
        {
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, iusto?",
            filesize: "0.9mb",
            close: false, tag: {isOpen:true, tagTitle:"Download Now",tagColor: "red"},
        },
        {
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, iusto?",
            filesize: "0.9mb",
            close: true, tag: {isOpen:true, tagTitle:"Download Now",tagColor: "green"},
        },
        {
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, iusto?",
            filesize: "0.9mb",
            close: true, tag: {isOpen:false, tagTitle:"Download Now",tagColor: "green"},
        },
    ]
  return <div ref={refe} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5">
    {/* <Card/> */}

    {data.map((item,index)=>(
        <Card data={item} reference={refe}/>
    ))}
  </div>;
};

export default Foreground;
