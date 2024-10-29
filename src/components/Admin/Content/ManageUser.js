import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { MdLibraryAdd } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { getAllUsers, getUsersWithPaginate } from "../../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";

const ManageUser = (props) => {
    const LIMIT_USER = 5;
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({})
    const [dataDelete, setDataDelete] = useState({})
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        //fetchUsers()
        fetchListUsersWithPaginate(1);
    }, [])

    const fetchUsers = async () => {
        let response = await getAllUsers()
        if (response.EC === 0) {
            setUsers(response.DT)
        }
    }

    const fetchListUsersWithPaginate = async (page) => {
        let response = await getUsersWithPaginate(page, LIMIT_USER)
        if (response.EC === 0) {
            console.log(`res.dt = ${response.DT}`)
            setUsers(response.DT.users)
            setPageCount(response.DT.totalPages)
        }
    }

    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true)
        setDataUpdate(user)
    }

    const handleClickBtnDelete = (user) => {
        setShowModalDeleteUser(true)
        setDataDelete(user)
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
                    <button className="btn btn-outline-primary"
                        onClick={() => setShowModalCreateUser(true)}>
                        <MdLibraryAdd /> Add new users
                    </button>
                </div>
            </div>
            <div className="table-user-container">
                <TableUserPaginate
                    users={users}
                    handleClickBtnUpdate={handleClickBtnUpdate}
                    handleClickBtnDelete={handleClickBtnDelete}
                    // Phần riêng
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    pageCount={pageCount}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
            <ModalCreateUser
                show={showModalCreateUser}
                setShow={setShowModalCreateUser}
                fetchUsers={fetchUsers}
                fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            <ModalUpdateUser
                show={showModalUpdateUser}
                setShow={setShowModalUpdateUser}
                dataUpdate={dataUpdate}
                fetchUsers={fetchUsers}
                resetUpdateData={resetUpdateData}
                fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            <ModalDeleteUser
                show={showModalDeleteUser}
                setShow={setShowModalDeleteUser}
                dataDelete={dataDelete}
                fetchUsers={fetchUsers}
                fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div >
    )
}

export default ManageUser