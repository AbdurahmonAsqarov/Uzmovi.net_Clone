import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='my-[10vh] bg-slate-800 py-[10px] pb-[15vh] '>
        <div className="container mx-auto flex justify-between items-center w-[80vw]">
            <div className="logo w-[300px]">
                <img src="https://uzmovi.com/images/logo.gif" alt="" />
            </div>
            <ul className='flex gap-10 text-[#a5bbdc]'>
                <li className='footer_item  p-2'>
                    <NavLink>Reklama</NavLink>
                </li>
                <li className='footer_item p-2'>
                    <NavLink>DMCA</NavLink>
                </li>
                <li className='footer_item p-2'>
                    <NavLink>Sayt qoidalari</NavLink>
                </li>
                <li className='footer_item p-2'>
                    <NavLink>Qayta aloqa</NavLink>
                </li>
                <li className='footer_item p-2'>
                    <NavLink>Yosh toifasi</NavLink>
                </li>
            </ul>
            <p className='p-2 border-white rounded-full text-[#a5bbdc] '>16+</p>
        </div>
    </footer>
    
  )
}

export default Footer