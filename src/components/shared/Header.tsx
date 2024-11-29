import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <header className="h-[70px] bg-white flex justify-center items-center">
      <div className="relative">
        <Input
          className="rounded-full h-[40px] focus-visible:ring-white/0 bg-zinc-200 border-none w-[380px] text-base px-5 py-2 text-zinc-500 font-semibold"
          placeholder="Поиск"
        />
        <Button
          className="absolute cursor-pointer top-[20px] right-1
         -translate-y-1/2 rounded-full bg-blue-800 hover:bg-blue-900 w-8 h-8
         "
        >
          <AiOutlineSearch />
        </Button>
      </div>
    </header>
  );
};

export default Header;
