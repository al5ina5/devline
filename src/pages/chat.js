import { useState } from 'react'
import Axios from 'axios'

export default function Chat() {
    var [messageInput, setMessageInput] = useState()
    var [messages, setMessages] = useState([])

    const sendMessage = (e) => {
        e.preventDefault()
        Axios.post(
            'https://discordapp.com/api/webhooks/761064784102686740/LJH2CNYTz4cGHiE4xfHS56wV9ABsSM2rnKFSS2WLafojaeBKYhM9ohX6E0rYZ5S32dEm',
            {
                content: messageInput,
                username: 'Sarah Abigail'
            }
        )
            .then((res) => console.log(res))
            .catch((error) => console.log(error))

        setMessages([...messages, messageInput])
    }

    return (
        <>
            <div className='screen container max-w-lg mx-auto h-screen flex'>
                <div className='chat w-full m-auto p-4 rounded-md border border-gray-300 space-y-6'>
                    <div className='messages flex flex-col'>
                        {messages.map((message, index) => (
                            <div className='message'>
                                <p>{message}</p>
                            </div>
                        ))}
                    </div>
                    <div className='input'>
                        <form
                            onSubmit={sendMessage}
                            className='input-group flex items-center border border-gray-300 rounded-md'
                        >
                            <input
                                type='text'
                                placeholder='Type your message..'
                                className='w-full p-2 border-r border-gray-300'
                                onChange={(e) =>
                                    setMessageInput(e.target.value)
                                }
                            />
                            <button className='px-4 block h-full'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
