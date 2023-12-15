// GalleryList.js
import axios from "axios";
import { useState, useEffect } from "react";
import Gallery from "../Galllery/Gallery";

function GalleryList() {
  const [loading, setloading] = useState(true);
  const [List, setList] = useState([]);
  const [offset, setOffset] = useState(0);

  const baseUrl = "https://api.slingacademy.com/v1/sample-data/photos";

  async function downloadList() {
    try {
      const response = await axios.get(`${baseUrl}?offset=${offset}&limit=10`);
      console.log(response.data);

      const promise=response.data.photos
      console.log(promise)

      const galleryPhotos = promise.map((p) => ({
        key: p.id,
        name: p.title,
        img: p.url,
        desc: p.description,
        id:p.id
      }));

      setList(galleryPhotos);
      setloading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setloading(false);
    }
  }

  useEffect(() => {
    downloadList();
  }, [offset]);

  const handleNext = () => {
    if (List.length === 10) {
      // Assuming limit is always 10
      setOffset(offset + 10);
    }
  };

  const handlePrev = () => {
    if (offset >= 10) {
      // Assuming limit is always 10
      setOffset(Math.max(0, offset - 10));
    }
  };

  return (
    
    <div>
      <div className="flex flex-wrap justify-center">
        {loading ? (
          'is loading..'
        ) : (
          List.map((p) => <Gallery name={p.name} img={p.img} key={p.key}  id={p.id}/>)
        )}
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 mr-2"
          onClick={handlePrev}
          disabled={offset < 10}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2"
          onClick={handleNext}
          disabled={List.length !== 10}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default GalleryList;
