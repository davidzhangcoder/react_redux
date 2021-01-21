import React, { useCallback, useEffect, useRef, useState } from 'react'

function useTest(fn) {
    const ref = useRef(fn);

    console.log("[fn,...dep]", [fn])
    useEffect(() => {
        //执行useEffect:
        //如没有状态更新，就算有新的fn,也不会执行
        console.log("useEffect")
        ref.current = fn
    }, [fn]);
    // }, [fn,...dep]);

    return useCallback(() => {
        return ref.current;
    }, [ref]);
}

export default function TestHooker9() {

    const [val, setVal] = useState("");
    // const [val, setVal] = useState(0);
    let count = 0;
    console.log("TestHooker9 : " , count , val)

    const [test, setTest] = useState(0);

    const getData = useTest(() => {

        // setTimeout(() => {
            setVal("new data : "+ count)
            // setVal(val + 1)
        // }, 500);

        console.log("this is main call" + " : " + count)
    })

    const changeCount = () => {
        // setVal("changeCount : " + count)
        // setVal(val + 1)

        setTest(test+1)
    }

    const display = () => {
        getData()();
    }

    return (
        <div>
            <button onClick={changeCount}>change count</button>
            <button onClick={display}>display</button>
            TestHooker9
        </div>
    );
}