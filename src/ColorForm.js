import React, { useState } from 'react'


function ColorForm(props){
    let [input, setInput] = useState('') //returns input and the function used to create the state. the hook is useState for creating and updaing

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addColor(input)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}

export default ColorForm
