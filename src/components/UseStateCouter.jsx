import React, { useState } from "react";

function UseStateCounter() {
    const [count, setCount] = useState(0);
    return(
        <div>
            <p>제가 클릭을 {count}번이나 했어요!</p>
            {
                <button onClick={()=>setCount(count+1)}>나를 눌러보세요💜</button>
            }
        </div>
    );
}
export default UseStateCounter;