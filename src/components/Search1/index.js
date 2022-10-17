import { faSearch } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless'; // different import path!
import './Search.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
// import useDebounce from '../hooks';
import { Link } from 'react-router-dom';
import { useSearch } from '~/contexts/SearchContext/SearchContext';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Search1 = ({ ...args }) => {
    const { handleTermChange, handleSearch, searchValue, suggests, showResult, handleHideResult } = useSearch();

    return (
        <>
            <div className="dropdown" style={{ width: '100%' }}>
                <form
                    className="d-flex border border-1 p-0 rounded "
                    style={{ width: '100%' }}
                    onSubmit={() => {
                        handleSearch();
                        handleHideResult(false);
                    }}
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <input
                        className="form-control me-2 p-3 border-0 w-100"
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
                            onMouseDown={(e) => {
                                // Bỏ qua hành vi focus vào ô tìm kiếm khi nhấn submit
                                e.preventDefault();
                            }}
                            style={{ borderLeft: '0' }}
                            type="submit"
                        >
                            <FontAwesomeIcon icon={faSearch} style={{ fontSize: '24px' }} />
                        </button>
                    </Link>
                </form>
                <ul className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton1">
                    <div className="dropdown-item" style={{ width: '100%' }}>
                        <span className="pt-5 pb-2 ps-3" style={{ fontSize: '2rem' }}>
                            Sản phẩm
                        </span>
                        <hr style={{ marginTop: '5px' }} />
                    </div>
                    {suggests.map((item) => (
                        <Link style={{ width: '100%' }} to={`/san-pham/${item.attributes.slug}`} key={item.id}>
                            <li className="dropdown-item" style={{ width: '100%' }}>
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
                                            src="https://picsum.photos/300/200"
                                            alt=""
                                            style={{
                                                aspectRatio: '1 / 1',
                                                objectFit: 'cover',
                                                height: '85%',
                                                borderRadius: '50%',
                                            }}
                                        />
                                    </div>
                                    <div style={{ marginLeft: '10px' }}>
                                        <div style={{ fontSize: '18px' }}>{item.attributes.name}</div>

                                        <div className="row  ">
                                            <div className=" text-primary col" style={{ fontSize: '16px' }}>
                                                Mã: {item.attributes.sku}
                                            </div>
                                            <div className="col" style={{ fontSize: '14px' }}>
                                                Nhóm: {item.attributes.categories.data[0].attributes.name}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Search1;
