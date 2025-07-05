import React from 'react'
import Card from './Card'
import { useRef } from 'react';



function Foreground() {

    const ref = useRef(null);

    const data = [
        {
            desc: "I am a mern stack developer and i want to complete my mern stack in just 2.5 months.",
            filesize: ".9mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"},
        },
        {
            desc: "I am a mern stack developer and i want to complete my mern stack in just 2.5 months.",
            filesize: ".9mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
        },
        {
            desc: "I am a mern stack developer and i want to complete my mern stack in just 2.5 months.",
            filesize: ".9mb",
            close: true,
            tag: {isOpen: false, tagTitle: "upload", tagColor: "green"},
        },
    ];
    
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap'>
        {data.map((item, index)=>(
            <Card data={item} reference={ref}/>
        ))} 
     </div> 
  )
}

export default Foreground