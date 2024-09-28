import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiService";

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => { fetchUsers() }, [])

    const fetchUsers = async () => {
        let response = await getAllUsers()
        if (response.EC === 0) {
            setUsers(response.DT)
        }
    }
    return (
        <div className="manage-user-container">
            <div className="title">
                ManageUser
            </div>

            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary"
                        onClick={() => setShowModalCreateUser(true)}>
                        <FcPlus /> Add new users
                    </button>
                </div>
            </div>
            <div className="table-user-container">
                <TableUser users={users} />
            </div>
            <ModalCreateUser
                show={showModalCreateUser}
                setShow={setShowModalCreateUser}
                fetchUsers={fetchUsers}
            />
        </div>
    )
}

export default ManageUser