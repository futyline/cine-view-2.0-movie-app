import React from 'react';
import HeroBanner from '../components/HeroBanner';
import ContentWrapper from '../components/ContentWrapper';
import Trending from '../components/Trending';
import Popular from '../components/Popular';
import TopRated from '../components/TopRated';

function Homepage(props) {
    return (
        <>
            <HeroBanner/>
            <ContentWrapper>
                <Trending/>
                <Popular/>
                <TopRated/>
            </ContentWrapper>
        </>
        
    );
}

export default Homepage;