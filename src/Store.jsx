// // import  { createContext, useReducer, useContext } from 'react';

// // export const Store = createContext();

// // const initialState = {
// //   cart: {
// //     cartItems: [],
// //   },
// // };

// // function reducer(state, action) {
// //   switch (action.type) {
// //     case 'CART_ADD_ITEM':
// //       // add to cart
// //       return {
// //         ...state,
// //         cart: {
// //           ...state.cart,
// //           cartItems: [...state.cart.cartItems, action.payload],
// //         },
// //       };
// //     default:
// //       return state;
// //   }
// // }

// // export const StoreProvider = ({ children }) => {
// //   const [state, dispatch] = useReducer(reducer, initialState);
// //   const value = { state, dispatch };
// //   return <Store.Provider value={value}>{children}</Store.Provider>;
// // };

// // export const useStateValue = () => useContext(Store);


// // import  { createContext, useReducer, useContext } from 'react';

// // export const Store = createContext();

// // const initialState = {
// //   cart: {
// //     cartItems: [],
// //   },
// // };

// // function reducer(state, action) {
// //   switch (action.type) {
// //     case 'CART_ADD_ITEM':
// //       // add to cart
// //       const newItem = action.payload;
// //       const existItem = state.cart.cartItems.find(
// //         (item) => item._id === newItem._id
// //       );
// //       const cartItems = existItem
// //         ? state.cart.cartItems.map((item) =>
// //             item._id === existItem._id ? newItem : item
// //           )
// //         : [...state.cart.cartItems, newItem];
// //       return { ...state, cart: { ...state.cart, cartItems } };
// //     default:
// //       return state;
// //   }
// // }

// // export const StoreProvider = ({ children }) => {
// //   const [state, dispatch] = useReducer(reducer, initialState);
// //   const value = { state, dispatch };
// //   return <Store.Provider value={value}>{children}</Store.Provider>;
// // };

// // export const useStateValue = () => useContext(Store);


// // import React, { createContext, useReducer, useContext } from 'react';

// // export const Store = createContext();

// // const initialState = {
// //   cart: {
// //     cartItems: [],
// //   },
// // };

// // function reducer(state, action) {
// //   switch (action.type) {
// //     case 'CART_ADD_ITEM':
// //       // add to cart
// //       const newItem = action.payload;
// //       const existItem = state.cart.cartItems.find(
// //         (item) => item._id === newItem._id
// //       );
// //       const cartItems = existItem
// //         ? state.cart.cartItems.map((item) =>
// //             item._id === existItem._id ? newItem : item
// //           )
// //         : [...state.cart.cartItems, newItem];
// //       return { ...state, cart: { ...state.cart, cartItems } };
// //     default:
// //       return state;
// //   }
// // }

// // export const StoreProvider = ({ children }) => {
// //   const [state, dispatch] = useReducer(reducer, initialState);
// //   const value = { state, dispatch };
// //   return <Store.Provider value={value}>{children}</Store.Provider>;
// // };

// // export const useStateValue = () => useContext(Store);



// import { createContext, useReducer } from 'react';
// export const Store = createContext();
// const initialState = {
//   cart: {
//     cartItems: localStorage.getItem('cartItems')
//     ? JSON.parse(localStorage.getItem('cartItems'))
//     : [],
//   },
// };
// function reducer(state, action) {
//   switch (action.type) {
//     case 'CART_ADD_ITEM':
//       // add to cart
     
//       const newItem = action.payload;
//       const existItem = state.cart.cartItems.find(
//         (item) => item._id === newItem._id
//       );
//       const cartItems = existItem
//         ? state.cart.cartItems.map((item) =>
//             item._id === existItem._id ? newItem : item
//           )
//         : [...state.cart.cartItems, newItem];
//         localStorage.setItem('cartItems', JSON.stringify(cartItems));
//       return { ...state, cart: { ...state.cart, cartItems } };
//       case 'CART_REMOVE_ITEM': {
//         const cartItems = state.cart.cartItems.filter(
//           (item) => item._id !== action.payload._id
//         );
//         localStorage.setItem('cartItems', JSON.stringify(cartItems));
//         return { ...state, cart: { ...state.cart, cartItems } };
//       }

//     default:
//       return state;
//   }
// }
// export function StoreProvider(props) {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const value = { state, dispatch };
//   return <Store.Provider value={value}>{props.children} </Store.Provider>;
// }




