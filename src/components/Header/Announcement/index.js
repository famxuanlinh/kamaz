// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const Announcement = () => {
    return (
        <nav className="navbar navbar-light" style={{ backgroundColor: '#e5e8f4' }}>
            <div className="container ">
                <span className="navbar-text flex-grow-1" style={{ fontSize: '12px' }}>
                    CHÚNG TÔI CÓ THỂ LÀM NHỮNG VIỆC MÀ NGƯỜI KHÁC KHÔNG THỂ
                </span>
                <div className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <div className="d-flex">
                        <div className="nav-item d-flex text-center align-self-center m-3">
                            <span style={{ marginRight: '10px' }}>
                                <FontAwesomeIcon style={{ fontSize: '24px' }} icon={faPhone} />
                            </span>
                            <button type="button" className="btn btn-warning">
                                Yêu cầu gọi lại
                            </button>
                        </div>
                        <div className="nav-item d-flex">
                            <span style={{ marginRight: '10px' }}>
                                <FontAwesomeIcon style={{ fontSize: '24px' }} icon={faLocationDot} />
                            </span>
                            <div className="nav-item_top">
                                <div className="d-flex">
                                    <span style={{ marginRight: '10px' }}>
                                        <FontAwesomeIcon icon={faPhone} />
                                    </span>
                                    <div className="phone_number" style={{ fontSize: '17px' }}>
                                        0964347450
                                    </div>
                                </div>
                                <div className="nav-item_top_bottom" style={{ fontSize: '14px' }}>
                                    Т2 - Т6: 8-17, Т7: 8-13, CN - Nghỉ
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Announcement;
