import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Search = () => {
    return (
        <div className="container">
            <form className="d-flex border border-1 p-0 rounded w-100">
                <input
                    className="form-control me-2 p-3 border-0"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    style={{ fontSize: '14px', border: 'none' }}
                />
                <button className="btn border-0  rounded-end px-3 m-0" style={{ borderLeft: '0' }} type="submit">
                    <FontAwesomeIcon icon={faSearch} style={{ fontSize: '24px' }} />
                </button>
            </form>
        </div>
    );
};

export default Search;
