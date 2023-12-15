import { Route, Routes } from "react-router-dom";
import Galex from "../components/Galex/Galex";
import GalleryDetails from "../components/GalleryDetails/GalleryDetails";

function CustomRoutes(){



return(
<Routes>

<Route path="/" element={<Galex />}/>
<Route path="/photos/:id" element={<GalleryDetails />} />

</Routes>
)
}
export default CustomRoutes;