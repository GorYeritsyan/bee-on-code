import CategoryItem from "@/components/shared/CategoryItem";
import Items from "@/components/shared/Items";
import { useAppSelector } from "@/hooks/hooks";
import { useParams } from "react-router";

const CategoryPage = () => {
  const { category } = useParams();
  const { categories } = useAppSelector((state) => state.categorySlice);
  return (
    <div className="py-1 flex gap-5 flex-wrap mt-5">
      {categories
        .filter((elem) => elem.name === category)
        .at(0)
        ?.results.map((item) => (
          <CategoryItem item={item} />
        ))}
    </div>
  );
};

export default CategoryPage;
