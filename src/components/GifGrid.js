import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import getGifts from "../helpers/getGifts";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {


  const { data:images, loading} = useFetchGifs(category);

  console.log(loading);

  // const [images, setimages] = useState([]);


  

  return (
    <>
      <h3>{category}</h3>

      {loading && <p>Loading</p>}
      
      <div className="card-grid">
        {images.map((resp) => (
          <GifGridItem key={resp.id} {...resp} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
