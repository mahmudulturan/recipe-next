import Image from 'next/image';
import React from 'react';
import Button from './Button';

export default function RecipeCard({ recipe }) {
    const { image, instructions, ingredients, title } = recipe;
    return (
        <div className='group text-center '>
            <div className='overflow-hidden relative rounded'>
                <Image
                    src={image}
                    alt={`Image of ${title}`}
                    width={416}
                    height={216}
                    className='group-hover:contrast-125 group-hover:scale-105 transition duration-300'
                />
                <div className='absolute bg-text/30 w-full h-full flex items-center justify-center top-0  translate-y-[500px] group-hover:-translate-y-0 transition-all duration-300'>
                    <Button>Details</Button>
                </div>
                <div>
                    
                </div>
            </div>
            <h3 className='my-2 text-xl'>{title}</h3>
        </div>
    );
}