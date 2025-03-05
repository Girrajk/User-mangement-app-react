import React, { Component, createRef } from 'react'

export default class ClassRefrense extends Component {

    constructor(props) {
        super(props);
        this.myRef = createRef();
    }
    changeStyle = () => {

        let data = this.myRef.current;
        // data.style.color = "red";
        data.style.cssText = "color: green; background-color:aqua";
        data.innerHTML = "Bye Bye";
        // console.log(this.myRef.current);
        // console.log(this.myRef);

    };
    render() {
        return (
            <div>
                <h1 ref={this.myRef}>Hello Everyone</h1>
                <button onClick={this.changeStyle}>Click</button>
            </div>
        )
    }
}
