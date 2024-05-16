// // // import { useEffect, useReducer } from 'react';
// // // // import { Link } from 'react-router-dom';
// // // import axios from 'axios';
// // // import logger from 'use-reducer-logger';
// // // import Row from 'react-bootstrap/Row';
// // // import Col from 'react-bootstrap/Col';
// // // import Product from '../components/Product';

// // // const reducer = (state, action) => {
// // //   switch (action.type) {
// // //     case 'FETCH_REQUEST':
// // //       return { ...state, loading: true };
// // //     case 'FETCH_SUCCESS':
// // //       return { ...state, products: action.payload, loading: false };
// // //     case 'FETCH_FAIL':
// // //       return { ...state, loading: false, error: action.payload };
// // //     default:
// // //       return state;
// // //   }
// // // };

// // // function HomeScreen() {
// // //   const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
// // //     products: [], // Ensure products is initialized as an empty array
// // //     loading: true,
// // //     error: '',
// // //   });

// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       dispatch({ type: 'FETCH_REQUEST' });
// // //       try {
// // //         const result = await axios.get('http://localhost:5006/api/products');
// // //         dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
// // //       } catch (err) {
// // //         dispatch({ type: 'FETCH_FAIL', payload: err.message });
// // //       }
// // //     };
// // //     fetchData();
// // //   }, []);

// // //   return (
// // //     <div>
// // //       <h1>Featured Products</h1>
// // //       <div className="products">
// // //         {loading ? (
// // //           <div>Loading...</div>
// // //         ) : error ? (
// // //           <div>{error}</div>
// // //         ) : (
// // //           <>
// // //             {Array.isArray(products) && products.length > 0 ? (
// // //               <Row>
// // //                 {products.map((product) => (
// // //                   <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
// // //                     <Product product={product}></Product>
// // //                   </Col>
// // //                 ))}
// // //               </Row>
// // //             ) : (
// // //               <div>No products available</div>
// // //             )}
// // //           </>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default HomeScreen;
// // import { useEffect, useReducer } from 'react';
// // import axios from 'axios';
// // import logger from 'use-reducer-logger';

// // import Row from 'react-bootstrap/Row';
// // import Col from 'react-bootstrap/Col';
// // import Product from '../components/Product';
// // import { Helmet } from 'react-helmet-async';
// // // import data from '../data';

// // const reducer = (state, action) => {
// //   switch (action.type) {
// //     case 'FETCH_REQUEST':
// //       return { ...state, loading: true };
// //     case 'FETCH_SUCCESS':
// //       return { ...state, products: action.payload, loading: false };
// //     case 'FETCH_FAIL':
// //       return { ...state, loading: false, error: action.payload };
// //     default:
// //       return state;
// //   }
// // };
// // function HomeScreen() {
// //   const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
// //     products: [],
// //     loading: true,
// //     error: '',
// //   });
// //   // const [products, setProducts] = useState([]);
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       dispatch({ type: 'FETCH_REQUEST' });
// //       try {
// //         const result = await axios.get('http://localhost:5006/api/products');
// //         dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
// //       } catch (err) {
// //         dispatch({ type: 'FETCH_FAIL', payload: err.message });
// //       }
// //       // setProducts(result.data);
// //     };
// //     fetchData();
// //   }, []);
// //   return (
// //     <div>
// //       <Helmet>
// //         <title>Amazona</title>
// //       </Helmet>
// //       <h1>Featured Products</h1>
// //       <div className="products">
// //         {loading ? (
// //           <div>Loading...</div>
// //         ) : error ? (
// //           <div>{error}</div>
// //         ) : (
// //           <Row>
// //             {products.map((product) => (
// //               <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
// //                 <Product product={product}></Product>
// //               </Col>
// //             ))}
// //           </Row>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }
// // export default HomeScreen;





















