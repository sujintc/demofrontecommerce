// // function Rating(props) {
// //     const { rating, numReviews } = props;
// //     return (
// //       <div className="rating">
// //         <span>
// //           <i
// //             className={
// //               rating >= 1
// //                 ? 'fas fa-star'
// //                 : rating >= 0.5
// //                 ? 'fas fa-star-half-alt'
// //                 : 'far fa-star'
// //             }
// //           />
// //         </span>
// //         <span>
// //           <i
// //             className={
// //               rating >= 2
// //                 ? 'fas fa-star'
// //                 : rating >= 1.5
// //                 ? 'fas fa-star-half-alt'
// //                 : 'far fa-star'
// //             }
// //           />
// //         </span>
// //         <span>
// //           <i
// //             className={
// //               rating >= 3
// //                 ? 'fas fa-star'
// //                 : rating >= 2.5
// //                 ? 'fas fa-star-half-alt'
// //                 : 'far fa-star'
// //             }
// //           />
// //         </span>
// //         <span>
// //           <i
// //             className={
// //               rating >= 4
// //                 ? 'fas fa-star'
// //                 : rating >= 3.5
// //                 ? 'fas fa-star-half-alt'
// //                 : 'far fa-star'
// //             }
// //           />
// //         </span>
// //         <span>
// //           <i
// //             className={
// //               rating >= 5
// //                 ? 'fas fa-star'
// //                 : rating >= 4.5
// //                 ? 'fas fa-star-half-alt'
// //                 : 'far fa-star'
// //             }
// //           />
// //         </span>
// //         <span> {numReviews} reviews</span>
// //       </div>
// //     );
// //   }
// //   export default Rating;


// // import React from 'react';
// import PropTypes from 'prop-types'; // Import PropTypes

// function Rating({ rating, numReviews }) {
//   return (
//     <div className="rating">
//       <span>
//         <i
//           className={
//             rating >= 1
//               ? 'fas fa-star'
//               : rating >= 0.5
//               ? 'fas fa-star-half-alt'
//               : 'far fa-star'
//           }
//         />
//       </span>
//       <span>
//         <i
//           className={
//             rating >= 2
//               ? 'fas fa-star'
//               : rating >= 1.5
//               ? 'fas fa-star-half-alt'
//               : 'far fa-star'
//           }
//         />
//       </span>
//       <span>
//         <i
//           className={
//             rating >= 3
//               ? 'fas fa-star'
//               : rating >= 2.5
//               ? 'fas fa-star-half-alt'
//               : 'far fa-star'
//           }
//         />
//       </span>
//       <span>
//         <i
//           className={
//             rating >= 4
//               ? 'fas fa-star'
//               : rating >= 3.5
//               ? 'fas fa-star-half-alt'
//               : 'far fa-star'
//           }
//         />
//       </span>
//       <span>
//         <i
//           className={
//             rating >= 5
//               ? 'fas fa-star'
//               : rating >= 4.5
//               ? 'fas fa-star-half-alt'
//               : 'far fa-star'
//           }
//         />
//       </span>
//       <span> {numReviews} reviews</span>
//     </div>
//   );
// }

// // Add PropTypes validation for the Rating component
// Rating.propTypes = {
//   rating: PropTypes.number.isRequired, // Validate that rating is a required number
//   numReviews: PropTypes.number.isRequired, // Validate that numReviews is a required number
// };

// export default Rating;
function Rating(props) {
    const { rating, numReviews,caption } = props;
    return (
      <div className="rating">
        <span>
          <i
            className={
              rating >= 1
                ? 'fas fa-star'
                : rating >= 0.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          />
        </span>
        <span>
          <i
            className={
              rating >= 2
                ? 'fas fa-star'
                : rating >= 1.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          />
        </span>
        <span>
          <i
            className={
              rating >= 3
                ? 'fas fa-star'
                : rating >= 2.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          />
        </span>
        <span>
          <i
            className={
              rating >= 4
                ? 'fas fa-star'
                : rating >= 3.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          />
        </span>
        <span>
          <i
            className={
              rating >= 5
                ? 'fas fa-star'
                : rating >= 4.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          />
        </span>
        {/* <span> {numReviews} reviews</span> */}
        {caption ? (
        <span>{caption}</span>
      ) : (
        <span>{' ' + numReviews + ' reviews'}</span>
      )}
      </div>
    );
  }
  export default Rating;