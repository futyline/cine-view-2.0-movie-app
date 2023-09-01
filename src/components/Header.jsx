import {useState} from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Header(props) {

    const [showSearch, setShowSearch] = useState("");

    const [searchTerm, setSearchTerm] = useState("");

    const navigate = useNavigate();

    const openSearch = () => {
        setShowSearch(true);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && searchTerm.length > 0) {
            navigate(`/search/${searchTerm}`);
        }
    }

    return (
        <> 
            <header className='fixed bg-[#00000040] backdrop-blur w-full h-[60px] px-5 z-20'>
                <div className='max-w-[1200px] mx-auto h-[60px] flex items-center'>
                    <Link to="/"><img className='h-[35px]' src={logo} alt="logo" /></Link>
                    <ul className='flex items-center ml-auto mr-4 gap-x-9 text-white text-xl'>
                        <li className='hover:text-orange-600'><Link to="/">Home</Link></li>
                        <li className='hover:text-orange-600'><Link to="/explore/movies">Movies</Link></li>
                        <li className='hover:text-orange-600'><Link to="/explore/tv">TV Shows</Link></li>
                        <li className='hover:text-orange-600'>
                            <button onClick={()=> setShowSearch(true)}>
                                <FaMagnifyingGlass size="18px"/>
                            </button>
                        </li>                
                    </ul>
                </div>
            </header>

            {showSearch && (
                <div className='fixed flex flex-wrap w-full px-0 h-[60px] top-[60px] overflow-hidden z-20' >
                    <input type="text" placeholder='Search for a movie or a tv show...' onKeyDown={handleKeyDown} onChange={(e) => setSearchTerm(e.target.value)} className='bg-white text-center w-[70%] placeholder-gray-700 text-xl overflow-hidden' />
                    <div className=' flex align-center bg-white w-[30%] gap-10'>
                        <button onClick={() => searchTerm.length > 0 && navigate(`/search/${searchTerm}`)}> 
                            <FaMagnifyingGlass className='text-gray-700' size="30px"/>
                        </button>
                        <button onClick={() => {setSearchTerm(""); setShowSearch(false)}} className='text-4xl text-gray-700'>
                            X
                        </button>
                    </div>
                </div>
            )}                       
    </>
    );
}

export default Header;