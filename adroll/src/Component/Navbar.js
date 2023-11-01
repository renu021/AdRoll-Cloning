import React from 'react'
import "./NavStyle.css"
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

    const [isActive, setIsActive] = useState(false);
    const [isOpened, setIsOpened] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isSelected, setIsSelected] = useState(false);

  return (
    <div>
        
        <div className="Menu-container">
        <div id="site-logo">
            <h1><a href="/">
                <img src="https://asset.brandfetch.io/idhmbrRB-o/idRV1D5U3Q.svg?updated=1667995733943" alt="" width="90" height="18" /></a></h1>
        </div>



<div className="dropdown">
    <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>Why AdRoll?</div>
{isActive && (
        <div className="dropdown-content">
        <div className="dropdown-item"><b>Why AdRoll</b></div>
        <div className="dropdown-item">Managed Services</div>
        <div className="dropdown-item">Case Studies</div>
    </div>
)}
</div>



<div className="dropdown opened">
    <div className="dropdown-btn" onClick={(e) => setIsOpened(!isOpened)}>Marketing Platform</div>
{isOpened && (
        <div className="dropdown-content">
        <div className="dropdown-item"><b>Marketing Channels</b></div>
        <div className="dropdown-item">Display Advertising</div>
        <div className="dropdown-item">Video Advertising</div>
        <div className="dropdown-item">Native Advertising</div>
        <div className="dropdown-item">Email Advertising</div>
    </div>
)}
</div>





<div className="dropdown Clicked">
    <div className="dropdown-btn" onClick={(e) => setIsClicked(!isClicked)}>For Ecommerce</div>
{isClicked && (
        <div className="dropdown-content">
        <div className="dropdown-item"><b>AdRoll for ecommerce</b></div>
        <div className="dropdown-item">Shopify</div>
        <div className="dropdown-item">Shopify Plus</div>
        <div className="dropdown-item">WooCommerce</div>
        <div className="dropdown-item">Wix</div>
        <div className="dropdown-item">BigCommerce</div>
        <div className="dropdown-item">Magento</div>
    </div>
)}
</div>





<div className="dropdown Selected">
    <div className="dropdown-btn res" onClick={(e) => setIsSelected(!isSelected)}>Resources</div>
{isSelected && (
        <div className="dropdown-content">
        <div className="dropdown-item"><b>Free Tools</b></div>
        <div className="dropdown-item">Return ON Ad Spend Calculator</div>
        <div className="dropdown-item">AdRoll UTM Link Builder</div>
        <div className="dropdown-item">Discount Profit Margin calculator</div>

        <div className="dropdown-item"><b>Community</b></div>
        <div className="dropdown-item">Growth Guerilla Collective</div>
        <div className="dropdown-item">Small Business Shopping List</div>
        <div className="dropdown-item">Events</div>
    </div>
)}
</div>

<div>
    <div className="pricing">Pricing</div>
</div>



<div>

</div>
    
            <div className="Login">
            <Link to="/login">Login</Link>      
            </div>

            <div className="start-btn">
                <button className="btn btn1-color">GET STARTED</button>
            </div>

        </div>


        <div className="down-para">
            <p>Learn how to optimize your webpages and ad creative at our upcoming workshop 👀   <a href="/">Register Now <i class="fa-solid fa-arrow-right"></i> </a></p>
        </div>
 </div>
            
        
   

        
  
  )
}

export default Navbar