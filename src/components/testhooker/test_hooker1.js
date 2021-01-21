import React , { useState, useEffect } from 'react'

function TestHooker() {

    const [count,setCount] = useState(0)

    const doCount = () => {
        setCount(count+1)
    }

    return (
        <div>
            TestHooker
            <p>{count}</p>
            <button onClick={doCount}>add/Sub</button>
        </div>
    );
}

export default TestHooker;