
import { HEADER_LOGO } from "../utils/constants"

const Header =()=>{
    return(
        <div className="header">
             <div className="header-logo">
               <img className="logo" alt="header" src={HEADER_LOGO}/>
             </div>
             <div className="nav-items">
                <ul>
                    <li>Offer</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
             </div>
        </div>
    );
};
export default Header;