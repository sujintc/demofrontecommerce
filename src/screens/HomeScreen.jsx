

// import { useReducer, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// import axios from "axios";
// import logger from "use-reducer-logger";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Product from '../components/Product';
// import { Helmet } from 'react-helmet-async';
// import LoadingBox from '../components/LoadingBox';
// import MessageBox from '../components/MessageBox';


// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'FETCH_REQUEST':
//       return { ...state, loading: true };
//     case 'FETCH_SUCCESS':
//       return { ...state, products: action.payload, loading: false };
//     case 'FETCH_FAIL':
//       return { ...state, error: action.payload,loading: false,  };
//     default:
//       return state;
//   }
// };

// function HomeScreen() {
//   const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    
//     loading: true,
//     products: [],
//     error: '',
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       dispatch({ type: 'FETCH_REQUEST' });
//       try {
//         const result = await axios.get('https://demobackecommerce-1.onrender.com/api/products/');
//         dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
//       } catch (error) {
//         dispatch({ type: 'FETCH_FAIL', payload: error.message });
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
      
//       <Helmet>
//         <title>Shopify</title>
//       </Helmet>



//       <h1>Featured Products</h1>
//       <div className="products">
//         {loading ? (
//           <LoadingBox/>
//         ) : error ? (
//           <MessageBox variant="danger">{error}</MessageBox>
//         ) : (
          
//           <Row>
//             {products.map((product) => (
//               <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
//                 <Product product={product}></Product>
//               </Col>
//             ))}
//           </Row>
          
         
          
//         )}
//       </div>
//     </div>
//   );
// }

// export default HomeScreen;



import { useReducer, useEffect } from 'react';
import axios from 'axios';
import logger from 'use-reducer-logger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { Helmet } from 'react-helmet-async';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, error: action.payload, loading: false };
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
        const result = await axios.get('https://demobackecommerce-1.onrender.com/api/products/');
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
        <title>Cartify</title>
      </Helmet>

      {/* Bootstrap Carousel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2023/12/FC-29-DEC-23-920x518.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Coming Soon</h3>
            <p>Stay tuned for our exciting new products!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://admin.thecricketer.com/weblab/sites/96c8b790-b593-bfda-0ba4-ecd3a9fdefc2/resources/images/site/gray-nicolls_shockwave_gen_2.3_4_star.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Coming Soon</h3>
            <p>New arrivals are just around the corner!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ytimg.com/vi/t9LJujiOMpw/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-DoACuAiKAgwIABABGGcgZyhnMA8=&rs=AOn4CLBfqvd1HUymHoxa1-QsZO_1dvpN4Q"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Coming Soon</h3>
            <p>Discover what's next at our store.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          <LoadingBox />
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
