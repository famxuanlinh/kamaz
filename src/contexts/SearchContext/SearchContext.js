import React, { useContext, useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import useDebounce from '~/components/hooks';
import { BASE_URL } from '~/constants/env';
// import useDebounce from '../hooks';

const SearchContext = React.createContext();
export const SearchProvider = ({ children }) => {
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);

    const [searchResult, setSearchResult] = useState([]);
    const [suggests, setSuggests] = useState([]);
    const [pageProps, setPageProps] = useState({
        sort: 'createdAt:asc',
        rowPerPage: 10,
        totalPages: 1,
        currentPage: 1,
    });
    const handleTermChange = (term) => {
        setSearchValue(term);
    };
    const [searchParams] = useSearchParams();
    const defaultTerm = searchParams.get('term');

    const debounced = useDebounce(searchValue, 500); //set ko cho call API liên tục

    const getSuggests = () => {
        fetch(
            `http://localhost:1337/api/products?filters[$or][0][name][$containsi]=${searchValue}&filters[$or][1][sku][$containsi]=${searchValue}&populate=deep,2&pagination[pageSize]=5`,
        )
            .then((res) => res.json())
            .then((res) => {
                setSuggests(res.data);
            });
    };

    const getSearchValue = (term) => {
        fetch(
            `${BASE_URL}/products?filters[$or][0][name][$containsi]=${
                term || searchValue
            }&filters[$or][1][sku][$containsi]=${term || searchValue}&populate=deep,3&pagination[page]=${
                pageProps.currentPage
            }&pagination[pageSize]=12&sort[0]=createdAt&populate=deep,2`,
        )
            .then((res) => res.json())
            .then((res) => {
                setPageProps({
                    ...pageProps,
                    totalPages: res.meta.pagination.pageCount,
                });
                setSearchResult(res.data);
            });
    };

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]); // Khi xoá ký tự cuối thì sẽ ẩn search result
            return;
        }

        getSearchValue();
    }, [debounced, pageProps.currentPage]);

    useEffect(() => {
        if (!debounced.trim()) {
            setSuggests([]); // Khi xoá ký tự cuối thì sẽ ẩn search result
            return;
        }
        getSuggests();
    }, [debounced]);

    useEffect(() => {
        if (!defaultTerm) {
            return;
        }
        setSearchValue(defaultTerm);
        getSearchValue(defaultTerm);
        setShowResult(false);
    }, []);

    const handleChangePage = (newPage) => {
        setPageProps({
            ...pageProps,
            currentPage: newPage,
        });
    };

    const handleSearch = () => {
        getSearchValue();
    };

    const handleHideResult = (boolean) => {
        setShowResult(boolean);
    };

    return (
        <SearchContext.Provider
            value={{
                searchResult,
                handleChangePage,
                pageProps,
                handleTermChange,
                handleSearch,
                searchValue,
                suggests,
                showResult,
                handleHideResult,
            }}
        >
            {' '}
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => {
    return useContext(SearchContext);
};

export default SearchContext;
