import { TProductsListApi } from "../types/fakeApiTypes/productsListApiTypes";

export const mockProducts: TProductsListApi = {
  products: [
    {
      name: "Bluza L Zielona Damska",
      bigImage: "https://via.placeholder.com/1200x1200",
      description:
        "Damska Zielona Bluza od najlepszego projektanta. Super wykonanie, ciepła.",
      gender: "F",
      isAvailable: true,
      percentageDiscount: 0,
      price: 250,
      productMainColor: "GREEN",
      size: "L",
      smallestAvailablePrice: 250,
      thumbnail: "https://via.placeholder.com/300x300",
      type: "BLOUSE",
    },
    {
      name: "Spodnie Męskie Czerwone - PRZECENA ",
      bigImage: "https://via.placeholder.com/1200x1200",
      description:
        "Damska Zielona Bluza od najlepszego projektanta. Super wykonanie, ciepła.",
      gender: "M",
      isAvailable: true,
      percentageDiscount: 10,
      price: 250,
      productMainColor: "RED",
      size: "L",
      smallestAvailablePrice: 220,
      thumbnail: "https://via.placeholder.com/300x300",
      type: "PANTS",
    },
  ],
};
