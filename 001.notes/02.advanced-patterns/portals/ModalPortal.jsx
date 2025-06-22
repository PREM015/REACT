// ✅ React + ReactDOM import
import React from "react";
import ReactDOM from "react-dom";

// 🔘 Modal ka inner content (button, text, etc.)
const ModalContent = ({ onClose }) => {
  return (
    <div style={styles.backdrop}>
      <div style={styles.modal}>
        <h2>🪟 This is a Modal rendered via Portal</h2>
        <p>Portals help render UI outside the normal DOM hierarchy.</p>
        <button onClick={onClose}>❌ Close</button>
      </div>
    </div>
  );
};

// 🔁 Portal component jo actual modal content ko "modal-root" mein render karega
const ModalPortal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalContent onClose={onClose} />,
    document.getElementById("modal-root") // 👈 Yeh HTML ke public/index.html mein hona chahiye
  );
};

// 🎨 Styling for modal look
const styles = {
  backdrop: {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex", justifyContent: "center", alignItems: "center",
    zIndex: 1000
  },
  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    width: "350px",
    textAlign: "center"
  }
};

export default ModalPortal;
