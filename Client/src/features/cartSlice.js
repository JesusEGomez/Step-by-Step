import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.total += action.payload.totalPrice;
      const findProduct = state.cart.findIndex(
        (product) => product.id === action.payload.id
      );

      if (findProduct !== -1) {
        state.cart[findProduct] = {
          ...state.cart[findProduct],
          quantity: state.cart[findProduct].quantity + 1,
        };
        console.log(state.cart[findProduct].quantity);
      } else {
        console.log({ ...action.payload, quantity: 1 });
        state.cart.push({ ...action.payload, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("totalPrice", JSON.stringify(state.total));
    },
    deleteProduct: (state, action) => {
      state.total -= action.payload.totalPrice;
      const findProduct = state.cart.findIndex(
        (product) => product.id === action.payload.id
      );

      if (current(state.cart)[findProduct].quantity !== 1) {
        state.cart[findProduct] = {
          ...state.cart[findProduct],
          quantity: state.cart[findProduct].quantity - 1,
        };
        console.log(state.cart[findProduct].quantity);
      } else {
        state.cart = state.cart.filter(
          (product) => product.id !== action.payload.id
        );
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("totalPrice", JSON.stringify(state.total));
    },
    updateState: (state, action) => {
      let localCart = JSON.parse(localStorage.getItem("cart"));
      let localTotalCart = JSON.parse(localStorage.getItem("totalPrice"));

      if (!state.cart.length && localCart) {
        state.cart = localCart;
        state.total = localTotalCart;
      }
    },
  },
});
export const { addProduct, deleteProduct, updateState } = cartSlice.actions;
export const getCartProducts = (state) => state.cart.cart;
export const getTotalCartProducts = (state) => state.cart.total;
export default cartSlice.reducer;
