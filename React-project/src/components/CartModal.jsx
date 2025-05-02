import React from "react";
import Cart from "./Cart"; // Importar el componente Cart
import "../styles/cart.css";

function CartModal({ isOpen, onClose, cartItems, updateQuantity, removeItem }) {
  if (!isOpen) return null; // Si el modal no está abierto, no se renderiza

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Carrito de Compras</h2>
        {/* Renderizar el componente Cart */}
        <Cart
          cartItems={cartItems}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
        />
      </div>
    </div>
  );
}

export default CartModal;