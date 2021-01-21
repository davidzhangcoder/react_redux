import React , { useState, useEffect, useRef } from 'react'

export default function TestHooker7() {
    const [count, setCount] = useState(0);
    const latestCount = useRef(count);
  
    //每次 Render 都有自己的 Props 与 State
    //每次 Render 都有自己的事件处理
    //每次 Render 都有自己的 Effects

    //重点：但 useRef 在每次Render返回的Ref都一样
    //所以，在本次Render中对Ref的值修改，那么前几次Render中对Ref的读取，也会都到本次的值
    useEffect(() => {
      // Set the mutable latest value
      latestCount.current = count;
      setTimeout(() => {
        // Read the mutable latest value
        console.log(`1.You clicked ${latestCount.current} times`);
        console.log(`2.You clicked ${count} times`);
      }, 3000);
    });
    // ...

    const doClick = () => {
        setCount( count + 1 );
    }

    return (
        <div>
            TestHooker7
            <button onClick={doClick}>click</button>
        </div>
    )
  }