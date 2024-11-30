import { type Category } from "@/types/types";
import { NavLink } from "react-router";

const Category = ({ item }: { item: Category }) => {
  return (

      <div
        className="w-[140px] h-20 bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.25)]
    flex flex-col justify-center items-center rounded-[5px] cursor-pointer"
      >
        <img className="" src={item.imageUrl} alt="" width={43} />
        <span>{item.title}</span>
      </div>
  );
};

export default Category;
