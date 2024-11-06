import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useSelector } from 'react-redux';
const Profile = (props) => {
    const { show, setShow } = props;
    const [key, setKey] = useState('profile');

    const user = useSelector((state) => state.user.account);

    const handleClose = () => {
        setShow(false);
    }

    return (
        <>
            <Modal show={show}
                onHide={handleClose}
                size='xl'
                backdrop="static"
                className="modal-show-profile"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tabs
                        defaultActiveKey="profile"
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                    >
                        <Tab eventKey="profile" title="Profile">
                            <form className="row g-3">
                                <div className="d-flex justify-content-center">
                                    <Col xs={6} md={4}>
                                        <Image src={`data:image/jpeg;base64,${user.image}`} thumbnail className="border border-secondary" />
                                    </Col>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Email</label>
                                    <input type="email"
                                        className="form-control"
                                        value={user.email}
                                        disabled
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Username</label>
                                    <input type="text"
                                        className="form-control"
                                        value={user.username}
                                        disabled
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Role</label>
                                    <input type="text"
                                        className="form-control"
                                        value={user.role}
                                        disabled
                                    />
                                </div>
                            </form>
                        </Tab>
                        <Tab eventKey="resetPassword" title="Reset Password">
                            <form className="row g-3">
                                <div className="col-12">
                                    <label className="form-label">Old Password</label>
                                    <input type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">New Password</label>
                                    <input type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Confirm new password</label>
                                    <input type="text"
                                        className="form-control"
                                    />
                                </div>
                            </form>
                        </Tab>
                    </Tabs>
                </Modal.Body>
                <Modal.Footer>
                    {key === 'resetPassword' ?
                        <Button variant="primary" onClick={handleClose}>
                            Change
                        </Button>
                        :
                        <></>
                    }
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    );
}

export default Profile;