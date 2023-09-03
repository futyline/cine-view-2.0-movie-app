import {useEffect} from 'react';
import HeroBanner from '../components/HeroBanner';
import ContentWrapper from '../components/ContentWrapper';
import Trending from '../components/Trending';
import Popular from '../components/Popular';
import TopRated from '../components/TopRated';

function Homepage(props) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

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