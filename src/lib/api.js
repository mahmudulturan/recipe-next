import { useAxios } from "./useAxios";

// get all recipe
export default async function getAllRecipe(searchKey) {
    if (searchKey) {
        const { data } = await useAxios.get(`/all-recipe?${searchKey}`);
        return data;
    }
    const { data } = await useAxios.get('/all-recipe');
    return data;
}

// get single recipe
export async function getARecipe(id) {
    const { data } = await useAxios.get(`/all-recipe/${id}`, { cache: 'no-store' });
    return data;
}

// create a new recipe
export async function createARecipe(recipeData) {
    const { data } = await useAxios.post('/add-recipe', recipeData)
    return data;
}

// update a existing recipe
export async function updateARecipe(id, recipeData) {
    const { data } = await useAxios.put(`/update-recipe/${id}`, recipeData,)
    return data;
}

// delete a recipe
export async function deleteARecipe(id) {
    const { data } = await useAxios.delete(`/delete-recipe/${id}`);
    return data
}