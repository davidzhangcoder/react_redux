import React, { useEffect, useState } from 'react'

export default function TestHooker6() {
    console.log("TestHooker6");

    //1.
    // const [count, setCount] = useState({age:0})

    //2.
    // const [count, setCount] = useState({age:0})
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("useEffect");
    }, [display])

    //display函数声明在useEffect前或后，产生的结果是不一样的

    //猜测：
    //声明在后，因为变量提升，useEffect中的[display],实际是[undefined]

    //声明成“const display = () => {”或“function display() {”,产生的结果是不一样的
    //第一种方式，是变量提升，即把变量声明提前，但变量值是undefined（直到代码运行到赋值语句前）
    //第二种方式，是函数提升
    const display = () => {
        console.log("display")
        console.log(count)
        console.log(a)
    }

    const a = [count];

    //1.
    // const doClickCount = () => {
    //     count.age = 2
    //     setCount({...count})
    //     console.log(count)
    // }

    //2.
    // const doClickCount = () => {
    //     count.age = 2
    //     setCount(count)
    //     console.log(count)
    // }

    const doClickCount = () => {
        setCount(count+1)
    }

    return (
        <div>
            <button onClick={doClickCount}>click Count</button>
            <button onClick={display}>display</button>
            <div>TestHooker6</div>
        </div>
    )
}