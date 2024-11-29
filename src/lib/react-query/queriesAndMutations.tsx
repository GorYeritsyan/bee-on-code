import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createCategory} from "@/lib/appwrite/api.ts";

export const useCreateCategory = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (category) => createCategory(category),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['getCategories'],
            })
        }
    })
}