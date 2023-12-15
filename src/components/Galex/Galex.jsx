import GalleryList from "../GalleryList/GalleryList"
import Search from "../Search/Search"

function Galex(){



    return(


        <div className="w-full flex justify-center flex-col items-center mt-5 pt-5">

            <h1  className="font-semibold text-4xl	tracking-wider	font-serif	">    Galex  </h1>
            <Search/>
            <GalleryList />
        </div>
    )
}
export default Galex