'use client'
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { RxCross2 } from "react-icons/rx";
import Button from './Button';
import axios from 'axios';
import { imageUpload } from '@/lib/imageUpload';
import { updateARecipe } from '@/lib/api';
import Swal from 'sweetalert2';



export default function UpdateModal({ recipe, isOpen, setIsOpen }) {
    const { image, instructions, ingredients, title, _id } = recipe;
    const [imageUrl, setImageUrl] = useState("");
    const [selectedIngredients, setSelectedIngredients] = useState([...ingredients]);
    const [allIngredients, setAllIngredients] = useState([]);
    const [recipeInstruction, setRecipeInstruction] = useState(instructions);
    const [manualError, setManualError] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm()

    // fetching ingriedients item
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get("ingredients.json")
                setAllIngredients(data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [])

    // manual error handleing
    useEffect(() => {
        if (!selectedIngredients.length <= 0) {
            return setManualError(null)
        }
        if (!recipeInstruction.length <= 0) {
            return setManualError(null)
        }
    }, [selectedIngredients, recipeInstruction])


    // to delete selected ingridients
    const handleIngriedentsRemove = (removeIngriedent) => {
        const filter = selectedIngredients.filter(ingriedent => ingriedent !== removeIngriedent)
        setSelectedIngredients(filter)
    }
    
    // handle image upload
    const handleImageUpload = async (e) => {
        const imageFile = e.target.files[0];
        const { data: imageData } = await imageUpload(imageFile)
        setImageUrl(imageData.display_url)
    }


    //handle on submit
    const onSubmit = async (data) => {
        // set error if input are not filled
        if (selectedIngredients.length <= 0) {
            return setManualError({ type: "ingredients", errorMessage: "Please select ingredients" })
        }
        if (recipeInstruction.length <= 0) {
            return setManualError({ type: "instruction", errorMessage: "Write the recipe instruction!" })
        }

        //save data on database
        const recipeData = await {
            title: data.recipeName,
            ingredients: selectedIngredients,
            instructions: recipeInstruction,
            image: imageUrl || image
        }
        const response = await updateARecipe(_id, recipeData);
        // show toast
        if (response.acknowledged) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Recipe updated successfully",
                showConfirmButton: false,
                timer: 1500
            });
            setIsOpen(false)
        }
        else {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Recipe update failed",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }


    return (
        <>
            <div className={`${isOpen ? "scale-100" : "scale-0"}  duration-300 ease-out  h-screen w-full px-2 top-0 right-0 flex items-center justify-center z-50 fixed`}>
                <div className='relative w-full md:w-8/12 lg:w-4/12'>

                    {/* input form */}
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className={`bg-secondary/90 px-5 py-6 rounded duration-300 ease-in-out ${isOpen ? "scale-100" : "scale-0"}`}
                    >
                        <h3 className='text-3xl text-center my-4'>Update Existing Recipe</h3>
                        <div>
                            {/*text input for input name*/}
                            <input
                                type="text"
                                placeholder='Recipe Name'
                                defaultValue={title}
                                {...register("recipeName", { required: true })}
                                className='px-4 py-3 w-full outline-none rounded my-2'
                            />
                            {errors.recipeName && <span className='py-2'>Write the recipe Name!</span>}

                            {/*upload input for upload image */}
                            <div>
                                <input
                                    onChange={handleImageUpload}
                                    type="file"
                                    id="updateImageField"
                                    accept="image/*"
                                // hidden
                                />
                            </div>


                            {/*selct option for selct ingriedents */}
                            <select
                                className='px-4 py-3 w-full outline-none rounded my-2'
                                onChange={(e) => setSelectedIngredients([...selectedIngredients, e.target.value])}
                                defaultValue="default"
                            >
                                <option disabled value="default" defaultChecked>Select Ingredients</option>
                                {
                                    allIngredients.map(ingredient =>
                                        <option
                                            key={ingredient.id}
                                            disabled={selectedIngredients.find(item => item === ingredient.label)}
                                            value={ingredient.label}>
                                            {ingredient.label}
                                        </option>)
                                }
                            </select>
                            {manualError?.type === "ingredients" && <span className='py-2'>{manualError.errorMessage}</span>}
                            <p>
                                {
                                    selectedIngredients.map((ingredient, indx) => <span className='relative group cursor-default' key={indx}>{ingredient},
                                        <span onClick={() => handleIngriedentsRemove(ingredient)} className='p-0.5 rounded-full bg-white absolute text-sm group-hover:scale-100 scale-0 z-10 right-0 duration-300 cursor-pointer'><RxCross2></RxCross2></span>
                                    </span>)
                                }
                            </p>

                            {/*text area for instruction input  */}
                            <textarea
                                className='px-4 py-3 w-full outline-none rounded my-2'
                                style={{ resize: "none" }}
                                defaultValue={instructions}
                                onChange={(e) => setRecipeInstruction(e.target.value)}
                                placeholder='Write the recipe...'
                                cols="30" rows="4"
                            ></textarea>
                            {manualError?.type === "instruction" && <span className='py-2'>{manualError.errorMessage}</span>}
                        </div>

                        <Button type="submit" className="w-full mt-2"> Update Recipe</Button>
                    </form>
                    <button
                        onClick={() => setIsOpen(false)}
                        className='px-2 py-2 text-2xl rounded-full bg-white absolute top-3 right-3'><RxCross2></RxCross2></button>
                </div>
            </div>
        </>
    );
}