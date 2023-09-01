import { useState, useEffect } from 'react';

import { fetchDataFromApi } from '../../api/tmdb';

import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import ReactPaginate from 'react-paginate';

import ContentWrapper from '../../components/ContentWrapper';
import MovieCard from "../../components/MovieCard"
// import Pagination from '../../components/Pagination';

import "./style.scss";

function SearchResults() {

    const { searchTerm } = useParams();
    const [ data, setData ] = useState();

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);

    const getMoviesBySearchTerm = async () => {
        try {
            const data = await fetchDataFromApi(`/search/multi?query=${searchTerm}&page=${currentPage}`);
            setData(data); 
            setPageCount(data?.total_pages);

        } catch (err) {
            console.log(err);
            return err;
        }
    }

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected + 1); // React Paginate uses 0-based index
    };

    useEffect(() => {
        getMoviesBySearchTerm(currentPage);
    }, [currentPage, searchTerm]) 


    return (
        <ContentWrapper>
            {data?.results?.length > 0 ? 
            (
                <>
                    <div className='flex justify-between mb-5 pt-[80px] mb-4'>
                        <h2 className='text-white text-2xl font-medium mb-4'>Search Results of "{searchTerm}"</h2>
                    </div>

                    <div className='mb-[50px]'>
                        <ReactPaginate
                            previousLabel={"← Previous"}
                            nextLabel={"Next →"}
                            pageCount={pageCount}
                            onPageChange={handlePageChange}
                            containerClassName={"pagination"}
                            previousLinkClassName={"pagination__link"}
                            nextLinkClassName={"pagination__link"}
                            disabledClassName={"pagination__link--disabled"}
                            activeClassName={"pagination__link--active"}
                        />
                    </div>

                    <div className='flex flex-wrap'>
                        {data?.results.map((movie, id) => (
                            <MovieCard data={movie} key={id} styles={{width: `calc(20% - 20px)`, aspectRatio: `1/1.5`, marginBottom: '30px'}} />
                        ))}
                    </div>

                    <div className='mb-[50px]'>
                        <ReactPaginate
                            previousLabel={"← Previous"}
                            nextLabel={"Next →"}
                            pageCount={pageCount}
                            onPageChange={handlePageChange}
                            containerClassName={"pagination"}
                            previousLinkClassName={"pagination__link"}
                            nextLinkClassName={"pagination__link"}
                            disabledClassName={"pagination__link--disabled"}
                            activeClassName={"pagination__link--active"}
                        />
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