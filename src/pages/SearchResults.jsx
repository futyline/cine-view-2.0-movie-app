import React from 'react';

import { fetchDataFromApi } from '../api/tmdb';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import ContentWrapper from '../components/ContentWrapper';

function SearchResults() {

    const { searchTerm } = useParams();



    return (
        <ContentWrapper>
            <div className='flex justify-between mb-5 pt-[80px]'>
                <h2 className='text-white text-2xl font-medium'>Search Results of "{searchTerm}"</h2>
            </div>
        </ContentWrapper>
    );
}

export default SearchResults;