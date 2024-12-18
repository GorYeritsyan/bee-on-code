export type CategoryItem = {
  type: string;
  price: string;
  image: string;
};

export type Category = {
  title: string;
  imageUrl?: string;
  gender?: string;
  results?: CategoryItem[];
};

export type CategoryInitState = {
  categories: Category[];
};
