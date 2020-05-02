import React, {useReducer} from 'react'
import styles from "./contactStyle.module.css"

const initialState = {
    username: "",
    email: "",
    message: ""
}

const reducer = (state, action) => {
    switch(action.type) {
        case "SET_NAME": return {...state, username: action.value };
        case "SET_EMAIL": return {...state, email: action.value}
        case "SET_MESSAGE": return {...state, message: action.value}
        default: return undefined
    }
}

function Contact() {
    const [messageData, dispatch] = useReducer(reducer, initialState)

    const handleFormInputChange = e => {
        switch(e.target.type) {
            case "text":
                dispatch({type: "SET_NAME", value: e.target.value});
                break;
            case "email": 
                dispatch({type: "SET_EMAIL", value: e.target.value});
                break;
            case "textarea": 
                dispatch({type: "SET_MESSAGE", value: e.target.value});
                break;
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        alert(`Your name is ${messageData.username}. Your email is ${messageData.email}. Your message to us is as follows: ${messageData.message}`)
    }

    return (
        <div id={styles.contact}>
            <form id={styles.form} onSubmit={handleSubmit}>
                <input type="text" value={messageData.username} onChange={handleFormInputChange}/>
                <input type="email" value={messageData.email} onChange={handleFormInputChange}/>
                <textarea type="textarea" value={messageData.message} onChange={handleFormInputChange}></textarea>
                <input id={styles.submit} type="submit" value="Send"/>
            </form>
        </div>
    )
}

export default Contact
