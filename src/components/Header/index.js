import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
    background-color: var(--secondary-color);
    width: 100%;
    height: 61px;
    position: relative;
    font-size: 20px;
`;

const Container = styled.div`
    max-width: var(--width-size);
    height: 100%;
    padding: auto;
    margin: auto;
    position: relative;
`;
// const Inner = styled.div`
//     justify-content: center;
//     align-items: center;
//     height: 100%;
// `;

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <nav class="navbar navbar-expand-lg navbar-dark py-3 fixed-top " style={{ height: '61px' }}>
                    <div class="container">
                        <a class="navbar-brand" href="#" style={{ fontSize: '30px' }}>
                            KAMAZ
                        </a>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <form class="d-flex ms-auto mb-2 mb-lg-0 mx-3">
                                <input
                                    class="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <button class="btn btn-outline-success" type="submit">
                                    Search
                                </button>
                            </form>
                            <ul class="navbar-nav ">
                                <Link to="/">
                                    <li class="nav-item dropdown">
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </li>
                                </Link>

                                <Link to="/">
                                    <li class="nav-item dropdown p1">
                                        <FontAwesomeIcon icon={faBagShopping} />
                                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            99
                                            <span class="visually-hidden">unread messages</span>
                                        </span>
                                    </li>
                                </Link>
                                <Link to="/">
                                    <li class="nav-item dropdown">
                                        <FontAwesomeIcon icon={faUser} />
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </nav>
            </Container>
        </Wrapper>
    );
};

export default Header;
