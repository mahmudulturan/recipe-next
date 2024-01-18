'use client'

import { useEffect } from 'react'
import ErrorAnimation from '../assets/animations/ErrorAnimation.json';
import Lottie from 'lottie-react/build';
import Button from '@/components/Button';
import Link from 'next/link';

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className='min-h-screen flex gap-3 flex-col items-center justify-center'>
            <h2>Something went wrong!</h2>
            <Lottie animationData={ErrorAnimation}></Lottie>
            <div className='flex justify-center gap-6'>
                <Button onClick={() => reset()}>
                    Try again
                </Button>
                <Link href="/">
                    <Button>
                        Return Home
                    </Button>
                </Link>
            </div>
        </div>
    )
}