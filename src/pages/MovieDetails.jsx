import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import DetailsBanner from '../components/detailsBanner/DetailsBanner';
import Recommendations from '../components/Recommendations';
import Similar from '../components/Similar';
import Cast from '../components/Cast';
import Videos from '../components/Videos';
import ContentWrapper from '../components/ContentWrapper';
import VideoModal from '../components/VideoModal';
import { fetchDataFromApi } from '../api/tmdb';

function MovieDetails() {  

    const { mediaType, id: movieId } = useParams();
    const [id, setId] = useState();
    const [isVideoModalVisible, setIsVideoModalVisible] = useState(false);
    const [videos, setVideos] = useState();
    const [videoKey, setVideoKey] = useState("");

    const getVideos = async () => {
        try {
            const data = await fetchDataFromApi(`/${mediaType}/${movieId}/videos`);
            setVideos(data);
            setVideoKey(data?.results?.[0]?.key);
            
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    useEffect(() => {
        if (id) {
           console.log(id)
                window.location.reload();
            
        }       
    }, [id])

    useEffect(() => {
        window.scrollTo(0, 0);
        getVideos();
    }, [])
    
    
    return (
        <>
            <DetailsBanner setVideoKey={setVideoKey} videoKey={videoKey} setIsVideoModalVisible={setIsVideoModalVisible}/>
            <ContentWrapper>
                <Cast />
                <Videos videos={videos} setVideoKey={setVideoKey} videoKey={videoKey} setIsVideoModalVisible={setIsVideoModalVisible}/>
                <Similar setId={setId} />
                <Recommendations setId={setId}/>
            </ContentWrapper>
            {isVideoModalVisible && (<VideoModal visible={true} setIsVideoModalVisible={setIsVideoModalVisible} videoKey={videoKey} />)}
        </>
    );
}

export default MovieDetails;