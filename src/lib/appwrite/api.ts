import {appwriteConfig, databases, storage} from "@/lib/appwrite/config.ts";
import {ID, ImageGravity} from 'appwrite'
import {z} from "zod";
import {formSchema} from "@/components/shared/AddButton.tsx";

export async function createCategory(category: z.infer<typeof formSchema>){
    try {
        //Upload image to storage
        const uploadedFile = await uploadFile(category.file[0]);

        if(!uploadedFile) throw Error;

        const fileUrl = getFilePreview(uploadedFile.$id);

        if(!fileUrl) {
          await deleteFile(uploadedFile.$id);
            throw Error
        }

        const newCategory = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.categoriesCollectionId,
            ID.unique(),
            {
                imageUrl: fileUrl,
                title: category.title,
            }
        )

        if(!newCategory){
            deleteFile(uploadedFile.$id);
            throw Error;
        }

        return newCategory;
    } catch (e) {
        console.log(e)
    }
}

export async  function uploadFile(file: File){
    try{
        const uploadedFile = await storage.createFile(
            appwriteConfig.storageId,
            ID.unique(),
            file
        )
        return uploadedFile
    } catch (e){
        console.log(e)
    }
};

export function getFilePreview(fileId: string){
    try{
        const fileUrl = storage.getFilePreview(
            appwriteConfig.storageId,
            fileId,
            50,
            50,
            "top" as ImageGravity,
            100
        );

        return fileUrl;
    }catch(e){
        console.log(e)
    }
}

export async  function deleteFile(fileId: string){
    try{
        await storage.deleteFile(
            appwriteConfig.storageId,
            fileId
        );

        return {status: 'ok'};
    }catch(e){
        console.log(e)
    }
}

export async function getCategories(){
    const categories = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.categoriesCollectionId,
    )

    if(!categories) throw Error;

    return categories;
}
