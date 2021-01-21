import React from 'react'

const Parent1 = (props) => {
    return (
        <div>
            Parent1
            <div>
                {props.children}
            </div>
        </div>
    );
}
export default Parent1