import { create } from "zustand";

type Store = {
  cart: CartItem[];
  addToCart: (cartItem: CartItem) => void;
};

export const useShoppingCart = create<Store>()((set) => ({
  cart: [],
  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
}));
