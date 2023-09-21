import { LOGO_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const {resData}=props;
    const{
        cloudinaryImageId,
           name,
         }= resData?.info;
    return(
        <div className="res-container">
           <div className="res-card">
              <img className="logo1" src={LOGO_URL + cloudinaryImageId}/>
              <h3>{name}</h3>

           </div>
        </div>
    )
}

export default RestaurantCard;