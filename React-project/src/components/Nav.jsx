import React from "react";

function Nav() {
    return (
        <nav className="nav">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <div class name="navbar-extra"> 
                <div class="cart">
                <button class="cart-link" data-bs-toggle="modal" data-bs-target="#carritoModal">
              <i class="fa-solid fa-cart-shopping"></i>
            </button>    

                </div>
            </div>
        </nav>
    );
}

export default Nav;