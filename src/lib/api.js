import { useAxios } from "./useAxios";

// get all recipe
export default async function getAllRecipe() {
    const { data } = await useAxios.get('/all-recipe');
    return data;
}

// create a new recipe
export async function createARecipe(recipeData) {
    const { data } = await useAxios.post('/add-recipe', recipeData)
    return data;
}

// delete a recipe
export async function deleteARecipe(id) {
    const { data } = await useAxios.delete(`/delete-recipe/${id}`);
    return data
}