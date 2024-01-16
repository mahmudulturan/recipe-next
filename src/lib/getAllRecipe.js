import { useAxios } from "./useAxios";

export default async function getAllRecipe() {
    const { data } = await useAxios.get('/all-recipe');
    return data;
}