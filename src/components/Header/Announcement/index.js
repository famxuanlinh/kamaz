// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../Announcement/Announcement.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Navbar, NavbarBrand, Row, Col } from 'reactstrap';

const Announcement = () => {
    return (
        <div className="wrapper">
            <div className="inner">
                <div className="d-block d-lg-flex align-items-center justify-content-between text-center">
                    <div className="">CHÚNG TÔI CÓ THỂ LÀM NHỮNG VIỆC MÀ NGƯỜI KHÁC KHÔNG THỂ</div>
                    <div className="d-flex align-items-center text-center">
                        <div className="recall px-5 d-block text-center">
                            <span className="phone-icon">
                                <FontAwesomeIcon icon={faPhone} style={{ fontSize: '20px' }} />
                            </span>
                            <button className="btn btn-warning">Yêu cầu gọi lại</button>
                        </div>
                        <div className="text-center">
                            <div className="">
                                <span className="phone-icon">
                                    <FontAwesomeIcon icon={faPhone} />
                                </span>
                                <span className="p-2">
                                    <strong>096 434 74 50</strong>
                                </span>
                            </div>
                            <div className="work-day" style={{ fontSize: '14px' }}>
                                Т2 - Т6: 8-17, Т7: 8-13, CN - Nghỉ
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <Navbar className="my-2" color="secondary" dark>
        //     <div className="wrapper">
        //         <NavbarBrand>CHÚNG TÔI CÓ THỂ LÀM NHỮNG VIỆC MÀ NGƯỜI KHÁC KHÔNG THỂ</NavbarBrand>
        //         <div className="d-flex">
        //             <div className="nav-item d-flex text-center align-self-center m-3">
        //                 <span style={{ marginRight: '10px' }}>
        //                     <FontAwesomeIcon style={{ fontSize: '24px' }} icon={faPhone} />
        //                 </span>
        //                 <button type="button" className="btn btn-warning">
        //                     Yêu cầu gọi lại
        //                 </button>
        //             </div>
        //             <div className="nav-item d-flex">
        //                 <span style={{ marginRight: '10px' }}>
        //                     <FontAwesomeIcon style={{ fontSize: '24px' }} icon={faLocationDot} />
        //                 </span>
        //                 <div className="nav-item_top">
        // <div className="d-flex">
        //     <span style={{ marginRight: '10px' }}>
        //     </span>
        //         <FontAwesomeIcon icon={faPhone} />
        //     <div className="phone_number" style={{ fontSize: '17px' }}>
        //         0964347450
        //     </div>
        // </div>
        // <div className="nav-item_top_bottom" style={{ fontSize: '14px' }}>
        //     Т2 - Т6: 8-17, Т7: 8-13, CN - Nghỉ
        // </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </Navbar>
    );
};

export default Announcement;
