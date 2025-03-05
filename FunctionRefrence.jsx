import React, { useRef } from 'react'

const FunctionRefrence = () => {

    let myRef = useRef();
    let changeStyle = () => {
        console.log(myRef);
        let data = myRef.current;
        console.log(data);
        data.style.color = "blue";
        data.style.cssText = "color:blue; background-color:black;text-align:center";
        data.innerHTML = "Bte Bye";


    }
    return (
        <div>
            <h1 ref={myRef}>Hello Everyone</h1>
            <button onClick={changeStyle}>Click</button>
        </div>
    )
}

export default FunctionRefrence