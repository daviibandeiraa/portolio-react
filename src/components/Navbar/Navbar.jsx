import React from "react"
import logo from "../../assets/images/logo.png";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="w-16" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl"> 
        <FaLinkedin className="cursor-pointer hover:text-violet-600"/>
        <FaGithub className="cursor-pointer hover:text-violet-600"/>
        <FaInstagram className="cursor-pointer hover:text-violet-600"/>
        <FaXTwitter className="cursor-pointer hover:text-violet-600"/>
    </div>
  </nav>
}

export default Navbar
