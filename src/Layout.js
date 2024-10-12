import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Admin from './components/Admin/Admin';
import User from './components/User/User';
import HomePage from './components/Home/HomePage';
import ManageUser from './components/Admin/Content/ManageUser';
import DashBoard from './components/Admin/Content/DashBoard';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import App from './App';
const Layout = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route index element={<HomePage />} /> /* Mặc định khi gọi App sẽ dẫn đến HomePage/
                    <Route path="users" element={<User />} />
                </Route>

                <Route path="admins" element={<Admin />} >
                    <Route index element={<DashBoard />} />
                    <Route path="manage-users" element={<ManageUser />} />
                </Route>
                
                <Route path="login" element={<Login />} >
                </Route>

                <Route path="register" element={<Register />} >
                </Route>
        
            </Routes>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}
export default Layout;