import {useCallback, useState} from 'react'
import {FileWithPath, useDropzone} from "react-dropzone";

type FileUploaderProps = {
    fieldChange: (files: File[]) => void;
}

const FileUploader = ({fieldChange}: FileUploaderProps) => {
    const [fileUrl, setFileUrl] = useState('')
    const [file, setFile] = useState<File[]>([])

    const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
        setFile(acceptedFiles)
        fieldChange(acceptedFiles)
        setFileUrl(URL.createObjectURL(acceptedFiles[0]))
    }, [file])

    const {getRootProps, getInputProps} = useDropzone({onDrop, accept: {
        'image/*': ['.png', '.jpg', '.jpeg', '.svg']
        }})
    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {fileUrl ? (
                <div className='rounded-[5px] h-[145px] bg-[rgb(211,211,211)] p-4 flex justify-center'>
                    <img className='cursor-pointer rounded-[5px] aspect-square' src={fileUrl} alt=""/>
                </div>
            ) : (
                <div className='cursor-pointer h-[145px] space-y-4 bg-[rgb(211,211,211)] flex flex-col items-center justify-center text-base rounded-[5px] font-medium text-white'>
                    <img src="/add-image-icon.png" alt="image icon"/>
                    <span className='text-center'>загрузить <br/> фото</span>
                </div>
            )}
        </div>
    )
}
export default FileUploader