// import { createContext, useReducer } from 'react';

// export const Store = createContext();

// const initialState = {
//   userInfo: localStorage.getItem('userInfo')
//     ? JSON.parse(localStorage.getItem('userInfo'))
//     : null,

//   cart: {
//     shippingAddress: localStorage.getItem('shippingAddress')
//     ? JSON.parse(localStorage.getItem('shippingAddress'))
//     : {},
//     cartItems: [],
//   },
// };
// function reducer(state, action) {
//   switch (action.type) {
//     case 'CART_ADD_ITEM':
//       // add to cart
//       return {
//         ...state,
//         cart: {
//           ...state.cart,
//           cartItems: [...state.cart.cartItems, action.payload],
//         },
//       };
//       case 'USER_SIGNIN':
//         return { ...state, userInfo: action.payload };
//       case 'USER_SIGNOUT':
//         return {
//           ...state,
//           userInfo: null,
//           cart: {
//             cartItems: [],
//             shippingAddress: {},
//           },
//         };
//       case 'SAVE_SHIPPING_ADDRESS':
//         return {
//           ...state,
//           cart: {
//             ...state.cart,
//             shippingAddress: action.payload,
//           };
//         };
//     default:
//       return state;
//   }
// }

// export function StoreProvider(props) {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const value = { state, dispatch };
//   return <Store.Provider value={value}>{props.children} </Store.Provider>;
// }


// import { createContext, useReducer } from 'react';

// export const Store = createContext();

// const initialState = {
//   userInfo: localStorage.getItem('userInfo')
//     ? JSON.parse(localStorage.getItem('userInfo'))
//     : null,
//   cart: {
//     shippingAddress: localStorage.getItem('shippingAddress')
//       ? JSON.parse(localStorage.getItem('shippingAddress'))
//       : {},
//       paymentMethod: localStorage.getItem('paymentMethod')
//       ? localStorage.getItem('paymentMethod')
//       : '',
//     cartItems: [],
//   },
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'CART_ADD_ITEM':
//       // add to cart
//       return {
//         ...state,
//         cart: {
//           ...state.cart,
//           cartItems: [...state.cart.cartItems, action.payload],
//         },
//       };
//       case 'CART_CLEAR':
//       return { ...state, cart: { ...state.cart, cartItems: [] } };

//     case 'USER_SIGNIN':
//       return { ...state, userInfo: action.payload };
//     case 'USER_SIGNOUT':
//       return {
//         ...state,
//         userInfo: null,
//         cart: {
//           cartItems: [],
//           shippingAddress: {},
//           paymentMethod: '',
//         },
//       };
//     case 'SAVE_SHIPPING_ADDRESS':
//       return {
//         ...state,
//         cart: {
//           ...state.cart,
//           shippingAddress: action.payload,
//         },
//       };
//       case 'SAVE_PAYMENT_METHOD':
//         return {
//           ...state,
//           cart: { ...state.cart, paymentMethod: action.payload },
//         };
//     default:
//       return state;
//   }
// }

// export function StoreProvider(props) {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const value = { state, dispatch };
//   return <Store.Provider value={value}>{props.children}</Store.Provider>;
// }
import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
  cart: {
    shippingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : {},
    paymentMethod: localStorage.getItem('paymentMethod')
      ? localStorage.getItem('paymentMethod')
      : '',
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM':
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };

    case 'CART_CLEAR':
      localStorage.removeItem('cartItems');
      return { ...state, cart: { ...state.cart, cartItems: [] } };

    case 'USER_SIGNIN':
      return { ...state, userInfo: action.payload };

    case 'USER_SIGNOUT':
      localStorage.removeItem('userInfo');
      localStorage.removeItem('shippingAddress');
      localStorage.removeItem('paymentMethod');
      localStorage.removeItem('cartItems');
      return {
        ...state,
        userInfo: null,
        cart: {
          cartItems: [],
          shippingAddress: {},
          paymentMethod: '',
        },
      };

    case 'SAVE_SHIPPING_ADDRESS':
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: action.payload,
        },
      };

    case 'SAVE_PAYMENT_METHOD':
      return {
        ...state,
        cart: { ...state.cart, paymentMethod: action.payload },
      };

    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
