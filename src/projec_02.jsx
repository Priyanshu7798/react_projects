import React from "react";

function Card ({userName='Groot'}) {
    
    return(
        <>
            <div className="box">
                <h1>Hello This is props...</h1>
                <h2>I am <h1>{userName}</h1></h2>
            </div>
        </>
    )
}
export default Card;