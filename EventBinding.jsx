import React, { Component } from 'react'

export default class EventBinding extends Component {
    constructor(props) {
        super(props);
        // this.updateData = this.updateData.bind(this);
        this.state = {
            name: "Raj",
            age: 20,
        };
    }

    updateData () {
        this.setState({
            name: "simran",
            age: 55,
        });
    }

    // updateData = () => {
    //     this.setState({
    //         name: "simran",
    //         age: 55,
    //     });
    // }



    render() {

        let { name, age } = this.state;
        return (
            <div>
                <p>my anme is {name} and i ame {age} year old</p>
                {/* <button onClick={this.updateData}>Click</button> */}
                {/* <button onClick={this.updateData.bind(this)}>Click</button> */}
                <button onClick={()=>this.updateData.bind(this)()}>Click</button>
            </div>
        )
    }
}
