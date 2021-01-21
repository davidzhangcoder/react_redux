import React, { useState } from 'react'

const useInputState = (initialValue, inputref) => {
    const [value, setValue] = useState(initialValue);

    const onChange = () => {
        // console.log("inputref: ", inputref.current.value);
        // console.log("inputref1: ", inputref.value);
        // console.log("inputref: ", inputref);
        setValue(inputref.current.value)
    }

    return {value, onChange}
}

const ToDoform = (props) => {

    let commentInput = React.createRef();
    let starInput = React.createRef();

    const {...commentText} = useInputState("", commentInput)
    const {...starText} = useInputState("", starInput)

    // console.log("nameText: ", nameText);

    const addComment = () => {
        const commentValue = commentInput.current.value
        const starValue = starInput.current.value
        const result = {commentValue, starValue}
        props.addToDo(result)
    }

    return (
        <div>
            <form>
                <input
                    type="text"
                    name="comment"
                    placeholder="Enter your comment"
                    ref={commentInput}
                    {...commentText}
                >
                </input>

                <input
                    type="text"
                    name="star"
                    placeholder="Enter your star"
                    ref={starInput}
                    {...starText}
                >
                </input>
            </form>
            <button onClick={addComment}>Add</button>
        </div>
    );
}

export default ToDoform;