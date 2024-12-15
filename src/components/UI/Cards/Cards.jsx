import React from 'react'
import Yo from "../../../assets/Yo.jpeg"
import { Links } from '../Links/Links'

import { FaInstagram, FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export const Cards = () => {
  return (
    <div className='w-[24rem] md:w-[20rem] h-[80%] bg-[#1f1f1f] text-white p-[40px] mb-10 mt-5 rounded-2xl flex flex-col items-center  '>
      <div className='image-container rounded-full mb-5 '>
        <img src={Yo} alt="" className='w-full h-full object-cover rounded-full ' />
      </div>
      <div className='flex flex-col items-center gap-3 '>
        <h1 className='Title font-semibold '>Sergio Chica</h1>
        <p className='normalText text-[#c6e162] '>Bogota D.C, Colombia</p>
      </div>
      <div className='flex flex-col items-center mt-3 mb-6 '>
        <p className='normalText text-white/60 '>Frot-end developer and avid reader</p>
      </div>
      <div className='w-full min-h-[344px] h-auto flex flex-col gap-4'>
        <Links href={"https://www.instagram.com/sergiochica._/"} icon={<FaInstagram textCards />} text={"Instagram"} />
        <Links href={"https://github.com/SergioChica"} icon={<FaGithub textCards />} text={"GitHub"} />
        <Links href={"https://www.linkedin.com/in/sergio-chica/"} icon={<CiLinkedin textCards />} text={"Linkedin"} />
        <Links href={"https://wa.link/8hm8qo"} icon={<FaInstagram textCards />} text={"Whatsapp"} />
      </div>
      <div className='flex justify-center items-center mt-10'>
        <p className='normalText text-white/60 '>&copy; 2024 Sergio Chica. Todos los derechos reservados.</p>
      </div>
    </div>
  )
}
