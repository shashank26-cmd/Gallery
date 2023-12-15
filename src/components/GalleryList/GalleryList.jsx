// GalleryList.js
import axios from "axios";
import { useState, useEffect } from "react";
import Gallery from "../Galllery/Gallery";

function GalleryList() {

  const [Advance, setAdvance] = useState({
    loading: true,
    List: [],
    offset: 0
  });

  const baseUrl = "https://api.slingacademy.com/v1/sample-data/photos";

  const downloadList = async () => {
    try {
      const response = await axios.get(`${baseUrl}?offset=${Advance.offset}&limit=10`);
      console.log(response.data);

      const promise = response.data.photos;
      console.log(promise);

      const galleryPhotos = promise.map((p) => ({
        key: p.id,
        name: p.title,
        img: p.url,
        desc: p.description,
        id: p.id
      }));

      setAdvance((prevState) => ({
        ...prevState,
        List: galleryPhotos,
        loading: false
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
      setAdvance((prevState) => ({
        ...prevState,
        loading: false
      }));
    }
  };

  useEffect(() => {
    downloadList();
  }, [Advance.offset]);

  const handleNext = () => {
    if (Advance.List.length === 10) {
      // Assuming limit is always 10
      setAdvance(prevState => ({
        ...prevState,
        offset: prevState.offset + 10
      }));
    }
  };

  const handlePrev = () => {
    if (Advance.offset >= 10) {
      // Assuming limit is always 10
      setAdvance(prevState => ({
        ...prevState,
        offset: Math.max(0, prevState.offset - 10)
      }));
    }
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {Advance.loading ? (
          'is loading..'
        ) : (
          Advance.List.map((p) => <Gallery name={p.name} img={p.img} key={p.key} id={p.id} />)
        )}
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 mr-2"
          onClick={handlePrev}
          disabled={Advance.offset < 10}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2"
          onClick={handleNext}
          disabled={Advance.List.length !== 10}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default GalleryList;
