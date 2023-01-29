import {Link} from "react-router-dom";

export const ProductDontExist=()=>{
    return <div>Taki produkt nie istnieje! <Link to={'/products'}>Powróć.</Link></div>
}