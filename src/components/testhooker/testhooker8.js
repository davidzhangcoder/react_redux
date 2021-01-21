import React, { useState, useEffect } from 'react'

let number = 0;
export default function TestHooker8() {
    const [count, setCount] = useState(0);
    let i = number;

    useEffect(() => {
        const id = setInterval(() => {
            console.log("group " + i + " : " + count)
            setCount(c => c + 1);
        }, 5000 );

        //注释以下的代码，之前的Render中的setInterval不会停止
        // return () => {
        //     console.log("clear");
        //     clearInterval(id);
        // }
    }, [count]);

    // console.log("after useEffect");
    number = number + 1;

    return <h1>{count}</h1>;
}

// export default function TestHooker8() {
//     const [count, setCount] = useState(0);

//     console.log("before useEffect");
//     useEffect(() => {
//         console.log("in useEffect");
//         const id = setInterval(() => {
//             console.log("setInterval");
//             setCount(c => c + 1);
//         }, 5000 );

//         return () => {
//             console.log("clear");
//             clearInterval(id);
//         }
//     }, []);
//     console.log("after useEffect");

//     return <h1>{count}</h1>;
// }
