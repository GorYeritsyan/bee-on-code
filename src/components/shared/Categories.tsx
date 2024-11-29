import { useAppSelector } from "@/hooks/hooks";
import GenderButton from "./GenderButton";
import Category from "./Category";
import AddButton from "./AddButton";


const Categories = () => {
  const {categories} = useAppSelector(state => state.categorySlice)
  return (
    <div className="flex gap-x-5">
      <div className="flex flex-col gap-y-4">
        <GenderButton image="/women.png" />
        <GenderButton image="/man.png" />
      </div>
      <>
        <div className="flex gap-x-5">
          {categories.map((item) => (
            <Category item={item} />
          ))}
        </div>

        <AddButton />
      </>
    </div>
  );
};
export default Categories;
