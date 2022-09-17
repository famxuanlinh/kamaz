// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: var(--secondary-color);
    width: 100%;
`;

const Announcement = () => {
    return (
        <Wrapper className="shadow-lg ">
            <div className="container ">
                <div className="d-block d-lg-flex align-items-center justify-content-between text-center ">
                    <div className="">CHÚNG TÔI CÓ THỂ LÀM NHỮNG VIỆC MÀ NGƯỜI KHÁC KHÔNG THỂ</div>
                    <div className="d-flex align-items-center justify-content-center">
                        <div
                            className="px-4 d-block text-center"
                            style={{
                                content: ' ',
                                marginRight: '15px',
                                borderRight: '1px solid grey',
                            }}
                        >
                            <FontAwesomeIcon icon={faPhone} style={{ fontSize: '24px', paddingRight: '10px' }} />
                            <button className="btn btn-warning" style={{ fontsize: '14px' }}>
                                Yêu cầu gọi lại
                            </button>
                        </div>
                        <FontAwesomeIcon icon={faLocationDot} style={{ fontSize: '24px', marginRight: '20px' }} />
                        <div className="text-center">
                            <div className="text-start">
                                <span style={{ paddingRight: '10px' }}>
                                    <FontAwesomeIcon icon={faPhone} />
                                </span>
                                <span className="p-2">
                                    <strong>096 434 74 50</strong>
                                </span>
                            </div>
                            <div className="text-start" style={{ fontSize: '14px' }}>
                                Т2 - Т6: 8-17, Т7: 8-13, CN - Nghỉ
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Announcement;
