import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {

    state = {
        users: [
            { id: 1, name: "Chi Thanh", age: "16" },
            { id: 2, name: "NCT", age: "20" },
            { id: 3, name: "Cheese Thank", age: "29" }
        ]
    }

    handleAddNewUser = (userObj) => {
        this.setState({
            users: [userObj, ...this.state.users]
        })
    }

    handleDeleteUser = (userId) => {
        let copyUsers = [...this.state.users];
        copyUsers = copyUsers.filter(item => item.id !== userId)
        this.setState({
            users: copyUsers
        })
    }


    // jsx: return only a element
    render() {
        return (
            <>
                <AddUserInfo
                    // to deliver func from parent to child do not use func()
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br /><br />
                <DisplayInfo
                    users={this.state.users}
                    handleDeleteUser={this.handleDeleteUser}
                />
            </>
        );
    }
}

export default MyComponent;