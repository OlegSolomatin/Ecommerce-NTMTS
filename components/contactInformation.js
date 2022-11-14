import {useState} from "react";
import Pay from "./pay";

export default function ContanctInfomation (props) {

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [postCode, setPostCode] = useState('')
    const [email, setEmail] = useState('')

    return (
        <>
            <section className={'form-sticky w-fit sticky t-5 flex bg-slate-800 p-4 rounded-lg h-fit flex-col justify-start'}>
                <form action="/api/checkout" method="POST">
                    <div className="relative w-72 mb-4">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </div>
                        <input name="name" value={name} onChange={e => setName(e.target.value)} type="text" id="name" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" required />
                    </div>
                    <div className="relative w-72 mb-4">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        </div>
                        <input name="address" value={address} onChange={e => setAddress(e.target.value)} type="text" id="address" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Street" required />
                    </div>
                    <div className="relative w-72 mb-4">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </div>
                        <input name="postCode" value={postCode} onChange={e => setPostCode(e.target.value)} type="text" id="postCode" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City and post" required />
                    </div>
                    <div className="relative w-72 mb-4">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                            </svg>
                        </div>
                        <input name="email" value={email} onChange={e => setEmail(e.target.value)} type="email" id="email" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
                    </div>
                    <div className="relative flex justify-between w-72 mb-4">
                        <h4 className={'font-bold text-gray-400'}>Subtotal</h4>
                        <span className={'font-bold'}>$&nbsp;{props.subTotal}</span>
                    </div>
                    <div className="relative flex justify-between w-72 mb-4">
                        <h4 className={'font-bold text-gray-400'}>Shipping</h4>
                        <span className={'font-bold'}>Free</span>
                    </div>
                    <div className="relative flex justify-between w-72 mb-4">
                        <h4 className={'font-bold text-gray-400'}>Taxes</h4>
                        <span className={'font-bold'}>$&nbsp;{props.taxes}</span>
                    </div>
                    <div className="relative flex justify-between w-72 pt-4 border-t border-indigo-500">
                        <h4 className={'font-bold text-gray-400'}>Total</h4>
                        <span className={'font-bold'}>$&nbsp;{props.total}</span>
                    </div>
                    <Pay />
                    <input type="hidden" name="products" value={props.products.join(',')}/>
                    <button className="w-full flex items-center justify-center p-2 mt-2 bg-indigo-700 cursor-pointer hover:bg-indigo-500 font-bold rounded-lg">
                        Pay ${props.total}
                    </button>
                </form>
            </section>
        </>
    )
}