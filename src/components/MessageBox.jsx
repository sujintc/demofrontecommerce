// // import Alert from 'react-bootstrap/Alert';

// // export default function MessageBox(props) {
// //   return <Alert variant={props.variant || 'info'}>{props.children}</Alert>;
// // }

// import MessageBox from './MessageBox';

// function MyComponent() {
//   return (
//     <div>
//       <MessageBox variant="success">This is a success message</MessageBox>
//       <MessageBox>This is an info message</MessageBox>
//       <MessageBox variant="danger">This is an error message</MessageBox>
//     </div>
//   );
// }

// export default MyComponent;



import Alert from 'react-bootstrap/Alert';

export default function MessageBox(props) {
  return <Alert variant={props.variant || 'info'}>{props.children}</Alert>;
}