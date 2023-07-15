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
      console.log("product Size", action.payload.sizes[0]);
      state.total += action.payload.totalPrice;
      const findProduct = state.cart.findIndex(
        (product) =>
          product.id === action.payload.id &&
          product.sizes[0] === action.payload.sizes[0]
      );
      // const size = state.cart[findProduct]?.sizes.find(
      //   (element) => element === action.payload.sizes[0]
      // );

      if (findProduct !== -1) {
        state.cart[findProduct] = {
          ...state.cart[findProduct],
          quantity: state.cart[findProduct].quantity + 1,
          // sizes: [...state.cart[findProduct].sizes, ...action.payload.sizes],
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
      console.log("producto a eleminar", action.payload.sizes);
      const findProduct = state.cart.findIndex(
        (product) =>
          // product.id === action.payload.id &&
          product.sizes[0] === action.payload.sizes[0]
      );

      if (current(state.cart)[findProduct].quantity !== 1) {
        state.cart[findProduct] = {
          ...state.cart[findProduct],
          quantity: state.cart[findProduct].quantity - 1,
          // sizes: state.cart[findProduct].sizes.slice(
          //   1,
          //   state.cart[findProduct].sizes.length
          // ),
        };
        console.log(state.cart[findProduct].quantity);
      } else {
        state.cart = state.cart.filter(
          (product) => product.sizes[0] !== action.payload.sizes[0]
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
    clearCart: (state, action) => {
      state.cart = [];
      state.total = 0;

      localStorage.clear();
    },
  },
});
export const { addProduct, deleteProduct, updateState, clearCart } =
  cartSlice.actions;
export const getCartProducts = (state) => state.cart.cart;
export const getTotalCartProducts = (state) => state.cart.total;
export default cartSlice.reducer;
