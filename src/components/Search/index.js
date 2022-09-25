import { faSearch } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless'; // different import path!
import './Search.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import useDebounce from '../hooks';
import { Link } from 'react-router-dom';

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const debounced = useDebounce(searchValue, 500); //set ko cho call API liên tục

    const getSearchValue = () => {
        fetch(`http://localhost:1337/api/products?filters[name][$containsi]=bau&filters[sku][$containsi]=`)
            .then((res) => res.json())
            .then((res) => {
                setSearchValue(res.data);
            });
    };

    useEffect(() => {
        // if (!debounced.trim()) {
        //     setSearchResult([]); // Khi xoá ký tự cuối thì sẽ ẩn search result
        //     return;
        // }

        getSearchValue();
    }, []);

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <div className="container">
            <HeadlessTippy
                interactive // Chọn được phần tử
                visible={showResult} //Chỉ hiển thị khi kết quả tìm kiếm lớn hơn 0
                render={(attrs) => (
                    <div
                        tabIndex="-1"
                        {...attrs}
                        style={{ backgroundColor: 'white', width: '623px', padding: '10px 0', borderRadius: '5px' }}
                        className="shadow "
                    >
                        <div className="text-muted" style={{ padding: '0 14px' }}>
                            Sản phẩm
                            <hr style={{ marginTop: '0' }} />
                        </div>
                        {/* {searchResult.map((_result) => ( */}
                        <Link to="/">
                            <div className="product-search d-flex">
                                <div
                                    style={{
                                        height: '38px',
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
                                <div style={{ paddingLeft: '10px', width: '100%', lineHeight: 'initial' }}>
                                    <div style={{ fontSize: '16px' }}>Bầu Phanh Trước</div>
                                    <div className="row">
                                        <div className="col-5 text-primary" style={{ fontSize: '14px' }}>
                                            Sku: 798534798
                                        </div>
                                        <div className="col-7" style={{ fontSize: '12px' }}>
                                            Nhóm: Động Cơ
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/">
                            <div className="product-search d-flex">
                                <div
                                    style={{
                                        height: '38px',
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
                                <div style={{ paddingLeft: '10px', width: '100%', lineHeight: 'initial' }}>
                                    <div style={{ fontSize: '16px' }}>Bầu Phanh Trước</div>
                                    <div className="row">
                                        <div className="col-5 text-primary" style={{ fontSize: '14px' }}>
                                            Sku: 798534798
                                        </div>
                                        <div className="col-7" style={{ fontSize: '12px' }}>
                                            Nhóm: Động Cơ
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/">
                            <div className="product-search d-flex">
                                <div
                                    style={{
                                        height: '38px',
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
                                <div style={{ paddingLeft: '10px', width: '100%', lineHeight: 'initial' }}>
                                    <div style={{ fontSize: '16px' }}>Bầu Phanh Trước</div>
                                    <div className="row">
                                        <div className="col-5 text-primary" style={{ fontSize: '14px' }}>
                                            Sku: 798534798
                                        </div>
                                        <div className="col-7" style={{ fontSize: '12px' }}>
                                            Nhóm: Động Cơ
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* ))} */}
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <form className="d-flex border border-1 p-0 rounded w-100">
                    <input
                        className="form-control me-2 p-3 border-0"
                        type="search"
                        placeholder="Hãy Nhập Tên Hoặc Mã Phụ Tùng"
                        aria-label="Search"
                        style={{ fontSize: '14px', border: 'none' }}
                        onFocus={() => setShowResult(true)}
                    />
                    <button className="btn border-0  rounded-end px-3 m-0" style={{ borderLeft: '0' }} type="submit">
                        <FontAwesomeIcon icon={faSearch} style={{ fontSize: '24px' }} />
                    </button>
                </form>
            </HeadlessTippy>
        </div>
    );
};

export default Search;
