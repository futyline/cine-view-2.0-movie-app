import React, { useEffect, useState, useContext } from 'react';
import { fetchDataFromApi } from '../api/tmdb';
import { fetchApiConfig } from '../api/tmdb';
import AppContext from '../context/context';

function HeroBanner(props) {

    const [banner, setBanner] = useState("");

    const setRandomBanner = async () => {
        try {
            // Fetch API config first to get the image base URLs
            const config = await fetchApiConfig();

            // Now fetch data using the configured API base URL
            const data = await fetchDataFromApi("/movie/upcoming");

            const randomIndex = Math.floor(Math.random() * 20);
            const backdropPath = data.results?.[randomIndex]?.backdrop_path;

            if (backdropPath) {
                const bg = config.backdrop + backdropPath;
                setBanner(bg);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

    useEffect(() => {
        setRandomBanner();
    }, [])

    return (
        <div className='bg-gradient-to-b from-stone-700 to-stone-800 h-[700px] w-full relative'>
            <img src={banner} alt="Banner" className='bg-[#04152d] w-full h-full object-cover object-top absolute mix-blend-overlay' />
            <div style={{background: `linear-gradient(180deg,rgba(4,21,45,0) 0%,#04152d 90%)`}} className='w-full h-[250px] absolute bottom-0 left-0'></div>
            <div className='max-w-[900px] w-full h-full mx-auto px-5 flex flex-col justify-center'>
                <h2 className='text-white text-7xl font-bold text-center mb-5 relative'>Welcome.</h2>
                <p className='text-white text-2xl text-center mb-11 relative'>Millions of movies, TV shows and people to discover. Explore now.</p>
                <div className='w-full'>
                    <input type="text" placeholder='Search for a movie or a tv show...' style={{ width: `calc(100% - 120px)`}}  className='px-6 py-4 outline-0 rounded-tl-full rounded-bl-full placeholder-gray-700 text-xl relative' />  
                    <button onClick={() => console.log('clicked')} className='px-6 py-4 rounded-tr-full rounded-br-full bg-gradient-to-r from-orange-600 to-amber-500 hover:text-black text-xl text-white relative'>Search</button>
                </div> 
            </div>
        </div>
    );
}

export default HeroBanner;


{/* <div style={{backgroundImage: `url(${banner})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "700px",}} >
    <div className='max-w-[800px] w-full h-full mx-auto flex flex-col items-center justify-center'>
        <h2 className='text-white text-8xl font-bold text-center mb-5'>Welcome.</h2>
        <p className='text-white text-3xl text-center mb-11'>Millions of movies, TV shows and people to discover. Explore now.</p>
        <div className='w-full'>
            <input type="text" placeholder='Search for a movie or a tv show...' style={{ width: `calc(100% - 120px)`}}  className='p-6 rounded-tl-full rounded-bl-full placeholder-gray-700 text-2xl' />  
            <button className=' p-6 rounded-tr-full rounded-br-full bg-gradient-to-r from-orange-600 to-amber-500 text-2xl text-white'>Search</button>
        </div> 
    </div>
</div>   */}