/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Gallery.js

import { Link } from "react-router-dom";
function Gallery({ name, img,id }) {
    return (

      <div className="flex flex-col items-center w-1/3 p-4">

        <Link to={`/photos/${id}`}>
         <div className="mb-2">
         {name}
       </div>
       <div className="w-full h-48">
         <img src={img} alt={name} className="w-full h-full object-cover" />
       </div>
       </Link>
       
      </div>
    );
  }
  
  export default Gallery;
  