import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function GalleryDetails(){

    const[images,setimages]=useState({});
    const {id}=useParams();
    console.log(id);

    async function Gallerlist(){
        const response=await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
        console.log(response.data.photo);
        const data=response.data.photo;
        setimages({
            title:data.title,
            image:data.url,
            desc:data.description
        })
        console.log(images)


    }

    useEffect(()=>{
        Gallerlist();
    },[])

return(
<div className="w-full h-1/2 mt-10 pt-5 flex flex-wrap flex-col justify-center items-center ">

    <div className="mb-4"> Title : {images.title}</div>
    <img  className=' w-3/12 h-3/12 '  src={images.image} alt="" />
    <div className="mt-4"> Description : { images.desc}</div>
</div>


)
}
export default GalleryDetails