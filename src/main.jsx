
// // // // import ReactDOM from 'react-dom/client'
// // // // import App from './App.jsx'
// // // // // import './index.css'

// // // // // ReactDOM.createRoot(document.getElementById('root')).render(
  
// // // // //     <App />
   
// // // // // )


// // // // // import React from 'react';
// // // // // import ReactDOM from 'react-dom';
// // // // // import 'bootstrap/dist/css/bootstrap.min.css';
// // // // // import './index.css';
// // // // // import App from './App';
// // // // // import reportWebVitals from './reportWebVitals';
// // // // // ReactDOM.render(
// // // // //   <React.StrictMode>
// // // // //     <App />
// // // // //   </React.StrictMode>,
// // // // //   document.getElementById('root')
// // // // // );


// // // // import React from 'react';
// // // // import ReactDOM from 'react-dom';
// // // // import 'bootstrap/dist/css/bootstrap.min.css';
// // // // import {HelmetProvider} from "react-helmet-async"

// // // // import './index.css';

// // // // import App from './App';

// // // // ReactDOM.createRoot(document.getElementById('root')).render(
// // // //   <React.StrictMode>
// // // //     <HelmetProvider>
// // // //     <App />
// // // //     </HelmetProvider>
// // // //   </React.StrictMode>,
// // // //   document.getElementById('root')
// // // // );
// // // // // import { createRoot } from 'react-dom/client';

// // // // // createRoot(document.getElementById('root')).render(
// // // // //   <React.StrictMode>
// // // // //     <HelmetProvider>
// // // // //       <App />
// // // // //     </HelmetProvider>
// // // // //   </React.StrictMode>
// // // // // );
// // // import {HelmetProvider} from "react-helmet-async"
// // // import 'bootstrap/dist/css/bootstrap.min.css';
// // // import './index.css';
// // // import App from './App';
// // // import reportWebVitals from './reportWebVitals';
// // // import { StoreProvider } from './Store';
// // // import React from 'react';
// // // import ReactDOM from 'react-dom';


// // // ReactDOM.render(
// // //   <React.StrictMode>
// // //     <HelmetProvider>
// // //       <App />
// // //     </HelmetProvider>
// // //     <StoreProvider>
// // //       <HelmetProvider>
// // //         <App />
// // //       </HelmetProvider>
// // //     </StoreProvider>
// // //   </React.StrictMode>,
// // //   document.getElementById('root')
// // // );
// // // // If you want to start measuring performance in your app, pass a function
// // // // to log results (for example: reportWebVitals(console.log))
// // // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // // reportWebVitals();



// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import { HelmetProvider } from 'react-helmet-async';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import './index.css';
// // import App from './App';
// // import reportWebVitals from './reportWebVitals';
// // import { StoreProvider } from './Store';

// // ReactDOM.render(
// //   <React.StrictMode>

// //     <StoreProvider>
// //       <HelmetProvider>
// //         <App />
// //       </HelmetProvider>
// //     </StoreProvider>
// //   </React.StrictMode>,
// //   document.getElementById('root')
// // );
// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();


// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import { HelmetProvider } from 'react-helmet-async';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import './index.css';
// // import App from './App';
// // // import reportWebVitals from './reportWebVitals';
// // import { StoreProvider } from './Store';

// // ReactDOM.render(
// //   <React.StrictMode>
// //     <StoreProvider>
// //       <HelmetProvider>
// //         <App />
// //       </HelmetProvider>
// //     </StoreProvider>
// //   </React.StrictMode>,
// //   document.getElementById('root')
 
// // );
// // reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { HelmetProvider } from 'react-helmet-async';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';
// import App from './App';

// import { StoreProvider } from './Store';

// const root = document.getElementById('root');

// ReactDOM.createRoot(root).render(
//   <React.StrictMode>
//     <StoreProvider>
//       <HelmetProvider>
//         <App />
//       </HelmetProvider>
//     </StoreProvider>
//   </React.StrictMode>
// );

// // Remaining code such as reportWebVitals, if needed


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// // import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// // );

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom'; // Update import
// import './index.css';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <App />
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );




// import React from 'react';
// import { createRoot } from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import './index.css';
// import App from './App';

// const root = createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <Router>
//       <App />
//     </Router>
//   </React.StrictMode>
// );

// import React from 'react';
// import { createRoot } from 'react-dom';
// import './index.css';
// import App from './App';

// const root = createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


import React from 'react';
import { createRoot } from 'react-dom/client'; // Update import statement
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StoreProvider } from './Store';
const root = createRoot(document.getElementById('root'));
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

root.render(
  <React.StrictMode>
    <StoreProvider>
    <HelmetProvider>
    <PayPalScriptProvider deferLoading={true}>
          <App />
        </PayPalScriptProvider>
    </HelmetProvider>
    </StoreProvider>
  </React.StrictMode>
);
