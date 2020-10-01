import { useState } from 'react'
import Axios from 'axios'

export default function New() {
    return (
        <>
            <div className='screen container max-w-lg mx-auto h-screen flex'>
                <div className='chat w-full m-auto p-8 rounded-md border border-gray-300 space-y-6'>
                    <div className='input flex space-y-4 flex-col text-gray-800'>
                        <div className='text space-y-2'>
                            <p className='text-lg font-bold'>
                                New Agent Request
                            </p>
                            <p className=''>
                                Give us some information about your issue or
                                question and the skillset required to assist
                                you, and we'll connect you with an agent in
                                minutes.
                            </p>
                        </div>
                        <form className='space-y-4'>
                            <div className='space-y-2'>
                                <div className='flex items-stretch bg-gray-100 border border-gray-300 rounded-md'>
                                    <label
                                        htmlFor=''
                                        className='px-3 flex items-center whitespace-no-wrap text-xs font-bold border-r border-gray-300'
                                    >
                                        Your Email
                                    </label>
                                    <input
                                        type='text'
                                        placeholder='you@yourname.com'
                                        className='w-full p-2'
                                    />
                                </div>
                                <div className='flex items-stretch bg-gray-100 border border-gray-300 rounded-md'>
                                    <label
                                        htmlFor=''
                                        className='px-3 flex items-center whitespace-no-wrap text-xs font-bold border-r border-gray-300'
                                    >
                                        Name
                                    </label>
                                    <input
                                        type='text'
                                        placeholder='What should we call you?'
                                        className='w-full p-2'
                                    />
                                </div>
                            </div>
                            <div className='space-y-2'>
                                <div className='flex items-stretch bg-gray-100 border border-gray-300 rounded-md'>
                                    <label
                                        htmlFor=''
                                        className='px-3 flex items-center whitespace-no-wrap text-xs font-bold border-r border-gray-300'
                                    >
                                        Title
                                    </label>
                                    <input
                                        type='text'
                                        placeholder='create-react-app deployment is failing on my VPS!'
                                        className='w-full p-2'
                                    />
                                </div>
                                <div className='flex items-stretch bg-gray-100 border border-gray-300 rounded-md'>
                                    <label
                                        htmlFor=''
                                        className='px-3 flex items-center whitespace-no-wrap text-xs font-bold border-r border-gray-300'
                                    >
                                        Skills Needed
                                    </label>
                                    <input
                                        type='text'
                                        placeholder='react, ubuntu, servers'
                                        className='w-full p-2'
                                    />
                                </div>
                            </div>
                            <textarea
                                placeholder='Explain your issue or question...'
                                className='w-full h-24 p-2 border border-gray-300 rounded-md'
                            ></textarea>
                            <div className='flex space-x-2 items-center'>
                                <button className='flex-1 py-2 px-4 border rounded-md'>
                                    Help
                                </button>
                                <button className='flex-1 py-2 px-4 border bg-pink-400 text-white rounded-md'>
                                    Continue
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
