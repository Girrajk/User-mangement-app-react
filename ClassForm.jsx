import React, { Component, createRef } from 'react'

export default class ClassForm extends Component {

    constructor(props) {
        super(props);

        this.userRef = createRef()
        this.emailRef = createRef();
    }

    submitHandler = (e) => {
        e.preventDefault();
        let userName = this.userRef.current.value;
        let email = this.emailRef.current.value;
        alert("Form Submited Successfully");
        console.log(userName, email);

    };
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <label htmlFor='user-name'>User Name:</label>
                    <input type='text' id='user-name' ref={this.userRef} />
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' ref={this.emailRef} />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}
