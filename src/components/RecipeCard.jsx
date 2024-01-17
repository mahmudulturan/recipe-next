import Image from 'next/image';
import React from 'react';
import Button from './Button';
import { MdDelete, MdEdit } from "react-icons/md";
import DeleteModal from './DeleteModal';


export default function RecipeCard({ recipe }) {
    const { image, instructions, ingredients, title, _id } = recipe;
    return (
        <div className='group text-center '>
            <div className='overflow-hidden h-[216px] relative rounded'>
                <Image
                    src={image}
                    alt={`Image of ${title}`}
                    width={416}
                    height={216}
                    className='group-hover:contrast-125 group-hover:scale-105 transition duration-300 object-cover'
                />
                <div className='absolute bg-text/30 w-full h-full flex items-center justify-center top-0  translate-y-[500px] group-hover:-translate-y-0 transition-all duration-300'>
                    <Button>Details</Button>
                </div>
                <div className='absolute top-3 right-3 flex gap-2  translate-y-[500px] group-hover:-translate-y-0 transition-all duration-300'>
                    <span className='p-1 rounded-full bg-white hover:bg-white/90 cursor-pointer'><MdEdit className='text-2xl'></MdEdit></span>
                    <DeleteModal id={_id}></DeleteModal>
                </div>
            </div>
            <h3 className='my-2 text-xl'>{title}</h3>
        </div>
    );
}