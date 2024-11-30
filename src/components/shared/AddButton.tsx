import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {Form, FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import FileUploader from "@/components/shared/FileUploader.tsx";
import {useCreateCategory} from "@/lib/react-query/queriesAndMutations.tsx";

export const formSchema = z.object({
    file: z.custom<File[]>(),
    title: z.string()
})


const AddButton = () => {
   const {mutateAsync: createCategory, isPending} = useCreateCategory()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            file: []
        },
    })

  async  function onSubmit(values: z.infer<typeof formSchema>) {
       await createCategory({...values})
    }

  return (
    <Popover>
      <PopoverTrigger
        className="w-[50px] h-20 bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.25)] 
      flex flex-col justify-center items-center rounded-[5px]
       cursor-pointer text-gray-500 text-3xl font-semibold"
      >
        +
      </PopoverTrigger>
      <PopoverContent className="w-[301px] h-[360px] p-5 justify-between flex flex-col">
        <h2>добавить категория</h2>
          <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 ">
                  <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                          <FormItem>
                              <FormControl>
                                      <input
                                          className='py-2 w-full outline-none border-b-2 text-sm border-b-[rgba(193,193,193,1)]'
                                          placeholder="категория" {...field} />
                              </FormControl>
                          </FormItem>
                      )}
                  />

                  <FormField
                      control={form.control}
                      name="file"
                      render={({ field }) => (
                          <FormItem>
                              <FormControl>
                                 <FileUploader fieldChange={field.onChange} />
                              </FormControl>
                          </FormItem>
                      )}
                  />
                  <Button className='rounded-full w-full text-base font-semibold bg-[rgb(0,8,193)] hover:bg-[rgb(0,8,150)]' type="submit">добавить</Button>
              </form>
          </Form>

      </PopoverContent>
    </Popover>
  );
};

export default AddButton;
