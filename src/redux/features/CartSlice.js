// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   carts: [],
// };

// const cartSlice = createSlice({
//   name: "cartslice",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const itemIndex = state.carts.findIndex(
//         (item) => item.id === action.payload.id
//       );

//       console.log(itemIndex);

//       if (itemIndex >= 0) {
//         state.carts[itemIndex].qnty += 1;
//       } else {
//         const temp = { ...action.payload, qnty: 1 };
//         state.carts = [...state.carts, temp];
//       }
//     },

//     removeToCart: (state, action) => {
//       const data = state.carts.filter((el) => el.id !== action.payload);
//       state.carts = data;
//     },

//     removeSingleItems: (state, action) => {
//       const itemIndex_dec = state.carts.findIndex(
//         (item) => item.id === action.payload.id
//       );

//       if (state.carts[itemIndex_dec].qnty >= 1) {
//         state.carts[itemIndex_dec].qnty -= 1;
//       }
//     },

//     emptyCartItems: (state, action) => {
//         state.carts = []
//     }

//   },
// });

// export const { addToCart, removeToCart, removeSingleItems, emptyCartItems } = cartSlice.actions;

// export default cartSlice.reducer;
