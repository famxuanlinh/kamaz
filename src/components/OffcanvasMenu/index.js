import {
    Button,
    Offcanvas,
    OffcanvasBody,
    OffcanvasHeader,
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../OffcanvasMenu/OffcanvasMenu.css';
import Search from '../Search';
import { Link } from 'react-router-dom';
import { BASE_URL } from '~/constants/env';

function OffcanvasMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    const [postList, setpostList] = useState([]);

    const getCategory = () => {
        fetch(`${BASE_URL}/categories`)
            .then((res) => res.json())
            .then((res) => {
                setpostList(res.data);
            });
    };

    useEffect(() => {
        getCategory();
    }, []);
    return (
        <div className="d-block d-lg-none">
            <Button
                style={{ backgroundColor: 'transparent', border: 'none', position: 'relative', paddingRight: '24px' }}
                onClick={() => setIsOpen(true)}
            >
                <FontAwesomeIcon icon={faBars} style={{ fontSize: '24px', color: 'black' }} />
            </Button>
            <Offcanvas
                style={{ padding: '50px 40px', maxWidth: '400px' }}
                isOpen={isOpen}
                toggle={() => setIsOpen((prev) => !prev)}
                direction={'start'}
            >
                <OffcanvasHeader
                    toggle={() => setIsOpen((prev) => !prev)}
                    style={{ paddingBottom: '0' }}
                ></OffcanvasHeader>
                <hr style={{ width: '100%', margin: '20px 0' }} />
                <Search />
                <OffcanvasBody style={{ margin: '20px 0 0', fontSize: '1.4rem' }}>
                    <Accordion open={open} toggle={toggle}>
                        <div style={{ padding: '1rem 1.25rem' }}>
                            <Link to="/">TRANG CHỦ</Link>
                        </div>
                        {/* <AccordionItem style={{ border: 'none' }}>
                            <AccordionHeader targetId="1">TRANG CHỦ</AccordionHeader>
                        </AccordionItem> */}
                        <AccordionItem style={{ border: 'none' }}>
                            <AccordionHeader targetId="2">SỬA CHỮA</AccordionHeader>
                            <AccordionBody accordionId="2">
                                <div className="accordionItemRemote">
                                    <Link to="/">Chuẩn đoán</Link>
                                </div>
                                <div className="accordionItemRemote">
                                    <Link to="/">Bảo Trì Kỹ Thuật</Link>
                                </div>
                                <div className="accordionItemRemote">
                                    <Link to="/">Đồng Sơn Lại xe</Link>
                                </div>
                                <div className="accordionItemRemote">
                                    <Link to="/">Bảo Hành Xe</Link>
                                </div>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem style={{ border: 'none' }}>
                            <AccordionHeader targetId="3">PHỤ TÙNG KAMAZ</AccordionHeader>
                            <AccordionBody accordionId="3">
                                {postList.map((item) => (
                                    <div className="accordionItemRemote text-capitalize" key={item.id}>
                                        <Link to="/">
                                            <span className="text-primary" style={{ fontWeight: '600' }}>
                                                {item.attributes.group_number}{' '}
                                            </span>
                                            {item.attributes.name}
                                        </Link>
                                    </div>
                                ))}
                            </AccordionBody>
                        </AccordionItem>
                        <div style={{ padding: '1rem 1.25rem' }}>
                            <Link to="/">THÔNG TIN VỀ CÔNG TY</Link>
                        </div>
                        <div style={{ padding: '1rem 1.25rem' }}>
                            <Link to="/">TUYỂN DỤNG</Link>
                        </div>
                        <div style={{ padding: '1rem 1.25rem' }}>
                            <Link to="/">THÔNG TIN LIÊN HỆ</Link>
                        </div>
                    </Accordion>
                </OffcanvasBody>
            </Offcanvas>
        </div>
    );
}

export default OffcanvasMenu;
