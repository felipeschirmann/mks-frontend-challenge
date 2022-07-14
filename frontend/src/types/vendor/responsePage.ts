import { Product } from "types/Product";

export type ResponsePage<T> = {
  products: Product[];
  count: number;
};
