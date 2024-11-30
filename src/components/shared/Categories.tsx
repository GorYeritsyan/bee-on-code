import GenderButton from "./GenderButton";
import Category from "./Category";
import AddButton from "./AddButton";
import {useGetCategories} from "@/lib/react-query/queriesAndMutations.tsx";
import {NavLink} from "react-router";

import Loader from "@/components/shared/Loader.tsx";
import {useState} from "react";

enum GENDERS {
    MAN = 'man',
    WOMAN='woman'
}

const Categories = () => {
    const [gender, setGender] = useState<GENDERS>(GENDERS.WOMAN)
  // const {categories} = useAppSelector(state => state.categorySlice)
    const {data: categories, isPending} = useGetCategories()
  return (
    <div className="flex gap-x-5">
      <div className="flex flex-col gap-y-4">
        {/*<GenderButton image="/women.png" />*/}
        {/*<GenderButton image="/man.png" />*/}
          <button id={GENDERS.WOMAN} onClick={() => setGender(GENDERS.WOMAN)}>woman</button>
          <button id={GENDERS.MAN} onClick={() => setGender(GENDERS.MAN)}>man</button>
      </div>
      <>
        <div className="flex gap-x-5">
          {isPending ? <Loader /> : categories?.documents.filter(item => item.gender === gender).map((item) => (
              <NavLink key={item.$id} className={({isActive}) => isActive ? 'rounded-[5px] border-2 border-[rgba(147,147,147,1)]' : 'border-2'} to={`/category/${item.title}`}>
            <Category item={item} />
              </NavLink>
          ))}
        </div>

        <AddButton />
      </>
    </div>
  );
};
export default Categories;
