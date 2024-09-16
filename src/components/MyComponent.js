// class component
// function component

import React from "react";

class MyComponent extends React.Component {

    // jsx: return only a element
    render() {
        return (
            <div>
                my first component
                {Math.random() * 100}
            </div>
        );
    }
}

export default MyComponent;