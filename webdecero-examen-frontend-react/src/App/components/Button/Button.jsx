// Button.jsx
// Este componente es un boton reutilizable que acepta propiedades para personalizar su comportamiento y estilo.
// Props:
// - children: Contenido del boton (texto o elementos).
// - type: Tipo del botón (por defecto 'button').
// - onClick: Función que se ejecuta al hacer clic en el botón.
// - className: Clases adicionales para personalizar el estilo.

import './Button.css';

const Button = ({ children, type = 'button', onClick, className = '' }) => {
  return (
    <button type={type} className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;