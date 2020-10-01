export default function Index() {
    return (
        <>
            <div className='home h-screen container mx-auto max-w-2xl flex box-border p-6'>
                <div className='content m-auto space-y-4'>
                    <h1 className='text-4xl font-bold'>
                        You're a developer. You need help.
                    </h1>
                    <h2 className='text-2xl'>
                        Get help from a professional developer to help you
                        within minutes using devline.
                    </h2>
                    <p>
                        No more wasting your time on headaches. Devline is here
                        to solve your issue.
                    </p>
                    <div className='three flex space-x-4'>
                        <div className='split flex items-center border border-gray-300 rounded-md p-4'>
                            <p>You tell us your problem.</p>
                        </div>
                        <div className='split flex items-center border border-gray-300 rounded-md p-4'>
                            <p>
                                We find you a professional with the correct
                                skillset.
                            </p>
                        </div>
                        <div className='split flex items-center border border-gray-300 rounded-md p-4'>
                            <p>
                                A devline professional helps you via livechat in
                                minutes.
                            </p>
                        </div>
                    </div>
                    <button
                        href=''
                        className='px-4 py-2 bg-pink-500 rounded-md text-white text-2xl'
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </>
    )
}
