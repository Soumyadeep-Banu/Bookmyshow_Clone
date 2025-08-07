import React from "react";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

// export const NextArrow = ({ className, style, onClick }) => {
//   return (
//     <div
//       onClick={onClick}
//       className="z-20 absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full cursor-pointer hover:bg-opacity-80"
//       style={{ ...style }}
//     >
//       <SlArrowRight />
//     </div>
//   );
// };

// export const PrevArrow = ({ className, style, onClick }) => {
//   return (
//     <div
//       onClick={onClick}
//       className="z-20 absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full cursor-pointer hover:bg-opacity-80"
//       style={{ ...style }}
//     >
//       <SlArrowLeft />
//     </div>
//   );
// };
export const NextArrow = ({ onClick }) => {
  return (
    <div onClick={onClick} className="custom-next-arrow" role="button">
      <SlArrowRight />
    </div>
  );
};

export const PrevArrow = ({ onClick }) => {
  return (
    <div onClick={onClick} className="custom-prev-arrow" role="button">
      <SlArrowLeft />
    </div>
  );
};
