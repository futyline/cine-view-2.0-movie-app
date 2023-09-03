import { useContext } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import PosterFallback from '../assets/avatar.png'
import CircleRating from './circleRating/CircleRating';
import dayjs from 'dayjs';
import AppContext from '../context/context';
import Genres from './Genres';

function CastCard({data, id, styles, mediaType}) {

    const navigate = useNavigate();

    const {apiConfig} = useContext(AppContext);

    return (
        <div className='flex gap-20 overflow-x-auto'>
            {data?.map((person, id) => (     
                <div key={id} style={styles} className=''>
                    <div className='mb-4 w-[200px] h-[200px] rounded-full overflow-hidden'>
                        <img src={apiConfig && person?.profile_path ? apiConfig.poster + person?.profile_path : PosterFallback} alt="avatar" className='object-cover object-top w-full h-full'/>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-white text-xl font-bold mb-2.5'>{person?.original_name}</p>
                        <p className='text-gray-500 text-sm'>{person?.character}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CastCard;