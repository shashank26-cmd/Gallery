import GalleryList from "../GalleryList/GalleryList"
import Search from "../Search/Search"

function Galex(){



    return(
   <div className="w-full flex justify-center flex-col items-center ">

            <Search/>
            <GalleryList />
        </div>
    )
}
export default Galex