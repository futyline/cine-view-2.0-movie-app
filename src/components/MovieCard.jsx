import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import PosterFallback from '../assets/no-poster.png'
import CircleRating from './circleRating/CircleRating';
import dayjs from 'dayjs';
import AppContext from '../context/context';

function MovieCard({data, id}) {

    const apiConfig = useContext(AppContext);

    const posterUrl = apiConfig && data.poster_path ? apiConfig.poster + data.poster_path : PosterFallback;

    return (
        <div key={id}  className='mr-5'>
            <div className='hover:opacity-70 cursor-pointer'>
                <div className='relative'>
                    <img src={posterUrl} alt="No Poster" className='rounded-xl overflow-hidden'/>
                    <div className='absolute bottom-[-20px] left-[10px]'>
                        <CircleRating rating={data.vote_average.toFixed(1)} />
                    </div>
                    <div className='flex flex-wrap absolute bottom-[10px] right-[10px] gap-2'>
                        <div className='text-white bg-rose-500 rounded-xl py-1 px-2 text-center text-xs'>Mystery</div>
                        <div className='text-white bg-rose-500 rounded-xl py-1 px-2 text-center text-xs'>Thriller</div>
                    </div>      
                </div>     

                <div className='mt-7'>
                    <p className='text-white text-xl mb-2.5'>{data.title ? data.title : data.name}</p>
                    <p className='text-gray-500 text-sm'>{dayjs(data.release_date ? data.release_date : data.first_air_date).format("MMM D, YYYY")}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;