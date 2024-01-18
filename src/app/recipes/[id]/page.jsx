import Button from '@/components/Button';
import Container from '@/components/Container';
import { getARecipe } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdArrowBack } from "react-icons/md";
import samplePhoto from "@/assets/images/samplePhoto.jpg"

export async function generateMetadata({ params }) {
  const { id } = params;
  const recipe = await getARecipe(id);
  const { title, instructions } = recipe;
  return {
    title: `${title} | Recipe Rover`,
    description: instructions,
  };
}


export default async function RecipeDetails({ params }) {
  const { id } = params;
  const recipe = await getARecipe(id);
  const { image, instructions, ingredients, title, _id } = recipe;
  return (
    <Container className="min-h-screen">
      {/* back to home button */}
      <Link href="/">
        <Button className="inline-block gap-2 mt-5 md:my-10"><MdArrowBack className='text-2xl inline mx-1'></MdArrowBack> Back To Home</Button>
      </Link>

      <div className='text-center max-w-4xl min-h-[68vh] mx-auto bg-secondary my-5 md:my-10 rounded pb-5 px-2'>
        <div className='pt-10 pb-5'>
          <Image
            src={image || samplePhoto}
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
            ingredients?.map((ingredient, indx) => <li key={indx}>-{ingredient}</li>)
          }
        </ul>
      </div>
    </Container>
  );
}