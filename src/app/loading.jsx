'use client'
import Lottie from 'lottie-react/build';
import loadingAnimation from '../assets/animations/LoadingAnimation.json'
import React from 'react';


export default function Loading() {
    return (
        <div className='min-h-[83vh] flex items-center justify-center '>
            <Lottie animationData={loadingAnimation}></Lottie>
        </div>
    );
}