import Image from 'next/image';
import React from 'react';
import Button from './Button';
import DeleteModal from './DeleteModal';
import Link from 'next/link';
import UpdateModal from './UpdateModal';



export default function RecipeCard({ recipe }) {
    const { image, title, _id } = recipe;
    return (
        <div className='group'>
            <div className='overflow-hidden md:h-[216px] relative rounded text-center'>
                <Image
                    src={image}
                    alt={`Image of ${title}`}
                    width={416}
                    height={216}
                    className='group-hover:contrast-125 group-hover:scale-105 transition duration-300 object-cover'
                />
                <div className='absolute bg-text/30 w-full h-full flex items-center justify-center top-0  translate-y-[500px] group-hover:-translate-y-0 transition-all duration-300'>
                    <Link href={`/recipes/${_id}`}>
                        <Button>Details</Button>
                    </Link>
                </div>
                <div className='absolute top-3 right-3 flex gap-2  translate-y-[500px] group-hover:-translate-y-0 transition-all duration-300'>
                    <DeleteModal id={_id}></DeleteModal>
                </div>
            </div>
            {/* <UpdateModal recipe={recipe}></UpdateModal> */}
            <div className='group-hover:flex hidden justify-end transition-all duration-300'>
                <span className='z-50 absolute -mt-[165px] inline-block mr-3'>
                    <UpdateModal recipe={recipe}></UpdateModal>
                </span>
            </div>
            <h3 className='my-2 text-xl text-center'>{title}</h3>
        </div>
    );
}