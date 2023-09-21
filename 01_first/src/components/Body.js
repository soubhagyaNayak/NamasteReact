import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {

    return (
        <div className="res-container">
            <div className="search">
                <input className="search2" type="text" value="search Here" id="search1" />
                <button className="btn">Search</button>
                <div className="restaurant-card">
                    {resList.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                    };

                </div>
            </div>
        </div>
    );

}
export default Body;