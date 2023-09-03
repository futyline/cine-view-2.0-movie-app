import { useContext } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import {BsCollectionPlay, BsPlayCircle} from 'react-icons/bs'
import PosterFallback from '../assets/avatar.png'
import CircleRating from './circleRating/CircleRating';
import dayjs from 'dayjs';
import AppContext from '../context/context';
import Genres from './Genres';

function VideoCard({movieId, name, styles, setIsVideoModalVisible, setVideoKey}) {

    const navigate = useNavigate();

    const {apiConfig} = useContext(AppContext);

    return ( 
        <div style={styles} className='hover:opacity-[0.8] text-white hover:text-rose-700' onClick={() => {setIsVideoModalVisible(true); setVideoKey(movieId); }}>
            <div className='relative mb-4 w-[300px] h-[170px] rounded-lg overflow-hidden '>
                <img src={`https://img.youtube.com/vi/${movieId}/mqdefault.jpg`} alt="video image" className='object-cover object-top w-full h-full'/>
                <BsPlayCircle className='absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] ' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-white text-xl font-bold mb-2.5'>{name}</p>
            </div>
        </div>
    );
}

export default VideoCard;