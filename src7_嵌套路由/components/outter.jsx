import React from 'react'

const Outter = (props) => {
    return (
        <div>
            <p>A</p>
            {props.children}
            <p>B</p>
        </div>
    )
}

export default Outter