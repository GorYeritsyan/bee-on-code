const CategoryItem = ({ item }: any) => {
  return (
    <div className="p-[10px] gap-y-4 justify-center items-center h-[170px] rounded-[5px] bg-white flex flex-col">
      <div className="h-[114px] overflow-hidden ">
        <img
          className="rounded-tl-[5px] rounded-tr-[5px] bg-cover"
          src={item.image}
          alt=""
          height={114}
          width={174}
        />
      </div>
      <div className="flex justify-between w-full">
        <span className="text-sm">{item.type}</span>
        <span className="font-semibold text-sm">{item.price}</span>
      </div>
    </div>
  );
};

export default CategoryItem;
