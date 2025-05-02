import React, { useState } from "react";
import CartModal from "./CartModal";
import "../styles/nav.css";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, titulo: "Producto 1", precio: 10, quantity: 1 },
    { id: 2, titulo: "Producto 2", precio: 20, quantity: 2 },
  ]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(newQuantity, 0) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="#inicio">Inicio</a>
        </li>
        <li>
          <a href="#productos">Productos</a>
        </li>
        <li>
          <a href="#contacto">Contacto</a>
        </li>
        <li>
          <a href="#redes">Redes</a>
        </li>
      </ul>
      <button className="cart-button" onClick={openModal}>
        <i className="fa-solid fa-cart-shopping"></i>
      </button>
      {/* Renderizar el modal */}
      <CartModal
        isOpen={isModalOpen}
        onClose={closeModal}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
      />
    </nav>
  );
}

export default Navbar;
