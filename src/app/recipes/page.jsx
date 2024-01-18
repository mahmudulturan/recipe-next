"use client"
import Button from "@/components/Button";
import Container from "@/components/Container";
import RecipeCard from "@/components/RecipeCard";
import getAllRecipe from "@/lib/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdArrowBack } from "react-icons/md";

export default function RecipesPage() {
    const [recipeCards, setRecipeCards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const recipes = await getAllRecipe();
                setRecipeCards(recipes);
            } catch (error) {
                console.error("Error fetching recipes:", error);
            }
        };

        fetchData();
    }, []);

    // handle search
    const handleSearch = async () => {
        const searchInput = document.getElementById("searchInput").value;
        const recipes = await getAllRecipe(searchInput);
        setRecipeCards(recipes);
    };

    // handle enter key press
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div>
            <Container id="recipe-section" className="mt-5 mb-10">
                <Link href="/">
                    <Button className="inline-block gap-2 my-6"><MdArrowBack className='text-2xl inline mx-1'></MdArrowBack> Back To Home</Button>
                </Link>
                
                <div className="flex gap-6 flex-col md:flex-row items-center justify-between">
                    <div className="border-l-4 border-primary pl-2">
                        <h1 className="text-3xl md:text-4xl my-2">All Recipes</h1>
                        <p className="my-2">Culinary Delights: Explore Our All Recipes</p>
                    </div>
                    <div>
                        {/* seach input */}
                        <div className="flex flex-col md:flex-row gap-3">
                            <input
                                type="text"
                                onKeyDown={handleKeyDown}
                                id="searchInput"
                                placeholder="Search by title or ingredients"
                                className="px-4 py-3 md:py-4 rounded bg-white w-full outline-none border"
                            />
                            <Button onClick={handleSearch}>Search</Button>
                        </div>
                    </div>
                </div>
                {/* all recipe card */}
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
                    {recipeCards?.map((recipe) => (
                        <RecipeCard key={recipe._id} recipe={recipe} />
                    ))}
                </div>
            </Container>
        </div>
    );
}