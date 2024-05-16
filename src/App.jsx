
// // // // // import data from './data';
// // // // import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// // // // import HomeScreen from './screens/HomeScreen';
// // // // import ProductScreen from './screens/ProductScreen';
// // // // import "./App.css"


// // // // function App() {
// // // //   return (
// // // //     <BrowserRouter>
// // // //       <div>
// // // //         <header>
// // // //           <Link to="/">amazona</Link>
// // // //         </header>
// // // //         <main>
// // // //           <Routes>
// // // //             <Route path="/product/:slug" element={<ProductScreen />} />
// // // //             <Route path="/" element={<HomeScreen />} />
// // // //           </Routes>
// // // //         </main>
// // // //       </div>
// // // //     </BrowserRouter>
// // // //   );
// // // // }

// // // // export default App;



// // // // import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// // // // import HomeScreen from './screens/HomeScreen';
// // // // import ProductScreen from './screens/ProductScreen';
// // // // import Navbar from 'react-bootstrap/Navbar';
// // // // import Container from 'react-bootstrap/Container';
// // // // import { LinkContainer } from 'react-router-bootstrap';

// // // // function App() {
// // // //   return (
// // // //     <BrowserRouter>
// // // //       <div>
// // // //       <div className="d-flex flex-column site-container">
// // // //         <header>
// // // //           <Link to="/">amazona</Link>
// // // //           <Navbar bg="dark" variant="dark">
// // // //             <Container>
// // // //               <LinkContainer to="/">
// // // //                 <Navbar.Brand>amazona</Navbar.Brand>
// // // //               </LinkContainer>
// // // //             </Container>
// // // //           </Navbar>
// // // //         </header>
// // // //         <main>
// // // //           <Routes>
// // // //             <Route path="/product/:slug" element={<ProductScreen />} />
// // // //             <Route path="/" element={<HomeScreen />} />
// // // //           </Routes>
// // // //           <Container>
// // // //             <Routes>
// // // //               <Route path="/product/:slug" element={<ProductScreen />} />
// // // //               <Route path="/" element={<HomeScreen />} />
// // // //             </Routes>
// // // //           </Container>
// // // //         </main>
// // // //         <footer>
// // // //           <div className="text-center">All rights reserved</div>
// // // //         </footer>
// // // //       </div>
// // // //     </BrowserRouter>
// // // //   );
// // // // }
// // // // export default App;

// // // import { BrowserRouter , Route, Routes } from 'react-router-dom';
// // // import HomeScreen from './screens/HomeScreen';
// // // import ProductScreen from './screens/ProductScreen';
// // // import Navbar from 'react-bootstrap/Navbar';
// // // import Container from 'react-bootstrap/Container';
// // // import { LinkContainer } from 'react-router-bootstrap';
// // // import "./App.css"

// // // function App() {
// // //   return (
// // //     <BrowserRouter>
// // //       <div className="d-flex flex-column site-container">
// // //         <header>
// // //           <Navbar bg="dark" variant="dark">
// // //             <Container>
// // //               <LinkContainer to="/">
// // //                 <Navbar.Brand>amazona</Navbar.Brand>
// // //               </LinkContainer>
// // //             </Container>
// // //           </Navbar>
// // //         </header>
// // //         <main>
// // //           <Container className="mt-3">
// // //             <Routes>
// // //               <Route path="/product/:slug" element={<ProductScreen />} />
// // //               <Route path="/" element={<HomeScreen />} />
// // //             </Routes>
// // //           </Container>
// // //         </main>
// // //         <footer>
// // //           <div className="text-center">All rights reserved</div>
// // //         </footer>
// // //       </div>
// // //     </BrowserRouter>
// // //   );
// // // }

// // // export default App;

// // import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// // import HomeScreen from './screens/HomeScreen';
// // import ProductScreen from './screens/ProductScreen';
// // import Navbar from 'react-bootstrap/Navbar';
// // import Badge from 'react-bootstrap/Badge';
// // import Nav from 'react-bootstrap/Nav';
// // import Container from 'react-bootstrap/Container';
// // import { LinkContainer } from 'react-router-bootstrap';
// // import { useContext } from 'react';
// // import { Store } from './Store';

