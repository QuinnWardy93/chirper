import React from 'react'

export default function Post(props) {
    return (
        <div>
            <input type="text" placeholder="What's your Name?" onChange={props.handleNameChange}/>
            <input type="text" placeholder="What's your Message?" onChange={props.handleMessageChange} />
            <input type="button" value="Submit" onClick={props.handleSubmit}/>
        </div>
    )
}
