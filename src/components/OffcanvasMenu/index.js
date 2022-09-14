import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap';

import React, { useState } from 'react';

function OffcanvasMenu() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <Button color="primary" onClick={() => setIsOpen(true)}>
                Open
            </Button>
            <Offcanvas toggle={() => setIsOpen((prev) => !prev)}>
                <OffcanvasHeader toggle={() => setIsOpen((prev) => !prev)}>Offcanvas</OffcanvasHeader>
                <OffcanvasBody>
                    <strong>This is the Offcanvas body.</strong>
                </OffcanvasBody>
            </Offcanvas>
        </div>
    );
}

export default OffcanvasMenu;