// import { useEffect, useReducer } from 'react';
// import axios from 'axios';
// import logger from 'use-reducer-logger';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Product from '../components/Product';
// import { Helmet } from 'react-helmet-async';
// import LoadingBox from '../components/LoadingBox';
// import MessageBox from '../components/MessageBox';
// // import data from '../data';

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'FETCH_REQUEST':
//       return { ...state, loading: true };
//     case 'FETCH_SUCCESS':
//       return { ...state, products: action.payload, loading: false };
//     case 'FETCH_FAIL':
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };
// function HomeScreen() {
//   const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
//     products: [],
//     loading: true,
//     error: '',
//   });
//   // const [products, setProducts] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       dispatch({ type: 'FETCH_REQUEST' });
//       try {
//         const result = await axios.get(' http://localhost:5006/api/products');
//         dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
//       } catch (err) {
//         dispatch({ type: 'FETCH_FAIL', payload: err.message });
//       }
//       // setProducts(result.data);
//     };
//     fetchData();
//   }, []);
//   return (
//     <div>
//       <Helmet>
//         <title>Amazona</title>
//       </Helmet>
//       <h1>Featured Products</h1>
// //       <div className="products">
// //         {loading ? (
          
// //           <LoadingBox />
// //         ) : error ? (
        
// //           <MessageBox variant="danger">{error}</MessageBox>
// //         ) : (
// //           <Row>
// //             {products.map((product) => (
// //               <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
// //                 <Product product={product}></Product>
// //               </Col>
// //             ))}
// //           </Row>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }
// // export default HomeScreen;


// // import { Link } from 'react-router-dom';
// // // import data from '../data';

// // function HomeScreen() {
// //   return (
// //     <div>
// //       <h1>Featured Products</h1>
// //       <div className="products">
// //         {data.products.map((product) => (
// //           <div className="product" key={product.slug}>
// //             <Link to={`http://localhost:5000/product/${product.slug}`}>
// //               <img src={product.image} alt={product.name} />
// //             </Link>
// //             <div className="product-info">
// //               <Link to={`http://localhost:5000/product/${product.slug}`}>
// //                 <p>{product.name}</p>
// //               </Link>
// //               <p>
// //                 <strong>${product.price}</strong>
// //               </p>
// //               <button>Add to cart</button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// // export default HomeScreen;
// import { useState,useReducer,useEffect } from 'react';
// import { Link } from 'react-router-dom';
// // import data from '../data'; // Uncommented the import statement for data
// import axios from "axios"
// import logger from "use-reducer-logger"


// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'FETCH_REQUEST':
//       return { ...state, loading: true };
//     case 'FETCH_SUCCESS':
//       return { ...state, products: action.payload, loading: false };
//     case 'FETCH_FAIL':
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };


// function HomeScreen() {
//   // const [products, setProducts] = useState([]);
//   const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
//     products: [],
//     loading: true,
//     error: '',
//   });
//   useEffect(() => {
//     const fetchData = async () => {
//       // 
//       dispatch({ type: 'FETCH_REQUEST' });
//       try {
//         const result = await axios.get('/api/products');
//         dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
//       } catch (err) {
//         dispatch({ type: 'FETCH_FAIL', payload: err.message });
//       }
//     };
//     fetchData();
//   }, []);
//   return (
//     <div>
//       <h1>Featured Products</h1>
//       <div className="products">
//         {/* {data.products.map((product) => ( */}
//         {loading ? (
//           <div>Loading...</div>
//         ) : error ? (
//           <div>{error}</div>
//         ) : (
//           products.map((product) => (
//             <div className="product" key={product.slug}>
//               <Link to={`http://localhost:5001/product/${product.slug}`}>
//               <img src={product.image} alt={product.name} />
//               </Link>
//               <div className="product-info">
//                 <Link to={`/product/${product.slug}`}>
//                   <p>{product.name}</p>
//                 </Link>
//                 <p>
//                   <strong>${product.price}</strong>
//                 </p>
//                 <button>Add to cart</button>
//               </div>
//             </div>
         
//         ))
//       )}
//       </div>
//     </div>
//   );
// }

// export default HomeScreen;



import { useReducer, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import axios from "axios";
import logger from "use-reducer-logger";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, error: action.payload,loading: false,  };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    
    loading: true,
    products: [],
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('https://demobackecommerce-1.onrender.com/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', payload: error.message });
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      
      <Helmet>
        <title>Shopify</title>
      </Helmet>
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          <LoadingBox/>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
          
         
          
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
