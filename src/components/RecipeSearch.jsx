"use client"
import Button from './Button';
import { useRouter } from 'next/navigation';

const RecipeSearch = () => {
    const router = useRouter();

    // handle search event
    const handleSearch = () => {
        const searchInput = document.getElementById("searchInput");
        const searchKey = searchInput.value;

        // if input are not field then it will shown. 
        if (!searchKey) {
            searchInput.setAttribute("placeholder", "At first type recipe or ingredients name");
            searchInput.focus();
        }
        router.push(`/recipes?searchKey=${searchKey}`)
    }

    return (
        <div className="max-w-xl mx-auto flex flex-col md:flex-row gap-3">
            <input
                type="text"
                id='searchInput'
                placeholder="Search recipe by title or ingredients"
                className="px-4 md:px-6 py-3 md:py-4 rounded bg-white w-full outline-none"></input>
            <Button className="py-3 md:py-4" onClick={handleSearch}>Search</Button>
        </div>
    );
};

export default RecipeSearch;