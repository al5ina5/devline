import { useState } from 'react'
import { useRouter } from 'next/router'
import Axios from 'axios'
import { loadStripe } from '@stripe/stripe-js'
const stripePromise = loadStripe(
    'pk_test_51Gy5KMFHQBpXr1Doobx42sY4zGeSTOBBxoY0KCNKLR5xHuBFnJJu054AY9gGQhiqU7QCR0HQHCg32KKbMBaoKaBv00YpO1BaiK'
)

export default function Checkout(props) {
    var router = useRouter()

    var { data } = props

    const checkoutWithStripe = async (e) => {
        e.preventDefault()
        try {
            var post = await Axios.post('http://localhost:5000/api/pay', {
                job_id: router.query.uid
            })
        } catch (e) {
            console.log(e)
            return
        }

        const { id } = post.data
        console.log(post.data)

        const stripe = await stripePromise
        const { error } = await stripe.redirectToCheckout({
            sessionId: id
        })
    }

    return (
        <>
            <div className='screen container max-w-lg mx-auto h-screen flex'>
                <div className='chat w-full m-auto p-8 rounded-md border border-gray-300 space-y-6'>
                    <div className='input flex space-y-4 flex-col text-gray-800'>
                        <div className='text space-y-2'>
                            <p className='text-lg font-bold'>Checkout</p>
                            <p className=''>
                                Sign up or login to proceed. You will not be
                                charged until after your chat session has
                                completed. View our pricing calculator here.
                            </p>
                        </div>
                        <div className='note border border-yellow-300 bg-yellow-100 p-8 rounded-md'>
                            <p>{data.createdAt}</p>
                            <p>you@yourname.com</p>
                            <p>ID: {router.query.uid}</p>
                            <br />
                            <p className='font-bold'>{data.title}</p>
                            <p>{data.description}</p>
                            <br />
                            <p>
                                <b>Skills Needed: </b>
                                {data.skillset.join(', ')}
                            </p>
                        </div>
                        <form className='space-y-2'>
                            <div className='flex space-x-2 items-center'>
                                <button className='flex-1 py-2 px-4 border cursor-not-allowed pointer-events-none opacity-50 bg-yellow-500 text-white rounded-md'>
                                    Pay with Bitcoin
                                </button>
                                <button
                                    onClick={checkoutWithStripe}
                                    className='flex-1 py-2 px-4 border bg-green-500 text-white rounded-md'
                                >
                                    Pay with USD
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(ctx) {
    console.log(ctx)

    try {
        var get = await Axios.get(
            'http://localhost:5000/api/jobs/get/5f757ee7842d473dfe161cec'
        )
    } catch (e) {
        console.log(e)
    }

    var data = get.data
    return {
        props: {
            data
        }
    }
}
