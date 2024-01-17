import { useAxios } from "./useAxios";

export default async function getAllRecipe() {
    const { data } = await useAxios.get('/all-recipe');
    return data;
}

export async function createARecipe(recipeData) {
    const {data} = await useAxios.post('/add-recipe', recipeData)
    return data;
}