import { useContext, useState, useEffect } from 'react';
import AppContext from '../context/context';

function Genres({ids}) {

    const {movieGenres, tvGenres} = useContext(AppContext);

    const [genreNames, setGenreNames] = useState([]);

    const findGenreNameById = (genreId) => {
        const foundGenre = movieGenres.genres.find(genre => genre.id === genreId) || tvGenres.genres.find(genre => genre.id === genreId);
        return foundGenre != undefined && foundGenre.name;  
    } 

    useEffect(() => {
    }, [])
    
    return (
        <div className='flex flex-wrap flex-col flex-wrap gap-2'>
            {ids?.length >= 1 && ids.map((genreId, i) => (
                <div key={i} className='text-white bg-rose-500 rounded-xl py-1 px-2 text-center text-xs'>{findGenreNameById(genreId)}</div>
            ))}
            
        </div>
    );
}

export default Genres; 