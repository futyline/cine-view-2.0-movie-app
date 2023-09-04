import { useContext } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import PosterFallback from '../assets/no-poster.png'
import CircleRating from './circleRating/CircleRating';
import dayjs from 'dayjs';
import AppContext from '../context/context';
import Genres from './Genres';

function MovieCard({data, id, styles, mediaType, setId}) {

    const navigate = useNavigate();

    const {apiConfig} = useContext(AppContext);

    const posterUrl = apiConfig && data?.poster_path ? apiConfig.poster + data?.poster_path 
                    : apiConfig && data?.known_for?.[0]?.poster_path ? apiConfig.poster + data?.known_for?.[0].poster_path 
                    : PosterFallback;

    return (
        <div key={id} onClick={() => {navigate(`/${data?.media_type || mediaType}/${data?.id}`); setId(data?.id && data?.id)}} style={styles} className='mr-5'>
            <div className='hover:opacity-70 cursor-pointer'>
                <div className='flex flex-wrap relative'>
                    <img src={posterUrl} alt="No Poster" className='rounded-xl overflow-hidden'/>
                    <div className=''>
                        <div className='absolute bottom-[-20px] left-[10px]'>
                            {<CircleRating rating={data?.vote_average ? data.vote_average.toFixed(1) : "0.0"} />}
                        </div>
                        <div className='absolute bottom-[10px] right-[10px]'>
                            {data?.genre_ids !== undefined && data?.genre_ids.length > 0 && <Genres ids={data?.genre_ids.slice(0, 2)}/>}
                        </div>
                    </div>      
                </div>     

                <div className='mt-7'>
                    <p className='text-white text-xl mb-2.5'>{data.title ? data.title : data.name}</p>
                    <p className='text-gray-500 text-sm'>{data.release_date || data.first_air_date ? dayjs(data.release_date ? data.release_date : data.first_air_date).format("MMM D, YYYY") : "Invalid Date"}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;