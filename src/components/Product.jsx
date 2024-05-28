// // import Card from 'react-bootstrap/Card';
// // import Button from 'react-bootstrap/Button';
// // import { Link } from 'react-router-dom';
// // import Rating from './Rating';

// // function Product(props) {
// //   const { product } = props;
// //   return (
// //     <Card>
// //       <Link to={`/product/${product.slug}`}>
// //         <img src={product.image} className="card-img-top" alt={product.name} />
// //       </Link>
// //       <Card.Body>
// //         <Link to={`/product/${product.slug}`}>
// //           <Card.Title>{product.name}</Card.Title>
// //         </Link>
// //         <Rating rating={product.rating} numReviews={product.numReviews} />
// //         <Card.Text>${product.price}</Card.Text>
// //         <Button>Add to cart</Button>
// //       </Card.Body>
// //     </Card>
// //   );
// // }
// // export default Product;


// // import Card from 'react-bootstrap/Card';
// // import Button from 'react-bootstrap/Button';
// // import { Link } from 'react-router-dom';
// // import Rating from './Rating'; // Ensure the correct path is used for Rating component

// // function Product({ product }) {
// //   if (!product) {
// //     return null; // Return null if product is not available
// //   }

// //   return (
// //     <Card>
// //       <Link to={`/product/${product.slug}`}>
// //         <Card.Img variant="top" src={product.image} alt={product.name} />
// //       </Link>
// //       <Card.Body>
// //         <Link to={`/product/${product.slug}`}>
// //           <Card.Title>{product.name}</Card.Title>
// //         </Link>
// //         <Rating rating={product.rating} numReviews={product.numReviews} />
// //         <Card.Text>${product.price}</Card.Text>
// //         <Button>Add to cart</Button>
// //       </Card.Body>
// //     </Card>
// //   );
// // }

// // export default Product;


// // import React from 'react';
// // import Card from 'react-bootstrap/Card';
// // import Button from 'react-bootstrap/Button';
// // import { Link } from 'react-router-dom';
// // import Rating from './Rating'; // Ensure the correct path is used for Rating component

// // function Product({ product }) {
// //   // Ensure product is defined before accessing its properties
// //   if (!product) {
// //     return null; // Return null if product is not available
// //   }

// //   return (
// //     <Card>
// //       <Link to={`/product/${product.slug}`}>
// //         {/* Ensure product.image and product.name are defined before using them */}
// //         <Card.Img variant="top" src={product.image || ''} alt={product.name || 'Product'} />
// //       </Link>
// //       <Card.Body>
// //         <Link to={`/product/${product.slug}`}>
// //           {/* Ensure product.name is defined before using it */}
// //           <Card.Title>{product.name || 'Unknown Product'}</Card.Title>
// //         </Link>
// //         <Rating rating={product.rating || 0} numReviews={product.numReviews || 0} />
// //         {/* Ensure product.price is defined before using it */}
// //         <Card.Text>${product.price || '0.00'}</Card.Text>
// //         <Button>Add to cart</Button>
// //       </Card.Body>
// //     </Card>
// //   );
// // }

// // // export default Product;
// // import React from 'react';
// // import PropTypes from 'prop-types'; // Import PropTypes
// // import Card from 'react-bootstrap/Card';
// // import Button from 'react-bootstrap/Button';
// // import { Link } from 'react-router-dom';
// // import Rating from './Rating';

// // function Product({ product }) {
// //   // Ensure product is defined before accessing its properties
// //   if (!product) {
// //     return null; // Return null if product is not available
// //   }

// //   return (
// //     <Card>
// //       <Link to={`/product/${product.slug}`}>
// //         <Card.Img variant="top" src={product.image || ''} alt={product.name || 'Product'} />
// //       </Link>
// //       <Card.Body>
// //         <Link to={`/product/${product.slug}`}>
// //           <Card.Title>{product.name || 'Unknown Product'}</Card.Title>
// //         </Link>
// //         <Rating rating={product.rating || 0} numReviews={product.numReviews || 0} />
// //         <Card.Text>${product.price || '0.00'}</Card.Text>
// //         <Button>Add to cart</Button>
// //       </Card.Body>
// //     </Card>
// //   );
// // }

// // // Add PropTypes validation for the Product component
// // Product.propTypes = {
// //   product: PropTypes.shape({
// //     name: PropTypes.string, // Validate that product.name is a string
// //     slug: PropTypes.string,
// //     image: PropTypes.string,
// //     rating: PropTypes.number,
// //     numReviews: PropTypes.number,
// //     price: PropTypes.number,
// //   }),
// // };

// // export default Product;


// // import React from 'react';
// // import PropTypes from 'prop-types'; // Import PropTypes
// // import Card from 'react-bootstrap/Card';
// // import Button from 'react-bootstrap/Button';
// // import { Link } from 'react-router-dom';
// // import Rating from './Rating';
// // import axios from 'axios';
// // import { useContext } from 'react';
// // import { Store } from '../Store';


// // function Product({ product }) {
// //   // Ensure product is defined before accessing its properties
// //   if (!product) {
// //     return null; // Return null if product is not available
// //   }
  
