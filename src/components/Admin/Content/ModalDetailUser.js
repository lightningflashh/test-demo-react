import React from "react";
import { Button } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import { Modal } from "react-bootstrap";
import _ from 'lodash';
import { IoImagesSharp } from "react-icons/io5";

const ModalDetailUser = (props) => {
    const { show, setShow, dataDetail } = props;

    const handleClose = () => {
        setShow(false);
        props.resetDetailData();
    }

    return (
        <>
            <Modal show={show}
                onHide={handleClose}
                size='xl'
                backdrop="static"
                className="modal-add-user"
            >
                <Modal.Header closeButton>
                    <Modal.Title>User Detail</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">

                        <Row className="justify-content-center">
                            <Col xs={6} md={4} className="text-center">
                                {
                                    dataDetail.image !== '' ? (
                                        <Image
                                            src={`data:image/jpeg;base64,${dataDetail.image}`}
                                            roundedCircle
                                            style={{ width: '171px', height: '180px' }}
                                        />
                                    ) : (
                                        <p><IoImagesSharp style={{ width: '171px', height: '180px' }} /></p>
                                    )
                                }
                            </Col>
                        </Row>

                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email"
                                className="form-control"
                                value={dataDetail.email}
                                disabled
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input type="text"
                                className="form-control"
                                value={dataDetail.username}
                                disabled
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <input type="text"
                                className="form-control"
                                value={dataDetail.role}
                                disabled
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>

            </Modal >
        </>
    );
}

export default ModalDetailUser