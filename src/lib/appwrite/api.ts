import {appwriteConfig, databases, storage} from "@/lib/appwrite/config.ts";
import {ID, ImageGravity} from 'appwrite'

export async function createCategory(category: any){
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
                name: category.name,
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
            2000,
            2000,
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

