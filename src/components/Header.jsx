import React from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <header className='fixed bg-[#00000040] backdrop-blur w-full h-[60px] px-5 z-20'>
            <div className='max-w-[1200px] mx-auto h-[60px] flex items-center'>
                <Link to="/"><img className='h-[35px]' src={logo} alt="logo" /></Link>
                <ul className='flex items-center ml-auto mr-4 gap-x-9 text-white text-xl'>
                    <li className='hover:text-orange-600'><Link to="/explore/movies">Movies</Link></li>
                    <li className='hover:text-orange-600'><Link to="/explore/tv">TV Shows</Link></li>
                    <li className='hover:text-orange-600'>
                        <button onClick={()=> console.log("clicked")}>
                            <FaMagnifyingGlass size="18px"/>
                        </button>
                    </li>                
                </ul>
            </div>
        </header>
    );
}

export default Header;