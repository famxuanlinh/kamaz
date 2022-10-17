import { faSearch } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless'; // different import path!
import './Search.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
// import useDebounce from '../hooks';
import { Link } from 'react-router-dom';
import { useSearch } from '~/contexts/SearchContext/SearchContext';
import { IMG_URL } from '~/constants/env';

const Search = ({ show }) => {
    const { handleTermChange, handleSearch, searchValue, suggests, showResult, handleHideResult } = useSearch();

    return (
        <HeadlessTippy
            interactive // Chọn được phần tử
            placement="bottom"
            visible={showResult && suggests.length > 0 && show === true} //Chỉ hiển thị khi kết quả tìm kiếm lớn hơn 0
            render={(attrs) => (
                <div
                    tabIndex="-1"
                    {...attrs}
                    style={{
                        backgroundColor: 'white',
                        padding: '10px 0',
                        borderRadius: '5px',
                        minWidth: '465px',
                    }}
                >
                    <div className="text-muted " style={{ padding: '0 14px' }}>
                        Sản phẩm
                        <hr style={{ marginTop: '0' }} />
                    </div>
                    {suggests.map((item) => (
                        <Link
                            to={`/san-pham/${item.attributes.slug}`}
                            onClick={() => {
                                handleHideResult(false);
                            }}
                            key={item.id}
                        >
                            <div className="product-search d-flex py-2 ">
                                <div
                                    style={{
                                        height: '48px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <img
                                        src={`${IMG_URL}${item.attributes.images?.data[0].attributes.formats.thumbnail.url}`}
                                        alt=""
                                        style={{
                                            aspectRatio: '1 / 1',
                                            objectFit: 'cover',
                                            height: '85%',
                                            borderRadius: '50%',
                                        }}
                                    />
                                </div>
                                <div style={{ paddingLeft: '10px', width: '100%' }}>
                                    <div style={{ fontSize: '18px' }}>{item.attributes.name}</div>
                                    <div className="row w-100">
                                        <div className=" col-5 text-primary " style={{ fontSize: '16px' }}>
                                            Mã: {item.attributes.sku}
                                        </div>
                                        <div className="col-7" style={{ fontSize: '14px' }}>
                                            Nhóm: {item.attributes.categories.data[0].attributes.name}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
            onClickOutside={() => handleHideResult(false)}
        >
            <form className="d-flex border border-1 p-0 rounded w-100">
                <input
                    className="form-control me-2 p-3 border-0"
                    // type="search"
                    placeholder="Hãy nhập tên hoặc mã phụ tùng"
                    aria-label="Search"
                    style={{ fontSize: '14px', border: 'none' }}
                    onChange={(e) => handleTermChange(e.target.value)}
                    onFocus={() => handleHideResult(true)}
                    value={searchValue}
                />
                <Link to={`/tim-kiem?term=${searchValue}`} className="d-flex">
                    <button
                        className="btn border-0  rounded-end px-3 m-0"
                        onClick={() => {
                            handleSearch();
                            handleHideResult(false);
                        }}
                        style={{ borderLeft: '0' }}
                        type="submit"
                    >
                        <FontAwesomeIcon icon={faSearch} style={{ fontSize: '24px' }} />
                    </button>
                </Link>
            </form>
        </HeadlessTippy>
    );
};

export default Search;
