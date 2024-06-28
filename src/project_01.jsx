import { useState } from "react";

function Valuechanger () {

    let [counter,setCounter] = useState(16);

    const addVal=()=>{
        counter=counter+1
        setCounter(counter);
    }
    const depVal=()=>{
        
        counter=counter-1
        setCounter(counter);
        if(counter<=0){
            setCounter(0);
            counter=0;
            console.log(counter)
        }
    }
    
    return(
        <>
        <h1>New Project</h1>
        <h2>Value changer {counter}</h2>
        <button
            onClick={addVal}
        >Value adder {counter} </button>
        <br />
        <button
            onClick={depVal}
        >Value derpreciate{counter}</button>
        <p> Value after using hook : useState {counter}</p>
        </>
    )
}

export default Valuechanger;