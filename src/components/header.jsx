import { NavData } from "../data/navdata"
import { NavLink } from "react-router-dom"
import Button from "./button"
import Logo from '../../src/assets/design/logo.svg';
import { useState } from "react"
import { MoveRight, MoveUpRight } from "lucide-react"


const Header = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [menuOpen, setMenuOpen] = useState (false);
  return (
    <>
    <div style={{fontFamily: 'jeju '}} className="flex justify-between  bg-[#05252C] px-3 py-4 items-center border-2 border-[#197686] rounded-xl w-full h-[76px] lg:mb-15">
      <img src={Logo} alt="logo" className="w-[44px] h-[23px] " />
      
      <nav className="flex items-center">
        <ul className="hidden md:flex md:justify-between gap-10"> {NavData.map((data, index)=>(
            <li key={index} className="text-[#B3B3B3] ">
               <NavLink to={data.link}>
                    {data.title}
               </NavLink>
            </li>

        ))}</ul>
        <Button className= " md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
        </Button>
        {menuOpen && (
          <ul className="absolute top-19 left-10 md:hidden bg-[#0E464F] w-[80%] flex flex-col items-center py-4 border-1 border-[#24A0B5] border-t-0 rounded-b-lg ">
            {NavData.map((data, index) => (
              <li key={index} className="py-2 text-[#B3B3B3] hover:border-b-2 border-[#24A0B5] ">
                <NavLink to={data.link} onClick = {() => setMenuOpen(false)} >{data.title}</NavLink>
              </li>
            ))}

          </ul>
        )}
      </nav>
      
      <Button
        className= 'bg-white hover:bg-[#24A0B5] border-1 border-[#D5EA00]  text-[#0A0C11] hover:text-[#d9d9d9] flex gap-2 p-4 transition-all duration-300 uppercase'
        onMouseEnter = {() => setIsHovered(true)}
        onMouseLeave = {() => setIsHovered(false)}
      >
        my tickets

        {isHovered ?(
            <MoveUpRight/>
        ) : (
            <MoveRight/>
        )}
      </Button>
    </div>
    </>
  )
}

export default Header
