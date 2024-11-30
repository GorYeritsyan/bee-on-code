import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {createCategory, getCategories} from "@/lib/appwrite/api.ts";
import {z} from "zod";
import {formSchema} from "@/components/shared/AddButton.tsx";

export const useCreateCategory = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (category: z.infer<typeof formSchema>) => createCategory(category),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['getCategories'],
            })
        }
    })
}

export const  useGetCategories = () => {
    return useQuery({
        queryKey: ['getCategories'],
        queryFn: getCategories
    })
}