// class component
// function component

import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'NCT',
        address: 'Binh Duong',
        age: 20
    };

    handleClick = (event) => {
        console.log(">>> Click me my button")

        this.setState({
            name: 'Chi Thanh',
            age: Math.floor((Math.random() * 100) + 1)
        })

    }

    handleOnMouseOver(event) {
        // console.log(event.pageX)
    }

    // jsx: return only a element
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
                <button onClick={(event) => { this.handleClick(event) }}>Click me</button>
            </div>
        );
    }
}

export default MyComponent;