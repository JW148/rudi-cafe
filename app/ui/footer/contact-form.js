"use client"

import { useState } from "react";

export default function ContactForm() {
    
    // use states to check if an input field is focused
    // and to store the email value entered
    // and to store the message value entered
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFocusedMessage, setIsFocusedMessage] = useState(false);

    const [emailValue, setEmailValue] = useState('');
    const [message, setMessage] = useState('');

    // Determine if we should use the focused or text-entered styles
    const shouldHighlight = isFocusedMessage || message.length > 0;

    // State to track email validity and message validity
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidMessage, setIsValidMessage] = useState(true); 


    const handleBlur = () => {
        // if the emailValue is empty, dont perform focus CSS
        if (emailValue.trim() === '') {
            setIsFocusedEmail(false);
        }
        // Validate email format on blur only if the input is not empty
        if (emailValue.trim() !== '') {
            setIsValidEmail(validateEmail(emailValue));
        }
    };
    
    const handleChangeEmail = (e) => {

        // store the value entered for the email
        setEmailValue(e.target.value);

        // Clear error message if input is empty
        setIsValidEmail(e.target.value.trim() === '' || validateEmail(e.target.value));
    };

    const handleChangeMessage = (e) => {

        // store the value entered for the message
        setMessage(e.target.value)

        // validate length of message
        const words = message.trim().split(/\s+/);

        if (words.length > 2) {
            setIsValidMessage(true)
        }else{
            setIsValidMessage(false)
        }
    }

    const validateEmail = (email) =>{

        // Regular expression for validating email format
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

  return (
    <form className=''>
        <div className='pb-4'>
            <label className='sr-only' htmlFor='email'>
                Email
            </label>
            <input 
                className={`placeholder:text-white shadow appearance-none border border-white border-3 cardRadius w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline ${isFocusedEmail ? 'bg-white text-black' : 'bg-transparent text-white'} ${isValidEmail ? '' : 'border-rudi-red'}`}
                id='email' 
                type='email' 
                placeholder='Email' 
                onFocus={() => setIsFocusedEmail(true)}
                onBlur={handleBlur}
                onChange={handleChangeEmail}
                value={emailValue}
                noValidate
                title=''
                required
            />
            {!isValidEmail && <p className="text-rudi-red text-sm font-bold mt-1">Invalid email format</p>}

        </div>
        <div className='pb-4'>
            <label className='sr-only' htmlFor='message'>
                Message
            </label>
            <textarea 
                className={`placeholder:text-white shadow appearance-none border border-white border-3 cardRadius w-full h-36 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${shouldHighlight ? 'bg-white text-black' : 'bg-transparent text-white'} ${isValidMessage ? '' : 'border-rudi-red'}`}
                id='message' 
                placeholder='Message'
                onFocus={() => setIsFocusedMessage(true)}
                onBlur={() => setIsFocusedMessage(false)}
                value={message}
                onChange={handleChangeMessage}
                noValidate
                title=''
                required
            >
            </textarea>
            {!isValidMessage && <p className="text-rudi-red text-sm font-bold mt-1">Message must contain more than two words</p>}
        </div>
        <div className='flex items-center justify-center'>
            <button className='text-white font-bold py-2 px-4 cardRadius border border-white border-3 hover:border-transparent hover:bg-white hover:text-black focus:outline-none focus:border-white' type='button'>
                SEND
            </button>
        </div>
    </form>
  )
}