// // function App() {
// //   const { state } = useContext(Store);
// //   const { cart } = state;
// //   return (
// //     <BrowserRouter>
// //       <div className="d-flex flex-column site-container">
// //         <header>
// //           <Navbar bg="dark" variant="dark">
// //             <Container>
// //               <LinkContainer to="/">
// //                 <Navbar.Brand>amazona</Navbar.Brand>
// //               </LinkContainer>
// //               <Nav className="me-auto">
// //                 <Link to="/cart" className="nav-link">
// //                   Cart
// //                   {cart.cartItems.length > 0 && (
// //                     <Badge pill bg="danger">
// //                       {cart.cartItems.length}
// //                     </Badge>
// //                   )}
// //                 </Link>
// //               </Nav>
// //             </Container>
// //           </Navbar>
// //         </header>
// //         <main>
// //           <Container className="mt-3">
// //             <Routes>
// //               <Route path="/product/:slug" element={<ProductScreen />} />
// //               <Route path="/" element={<HomeScreen />} />
// //             </Routes>
// //           </Container>
// //         </main>
// //         <footer>
// //           <div className="text-center">All rights reserved</div>
// //         </footer>
// //       </div>
// //     </BrowserRouter>
// //   );
// // }
// // export default App;




// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import HomeScreen from './screens/HomeScreen';
// import ProductScreen from './screens/ProductScreen';
// import Navbar from 'react-bootstrap/Navbar';
// import Badge from 'react-bootstrap/Badge';
// import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
// import { LinkContainer } from 'react-router-bootstrap';
// import { useContext } from 'react';
// import { Store } from './Store';


// import CartScreen from './screens/CartScreen';


// function App() {
//   const { state } = useContext(Store);
//   const { cart } = state;
//   return (
//     <BrowserRouter>
//       <div className="d-flex flex-column site-container">
//         <header>
//           <Navbar bg="dark" variant="dark">
//             <Container>
//               <LinkContainer to="/">
//                 <Navbar.Brand>Easy-Cart</Navbar.Brand>
//               </LinkContainer>
//               <Nav className="me-auto">
//                 <Link to="/cart" className="nav-link">
//                   Cart
//                   {cart.cartItems.length > 0 && (
//                     <Badge pill bg="danger">
//                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
//                     </Badge>
//                   )}
//                 </Link>
//               </Nav>
//             </Container>
//           </Navbar>
//         </header>
//         <main>
//           <Container className="mt-3">
//             <Routes>
//               <Route path="/product/:slug" element={<ProductScreen />} />
//               <Route path="/cart" element={<CartScreen />} />
//               <Route path="/" element={<HomeScreen />} />
//             </Routes>
//           </Container>
//         </main>
//         <footer>
//           <div className="text-center">All rights reserved</div>
//         </footer>
//       </div>
//     </BrowserRouter>
//   );
// }
// export default App;



// import react from "react";
// import data from './data'
// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import HomeScreen from './screens/HomeScreen';
// import ProductScreen from './screens/ProductScreen';

// function App() {
//     return (
//         <BrowserRouter>
//         <div>
//           <header>
//             <Link to="/">amazona</Link>
//           </header>
//           <main>
//             <Routes>
//               <Route path="/product/:slug" element={<ProductScreen />} />
//               <Route path="/" element={<HomeScreen />} />
//             </Routes>
//           </main>
//         </div>
//       </BrowserRouter>
//     );
//   }
  
//   export default App;
  


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import { useContext } from 'react';
import { Store } from './Store';
import { Link } from 'react-router-dom';
import SigninScreen from './screens/SigninScreen';
import CartScreen from './screens/CartScreen'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SignupScreen from './screens/SignupScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  // const { state } = useContext(Store);
  // const { cart } = state;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };
  return (
    <BrowserRouter>
        <div className="d-flex flex-column site-container">
        <ToastContainer position="bottom-center" limit={1} />
        <header>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Shopify</Navbar.Brand>
              </LinkContainer>
             
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto  w-100  justify-content-end">
                  <Link to="/cart" className="nav-link">
                    Cart
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg="danger">
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
                    )}
                  </Link>
             
              {userInfo ? (
                    <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>User Profile</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/orderhistory">
                        <NavDropdown.Item>Order History</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Divider />
                      <Link
                        className="dropdown-item"
                        to="#signout"
                        onClick={signoutHandler}
                      >
                        Sign Out
                      </Link>
                    </NavDropdown>
                  ) : (
                    <Link className="nav-link" to="/signin">
                      Sign In
                    </Link>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <main>
        <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route path="/order/:id" element={<OrderScreen />}></Route>
              <Route path="/profile" element={<ProfileScreen />} />
              <Route
                path="/orderhistory"
                element={<OrderHistoryScreen />}
              ></Route>
              <Route
                path="/shipping"
                element={<ShippingAddressScreen />}
              ></Route>
                <Route path="/payment" element={<PaymentMethodScreen />}></Route>
            </Routes>
          </Container>

        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
