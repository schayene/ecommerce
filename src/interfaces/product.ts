export interface ProductInterface {
  name: string;
  brand: string;
  price: number;
  ratings: number;
  categories: CategoryInterface[];
  images: ImageInterface[];
}

export interface CategoryInterface {
  name: string;
}

export interface ImageInterface {
  url: string;
  name: string;
}
