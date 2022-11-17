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
    const [service, setService] = useState([]);
    const [service1, setService1] = useState([]);

    const getCategory = () => {
        fetch(`${BASE_URL}/categories?filters[is_menu][$eq]=true`)
            .then((res) => res.json())
            .then((res) => {
                setpostList(res.data);
            });
    };
    const getRepair = () => {
        fetch(`${BASE_URL}/repairs?filters[is_menu][$eq]=true`)
            .then((res) => res.json())
            .then((res) => {
                setService(res.data);
            });
    };
    const getRepair1 = () => {
        fetch(`${BASE_URL}/repairs?filters[is_menu][$eq]=false`)
            .then((res) => res.json())
            .then((res) => {
                setService1(res.data);
            });
    };

    useEffect(() => {
        getCategory();
        getRepair();
        getRepair1();
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
                <Search show={false} />
                <OffcanvasBody style={{ margin: '20px 0 0', fontSize: '1.4rem' }}>
                    <Accordion open={open} toggle={toggle}>
                        <div style={{ padding: '1rem 1.25rem' }}>
                            <Link to="/">TRANG CHỦ</Link>
                        </div>

                        <AccordionItem style={{ border: 'none' }}>
                            <AccordionHeader targetId="2">SỬA CHỮA</AccordionHeader>
                            <AccordionBody accordionId="2">
                                {service.map((item) => (
                                    <div className="accordionItemRemote" key={item.id}>
                                        <Link to={`/sua-chua/${item.attributes.slug}`}>{item.attributes.name}</Link>
                                    </div>
                                ))}
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem style={{ border: 'none' }}>
                            <AccordionHeader targetId="3">PHỤ TÙNG KAMAZ</AccordionHeader>
                            <AccordionBody accordionId="3">
                                <div className="accordionItemRemote text-capitalize">
                                    <Link
                                        to="/danh-muc/tat-ca-san-pham"
                                        style={{
                                            color: '#1f3f81',
                                            fontSize: '1.6rem',
                                            fontWeight: '600',
                                        }}
                                    >
                                        Tất Cả Sản Phẩm
                                    </Link>
                                </div>
                                {postList.map((item) => (
                                    <div className="accordionItemRemote text-capitalize" key={item.id}>
                                        <Link to={`/danh-muc/${item.attributes.slug}`}>
                                            <span className="text-primary" style={{ fontWeight: '600' }}>
                                                {item.attributes.group_number}{' '}
                                            </span>
                                            {item.attributes.name}
                                        </Link>
                                    </div>
                                ))}
                            </AccordionBody>
                        </AccordionItem>
                        {service1.map((item) => (
                            <div style={{ padding: '1rem 1.25rem' }} key={item.id}>
                                <Link to={`/sua-chua/${item.attributes.slug}`}>{item.attributes.name}</Link>
                            </div>
                        ))}
                    </Accordion>
                </OffcanvasBody>
            </Offcanvas>
        </div>
    );
}

export default OffcanvasMenu;
