import React, { useState } from "react";

function UseStateName(){
    const [name, setName] = useState("멋쟁이사자");
    return(
        <div>
            <h1>안녕하세요 ~~</h1>
        </div>
    );
}