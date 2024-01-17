'use client'
import ErrorAnimation from '../assets/animations/ErrorAnimation.json';
import Lottie from 'lottie-react/build';
import Button from '@/components/Button';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center'>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Lottie animationData={ErrorAnimation}></Lottie>
            <Link href="/">
                <Button>
                    Return Home
                </Button>
            </Link>
        </div>
    )
}