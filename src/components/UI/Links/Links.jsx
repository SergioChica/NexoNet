import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";


export const Links = ({text,icon, href}) => {
  return (
    <a href={href} className='flex justify-between items-center w-full bg-[#333333] p-4 rounded-[10px] ' target='_blank'>
        <div>{icon}</div>
        <p className='font-semibold textCards'>{text}</p>
        <FaExternalLinkAlt className='textCards' />
    </a>
  )
}
