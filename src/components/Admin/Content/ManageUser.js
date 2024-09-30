import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({})

    const [users, setUsers] = useState([]);

    useEffect(() => { fetchUsers() }, [])

    const fetchUsers = async () => {
        let response = await getAllUsers()
        if (response.EC === 0) {
            setUsers(response.DT)
        }
    }

    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true)
        setDataUpdate(user)
        console.log(user)

    }

    // Luôn đảm bảo được trạng thái khi nhấp vào nút Update > 2 ({} luôn khác với trạng thái trước đó => chạy vào đc useEffect)
    const resetUpdateData = () => {
        setDataUpdate({});
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
                <TableUser
                    users={users}
                    handleClickBtnUpdate={handleClickBtnUpdate}
                />
            </div>
            <ModalCreateUser
                show={showModalCreateUser}
                setShow={setShowModalCreateUser}
                fetchUsers={fetchUsers}
            />
            <ModalUpdateUser
                show={showModalUpdateUser}
                setShow={setShowModalUpdateUser}
                dataUpdate={dataUpdate}
                fetchUsers={fetchUsers}
                resetUpdateData={resetUpdateData}
            />
        </div>
    )
}

export default ManageUser