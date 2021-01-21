import React, { useState, useEffect, useCallback, useRef } from "react";
import ReactDOM from "react-dom";

// import "./styles.css";

// for (var i = 1; i <= 5; i++) {
//     setTimeout( ()=> {
//         var j =i;
//         return (function (){
//         console.log(j);
//     })()},i*1000);
// }

// for (var i = 1; i <= 5; i++) {
//     (function (j) {
//         setTimeout( ()=> {
//             console.log(j);
//         }, j*1000)
//     })(i)
// }

// 用于记录 getData 调用次数
// let count = 0;

function useRefCallback(fn, dependencies) {
    //利用useRef不变的特性
    const ref = useRef(fn);
    const dep = useRef(dependencies);

    // console.log("before changed reference: ", ref.current === fn );
    // console.log("before changed dependencies: ", dep.current === dependencies, dep.current , dependencies);

    //switch comment and uncomment following
    useEffect(() => {
        console.log("changed reference: ", ref.current === fn, dependencies);
        ref.current = fn;
        dep.current = dependencies;
    }, [fn, ...dependencies]);

    return useCallback(() => {
        const fn = ref.current;
        return fn();
    }, [ref]);
}

export default function TestHooker5() {
    
    console.log("TestHooker5");
    const [val, setVal] = useState("");
    let count = 0;

    console.log("TestHooker5 - count: ", count);
    const getData = useRefCallback(() => {
        // console.log("val: ",val);

        setTimeout(() => {
            // console.log("in setTimeout");
            // console.log("before: val = ", val, "count = ", count);
            setVal("new data " + count);
            count++;

            // console.log("after: val = ", val, "count = ", count);
        }, 500);
        console.log("after setTimeout");
    }, [val]);

    const changeVal = () => {
        setVal("changeVal - new data " + count);
        count++;
    }

    return (
        <div>
            <button onClick={changeVal}>change val</button>
            <button onClick={()=>getData()}>do getData</button>
            {/* <Child val={val} getData={getData} /> */}
        </div>
    )
}

function Child({ val, getData }) {
    console.log("Child");
    useEffect(() => {
        console.log("Child - useEffect");
        getData();
    }, [getData]);

    return <div>{val}</div>;
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
