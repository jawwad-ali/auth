'use client'
import { useRouter } from 'next/navigation'
import React, { useRef, useState } from 'react'

const Discount = () => {
    const router = useRouter()

    const coupon = useRef<HTMLInputElement>(null);
    const handleDiscount = async (e: any) => {
        e.preventDefault();

        const couponCode = coupon?.current?.value;

        const res = await fetch('/api/discount', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ coupon: couponCode }),
        });

        await res.json();
        router.refresh()
    }


    return (
        <div>
            <h1>Discount</h1>
            <form onSubmit={handleDiscount}>
                <input className='border rounded-lg py-2 px-8' ref={coupon} type="text" name="coupon" placeholder="For Discount" />

                <button type="submit" className='py-2 px-6 bg-gradient-to-r from-red-600 to-blue-400 text-white rounded-sm'>Avail Discount</button>

            </form>

        </div>
    )
}

export default Discount
