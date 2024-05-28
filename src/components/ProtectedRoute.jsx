// import  { useContext } from 'react';
// import { Navigate } from 'react-router-dom';
// import { Store } from '../Store';

// export default function ProtectedRoute({ children }) {
//   const { state } = useContext(Store);
//   const { userInfo } = state;
//   return userInfo ? children : <Navigate to="/signin" />;
// }
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { Store } from '../Store';

export default function ProtectedRoute({ children }) {
  const { state } = useContext(Store);
  const { userInfo } = state;

  return userInfo ? children : <Navigate to="/signin" />;
}
