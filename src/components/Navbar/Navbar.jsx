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
        <FaLinkedin className="cursor-pointer hover:text-violet-600" target="_blank" href="https://www.linkedin.com/in/davibandeira/"/>
        <FaGithub className="cursor-pointer hover:text-violet-600" target="_blank" href="https://github.com/daviibandeiraa" />
        <FaInstagram className="cursor-pointer hover:text-violet-600" target="_blank" href="https://instagram.com/bandeiraa_04"/>
        <FaXTwitter className="cursor-pointer hover:text-violet-600" target="_blank" href="https://x.com/daviibandeiraa" />
    </div>
  </nav>
}

export default Navbar
