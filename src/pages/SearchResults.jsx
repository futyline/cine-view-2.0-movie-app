import { useState, useEffect } from 'react';

import { fetchDataFromApi } from '../api/tmdb';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import ContentWrapper from '../components/ContentWrapper';

import MovieCard from "../components/MovieCard"

function SearchResults() {

    const { searchTerm } = useParams();
    
    const [ data, setData ] = useState();

    const getMoviesBySearchTerm = async () => {
        try {
            const data = await fetchDataFromApi(`/search/movie?query=${searchTerm}`);
            setData(data);
            
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    useEffect(() => {
      getMoviesBySearchTerm();
    }, []) 

    return (
        <ContentWrapper>
            {data?.results?.length > 0 ? 
            (
                <>
                    <div className='flex justify-between mb-5 pt-[80px] mb-4'>
                        <h2 className='text-white text-2xl font-medium'>Search Results of "{searchTerm}"</h2>
                    </div>
                    <div className='flex flex-wrap'>
                        {data?.results.map((movie, id) => (
                            <MovieCard data={movie} key={id} styles={{width: `calc(20% - 15px)`, aspectRatio: `1/1.5`, marginBottom: '30px'}} />
                        ))}
                    </div>
                </>
            ) : (
                <div className='flex justify-between mb-5 pt-[80px]'>
                    <h2 className='text-white text-2xl font-medium'>Sorry, Results not found!</h2>
                </div>
            )}

            
        </ContentWrapper>
    );
}

export default SearchResults;