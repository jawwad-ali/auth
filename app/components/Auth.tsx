'use client'
import { useRouter } from 'next/navigation';
import React, { FormEvent, useRef } from 'react'

const Auth = () => {
    const email = useRef<HTMLInputElement>(null);

    const handleForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const emailResponse = email?.current?.value;
        console.log('from CLIENT', emailResponse);

        const res = await fetch('/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: emailResponse }),
        });

        const data = await res.json();

        // Redirect based on the response
        if (data.redirectUrl) {
            router.push(data.redirectUrl);
        }
    };
    const router = useRouter();

    return (
        <div className='py-10'>
            <h1>Authentication and Authorization</h1>
            <form onSubmit={handleForm}>
                <input className='border rounded-lg py-2 px-8' ref={email} type="text" name="email" placeholder="Email" />

                <button type="submit" className='py-2 px-6 bg-blue-600 text-white rounded-sm'>Login</button>
            </form>
        </div>
    )
}

export default Auth