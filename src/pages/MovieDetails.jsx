import React from 'react';

import { useParams } from 'react-router-dom';
import DetailsBanner from '../components/detailsBanner/DetailsBanner';
import Recommendations from '../components/Recommendations';
import Similar from '../components/Similar';
import Cast from '../components/Cast';
import Videos from '../components/Videos';
import ContentWrapper from '../components/ContentWrapper';

function MovieDetails() {  

    return (
        <>
            <DetailsBanner/>
            <ContentWrapper>
                <Cast/>
                <Videos/>
                <Similar/>
                <Recommendations/>
            </ContentWrapper>
        </>
    );
}

export default MovieDetails;