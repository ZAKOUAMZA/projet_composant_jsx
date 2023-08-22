import product from "./Product"
export default function Qmage(){
    return(
<div>
<img style={{width:"250px"}} src={product.image} alt={product.nom} />
</div> 
   );
}