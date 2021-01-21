import React , { useState, useEffect } from 'react'

let count = 0;

export default function TestHooker4() {
  const [val, setVal] = useState("");

  function getData() {
    setTimeout(()=>{
      setVal('new data '+count);
      count++;
    }, 500)
  }

  useEffect(()=>{
    getData();
  },[]);

  return (
    <div>{val}</div>
  );
}