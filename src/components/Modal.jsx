import React from 'react';
import burger from '../assests/bg-burger.jpg'
import { Modal as BootstrapModal } from 'react-bootstrap';

const Modal = (props) => {
    return (
        <BootstrapModal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <BootstrapModal.Header
                closeButton
                style={{
                    backgroundImage:
                        "linear-gradient(137.48deg, #000000 10%, #000000 45%, #ad4907 79%, #c07008fb 90%)",
                }}
            >
                <BootstrapModal.Title id="contained-modal-title-vcenter" style={{ color: "white" }}>
                    Order Delicious yummy Food
                </BootstrapModal.Title>
            </BootstrapModal.Header>
            <BootstrapModal.Body
                style={{
                    backgroundImage: `url(${burger})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    minHeight: "200px",
                }}
            >
                <div className='text-center'>
                    <a
                        href="tel:+923161248074"
                        style={{ textDecoration: "none", color: "white", fontSize: "40px" }}
                    >
                        Call Us:
                    </a></div>
                <div className='text-center'>
                    <a
                        href="tel:+923161248074"
                        style={{ textDecoration: "none", color: "white", fontSize: "40px" }}
                    >
                        (+92)309 111 2276
                    </a></div>
            </BootstrapModal.Body>
        </BootstrapModal>
    );
};

export default Modal;
