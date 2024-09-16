import React from "react";
import './DisplayInfo.scss';
import logo from './../logo.svg';

class DisplayInfo extends React.Component {

    // constructor(props) {
    //     super(props);
    //     // babel complier
    //     state = {
    //         isShowUsers: true
    //     }
    // }

    state = {
        isShowUsers: true
    }

    handleShowHide = () => {
        this.setState({
            isShowUsers: !this.state.isShowUsers
        })
    }

    render() {
        const { users } = this.props; // object
        // template + logic
        return (
            <div className="display-info-container">
                {/* <img src={logo} /> */}
                <div>
                    <span onClick={() => { this.handleShowHide() }}> {this.state.isShowUsers === true ? "Hide users" : "List users"} </span>
                </div>

                <br />

                {this.state.isShowUsers &&
                    <>
                        {users.map((user, index) => {
                            return (
                                <div key={users.id} className={+user.age < 20 ? "green" : "red"}>
                                    <div>
                                        <div>My name is {user.name}</div>
                                        <div>Age: {user.age}</div>
                                    </div>

                                    <div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)}> Delete </button>
                                    </div>

                                    <hr />
                                </div>
                            )
                        })}
                    </>
                }
            </div >
        )
    }
}

export default DisplayInfo;