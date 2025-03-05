import React, { createRef } from 'react'

const FunctionForm = () => {

    const userRef = createRef()
    const emailRef = createRef();


    const submitHandler = (e) => {
        e.preventDefault();
        let userName = userRef.current.value;
        let email = emailRef.current.value;
        alert("Form Submited Successfully");
        console.log(userName, email);

    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor='user-name'>User Name:</label>
                <input type='text' id='user-name' ref={userRef} />
                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' ref={emailRef} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )

}

export default FunctionForm