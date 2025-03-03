import React, { useState } from "react";
import Image from "./Image";
import logo from "../assets/logo.png";
import search from '../assets/search_icon.png'
import profile from '../assets/profile_icon.png'
import cartIcon from '../assets/cart_icon.png'
import menuIcon from '../assets/menu_icon.png'
import dropdownIcon from '../assets/dropdown_icon.png'
import { NavLink } from "react-router";
import { Link } from "react-router";

const Navbar = () => {
    const [visible , setVisible] = useState(false)
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Image className={"w-36"} imgSrc={logo} imgAlt={logo} />
        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
            <NavLink to={'/'} className={'flex flex-col items-center gap-1'}>
                <p className="text-black">HOME</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
            <NavLink to={'/collection'} className={'flex flex-col items-center gap-1'}>
                <p className="text-black">COLLECTION</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
            <NavLink to={'/about'} className={'flex flex-col items-center gap-1'}>
                <p className="text-black">ABOUT</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
            <NavLink to={'/contact'} className={'flex flex-col items-center gap-1'}>
                <p className="text-black">CONTACT</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
        </ul>
        <div className="flex items-center gap-6">
            <Image className={'w-5 cursor-pointer'} imgSrc={search} imgAlt={search}/>
            <div className="group relative">
                <Image className={'w-5 cursor-pointer'} imgSrc={profile} imgAlt={profile}/>
                <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                    <div className="flex flex-col gap-2 w-36 py-3 bg-slate-100 text-gray-500 rounded-2xl">
                        <p className="cursor-pointer hover:text-black">MY Profile</p>
                        <p className="cursor-pointer hover:text-black">Order</p>
                        <p className="cursor-pointer hover:text-black">Logout</p>
                    </div>
                </div>
            </div>
            <Link className="relative" to={'/cart'}>
            <Image className={'w-5 min-w-5'} imgSrc={cartIcon} imgAlt={cartIcon}/>
            <p className="absolute text-white right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black aspect-square rounded-full text-[8px]">10</p>
            </Link>
            <Image onClick={()=>setVisible(true)} className={'w-5 cursor-pointer sm:hidden'} imgSrc={menuIcon} imgAlt={menuIcon}/>
        </div>
        {/* sidebar menu for small screen */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className="flex flex-col text-gray-600">
                <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                    <Image className={'h-4 rotate-180'} imgSrc={dropdownIcon} imgAlt={dropdownIcon}/>
                    <p className="text-black">Back</p>
                </div>
                <NavLink onClick={()=>setVisible(false)} className={'py-2 pl-6 border text-black'} to={'/'}>HOME</NavLink>
                <NavLink onClick={()=>setVisible(false)} className={'py-2 pl-6 border text-black'} to={'/collection'}>COLLECTION</NavLink>
                <NavLink onClick={()=>setVisible(false)} className={'py-2 pl-6 border text-black'} to={'/about'}>ABOUT</NavLink>
                <NavLink onClick={()=>setVisible(false)} className={'py-2 pl-6 border text-black'} to={'/contact'}>CONTACT</NavLink>
            </div>
        </div>
    </div>
  ); 
};

export default Navbar;
