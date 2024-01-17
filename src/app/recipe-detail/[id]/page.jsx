import Button from '@/components/Button';
import Container from '@/components/Container';
import { getARecipe } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdArrowBack } from "react-icons/md";

export default async function RecipeDetails({ params }) {
  const { id } = params;
  const recipe = await getARecipe(id);
  const { image, instructions, ingredients, title, _id } = recipe;

  return (
    <Container className="min-h-screen py-20">
      {/* back to home button */}
      <Link href="/">
        <Button className="flex items-center justify-center gap-2"><MdArrowBack className='text-2xl'></MdArrowBack> Back To Home</Button>
      </Link>

      <div className='text-center max-w-4xl min-h-[68vh] mx-auto bg-secondary my-10 rounded'>
        <div className='pt-10 pb-5'>
          <Image
            src={image}
            alt={`Image of ${title}`}
            width={416}
            height={216}
            className='group-hover:contrast-125 group-hover:scale-105 transition duration-300 object-cover mx-auto rounded'
          />
        </div>
        <h2 className='text-4xl my-5'>{title}</h2>
        <p className='max-w-xl text-lg mx-auto my-3'>{instructions}</p>

        {/* all ingredients are here */}
        <ul>
          <h6>All Ingredients:</h6>
          {
            ingredients?.map((ingredient, indx) => <li key={indx}>{ingredient}</li>)
          }
        </ul>
      </div>
    </Container>
  );
}