'use client'

import { deleteARecipe } from "@/lib/api";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

export default function DeleteModal({ id }) {
    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await deleteARecipe(id);
                if (response.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "The recipe has been deleted.",
                        icon: "success"
                    });
                }
                else {
                    Swal.fire({
                        title: "Failed to delete!",
                        text: "The recipe not deleted.",
                        icon: "error"
                    });
                }
            }
        });
    }
    return (
        <span onClick={handleDelete} className='p-1 rounded-full bg-white hover:bg-white/90 cursor-pointer'><MdDelete className='text-2xl'></MdDelete></span>
    );
};
