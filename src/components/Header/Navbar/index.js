import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faMagnifyingGlass, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

// const Wrapper = styled.div`
//     background-color: var(--secondary-color);
//     width: 100%;
//     height: 61px;
//     position: relative;
//     font-size: 20px;
// `;

// const Container = styled.div`
//     max-width: var(--width-size);
//     height: 100%;
//     padding: auto;
//     margin: auto;
//     position: relative;
// `;
// const Inner = styled.div`
//     justify-content: center;
//     align-items: center;
//     height: 100%;
// `;

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-dark py-3" style={{ height: '61px' }}>
            <div className="container align-items-center justify-content-between">
                <Link className="navbar-brand" style={{ color: 'blue' }} to="/">
                    <h1>KAMAZ</h1>
                </Link>

                {/* <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button> */}
                <form className="d-flex ms-auto mb-2 mb-lg-0 mx-3">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
                <div className="collapse navbar-collapse col" id="navbarSupportedContent">
                    <ul className="navbar-nav ">
                        <Link to="/">
                            <li className="nav-item dropdown">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </li>
                        </Link>

                        <Link to="/">
                            <li className="nav-item dropdown p1">
                                <FontAwesomeIcon icon={faBagShopping} />
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    9<span className="visually-hidden">unread messages</span>
                                </span>
                            </li>
                        </Link>
                        <Link to="/">
                            <li className="nav-item dropdown">
                                <FontAwesomeIcon icon={faUser} />
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
