export type TProductSizes = "S" | "M" | "L";
export type TGenders = "F" | "M";
export type TProductMainColors = "RED" | "GREEN" | "BLACK" | "YELLOW";
export type TProductType = "BLOUSE" | "PANTS";

export type TProduct = {
  thumbnail: string;
  bigImage: string;
  price: number;
  smallestAvailablePrice: number;
  percentageDiscount: number;
  name: string;
  description: string;
  gender: TGenders;
  productMainColor: TProductMainColors;
  size: TProductSizes;
  isAvailable: boolean;
  type: TProductType;
};

export type TProductsListApi = {
  products: TProduct[];
};
