import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import GenderButton from "./GenderButton";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const AddButton = () => {
  return (
    <Popover>
      <PopoverTrigger
        className="w-[50px] h-20 bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.25)] 
      flex flex-col justify-center items-center rounded-[5px]
       cursor-pointer text-gray-500 text-3xl font-semibold"
      >
        +
      </PopoverTrigger>
      <PopoverContent className="w-[301px] h-[360px] p-5 flex flex-col">
        <h1 className="text-base font-semibold">добавить категория</h1>
        <div className="flex gap-x-[11px] mt-6">
          <GenderButton
            title="женский"
            className="w-full justify-start gap-x-3 px-2 py-1"
            image="/women.png"
          />
          <GenderButton
            title="мужской"
            className="w-full justify-start gap-x-3 px-2 py-1"
            image="/man.png"
          />
        </div>
        <input
          className="border-b border-[rgba(193,193,193,1)] outline-none text-sm pb-2 mt-3 placeholder:text-[rgba(79,79,79,1)]"
          placeholder="категория"
        />
        <div className="bg-[rgba(79,79,79,0.55)] rounded-[5px] h-[145px] mt-4 flex items-center justify-center">

        <Input
          type="file"
          name=""
          id=""
          className="borde h-full shadow-none file:h-full file:justify-center file:items-center file:w-full file:flex"
        />
        </div>
        <Button className="font-semibold text-base py-[6px] flex justify-center items-center rounded-[25px] bg-[rgba(0,8,193,1)] hover:bg-blue-950 mt-6">добавить</Button>
      </PopoverContent>
    </Popover>
  );
};

export default AddButton;
