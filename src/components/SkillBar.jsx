export default function SkillBar({ skill, proficiency }) {
  return (
    <div className="mb-4 grid grid-cols-[4fr,6fr] sm:grid-cols-[3fr,7fr] items-center space-x-0 sm:space-x-2 lg:space-x-4">
      <h4 className="font-semibold text-xs sm:text-sm lg:text-base">{skill}</h4>
      <progress
        className="progress progress-primary w-3/4"
        value={proficiency}
        max="100"
      ></progress>
    </div>
  );
}

// import React from "react";

// export default function SkillBar({ skill, proficiency }) {
//   const maxRating = 5;

//   return (
//     <div className="mb-4 flex items-center">
//       <h4 className="font-semibold text-xs w-1/4 sm:text-sm lg:text-base mr-3">
//         {skill}
//       </h4>
//       <div className="rating flex space-x-1 items-center">
//         {Array.from({ length: maxRating }).map((_, index) => (
//           <input
//             key={index}
//             type="radio"
//             name={`rating-${skill}`}
//             className="mask mask-star w-3 h-3"
//             checked={index < proficiency / (100 / maxRating)}
//             disabled
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
