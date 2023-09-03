import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import DetailsBanner from '../components/detailsBanner/DetailsBanner';
import Recommendations from '../components/Recommendations';
import Similar from '../components/Similar';
import Cast from '../components/Cast';
import Videos from '../components/Videos';
import ContentWrapper from '../components/ContentWrapper';

function MovieDetails() {  

    const [id, setId] = useState();

    useEffect(() => {
        if (id !== undefined) {
            window.location.reload();
        }       
    }, [id])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
    
    return (
        <>
            <DetailsBanner/>
            <ContentWrapper>
                <Cast />
                <Videos />
                <Similar setId={setId} />
                <Recommendations setId={setId}/>
            </ContentWrapper>
        </>
    );
}

export default MovieDetails;