// //   const { state, dispatch: ctxDispatch } = useContext(Store);
// //   const {
// //     cart: { cartItems },
// //   } = state;

// //   const addToCartHandler = async (item) => {
// //     const existItem = cartItems.find((x) => x._id === product._id);
// //     const quantity = existItem ? existItem.quantity + 1 : 1;
// //     const { data } = await axios.get(`/api/products/${item._id}`);
// //     if (data.countInStock < quantity) {
// //       window.alert('Sorry. Product is out of stock');
// //       return;
// //     }
// //     ctxDispatch({
// //       type: 'CART_ADD_ITEM',
// //       payload: { ...item, quantity },
// //     });
// //   };


// //   return (
// //     <Card>
// //       <Link to={`/product/${product.slug}`}>
// //         <Card.Img variant="top" src={product.image || ''} alt={product.name || 'Product'} />
// //       </Link>
// //       <Card.Body>
// //         <Link to={`/product/${product.slug}`}>
// //           <Card.Title>{product.name || 'Unknown Product'}</Card.Title>
// //         </Link>
// //         <Rating rating={product.rating || 0} numReviews={product.numReviews || 0} />
// //         <Card.Text>${product.price || '0.00'}</Card.Text>
// //         {product.countInStock === 0 ? (
// //           <Button variant="light" disabled>
// //             Out of stock
// //           </Button>
// //         ) : (
// //           <Button onClick={() => addToCartHandler(product)}>Add to cart</Button>
// //         )}
// //       </Card.Body>
// //     </Card>
// //   );
// // }

// // // Add PropTypes validation for the Product component
// // Product.propTypes = {
// //   product: PropTypes.shape({
// //     name: PropTypes.string, // Validate that product.name is a string
// //     slug: PropTypes.string,
// //     image: PropTypes.string,
// //     rating: PropTypes.number,
// //     numReviews: PropTypes.number,
// //     price: PropTypes.number,
// //   }),
// // };

// // export default Product;



// import  { useContext } from 'react'; // Import React and useContext
// import PropTypes from 'prop-types';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom';
// import Rating from './Rating';
// import axios from 'axios';
// import { Store } from '../Store';

// function Product({ product }) {
//   // Ensure product is defined before accessing its properties
//   if (!product) {
//     return null; // Return null if product is not available
//   }
  
//   const { state, dispatch: ctxDispatch } = useContext(Store);
//   const {
//     cart: { cartItems },
//   } = state;

//   const addToCartHandler = async (item) => {
//     const existItem = cartItems.find((x) => x._id === product._id);
//     const quantity = existItem ? existItem.quantity + 1 : 1;
//     const { data } = await axios.get(`/api/products/${item._id}`);
//     if (data.countInStock < quantity) {
//       window.alert('Sorry. Product is out of stock');
//       return;
//     }
//     ctxDispatch({
//       type: 'CART_ADD_ITEM',
//       payload: { ...item, quantity },
//     });
//   };

//   return (
//     <Card>
//       <Link to={`/product/${product.slug}`}>
//         <Card.Img variant="top" src={product.image || ''} alt={product.name || 'Product'} />
//       </Link>
//       <Card.Body>
//         <Link to={`/product/${product.slug}`}>
//           <Card.Title>{product.name || 'Unknown Product'}</Card.Title>
//         </Link>
//         <Rating rating={product.rating || 0} numReviews={product.numReviews || 0} />
//         <Card.Text>${product.price || '0.00'}</Card.Text>
//         {product.countInStock === 0 ? (
//           <Button variant="light" disabled>
//             Out of stock
//           </Button>
//         ) : (
//           <Button onClick={() => addToCartHandler(product)}>Add to cart</Button>
//         )}
//       </Card.Body>
//     </Card>
//   );
// }

// // Add PropTypes validation for the Product component
// Product.propTypes = {
//   product: PropTypes.shape({
//     name: PropTypes.string,
//     slug: PropTypes.string,
//     image: PropTypes.string,
//     rating: PropTypes.number,
//     numReviews: PropTypes.number,
//     price: PropTypes.number,
//     countInStock: PropTypes.number, // Add countInStock validation
//   }),
// };

// export default Product;


// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom';
// import Rating from './Rating';

// function Product(props) {
//   const { product } = props;
//   return (
//     <Card>
//       <Link to={`/product/${product.slug}`}>
//         <img src={product.image} className="card-img-top" alt={product.name} />
//       </Link>
//       <Card.Body>
//         <Link to={`/product/${product.slug}`}>
//           <Card.Title>{product.name}</Card.Title>
//         </Link>
//         <Rating rating={product.rating} numReviews={product.numReviews} />
//         <Card.Text>${product.price}</Card.Text>
//         <Button>Add to cart</Button>
//       </Card.Body>
//     </Card>
//   );
// }
// export default Product;




import  { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import { Store } from '../Store';

function Product(props) {
  const { product } = props;
  const { state, dispatch: ctxDispatch } = useContext(Store);

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity },
    });
  };

  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>
        <Button onClick={addToCartHandler}>Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
