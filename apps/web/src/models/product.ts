export type TProduct = {
  id: string;
  name: string;
  price: number;
  ProductImage: {
    id: string;
    image: Buffer;
  }[];
};
