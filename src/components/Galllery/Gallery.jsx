// Gallery.js
function Gallery({ name, img }) {
    return (
      <div className="flex flex-col items-center w-1/3 p-4">
        <div className="mb-2">
          {name}
        </div>
        <div className="w-full h-48">
          <img src={img} alt={name} className="w-full h-full object-cover" />
        </div>
      </div>
    );
  }
  
  export default Gallery;
  