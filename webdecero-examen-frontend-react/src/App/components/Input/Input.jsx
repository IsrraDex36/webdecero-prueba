// Input.jsx
// Este componente es un campo de entrada reutilizable que permite personalizar 
// el comportamiento y estilo.
// Props:
// - type: Tipo de input (por defecto 'text').
// - placeholder: Texto que aparece como sugerencia dentro del campo.
// - error: objeto que contiene el mensaje de error si hay algun problema con el input.
// - icon: nombre del icono que se muestra dentro del input.
// - disabled: Booleano para deshabilitar el campo.
// - ...props: Cualquier otra propiedad adicional que se quiera pasar al input.

import React from 'react';
import './Input.css';
import Icon from '../Icons/Icons';

const Input = React.forwardRef(({ type = 'text', placeholder, error, icon, disabled, ...props }, ref) => {
  return (
    <div className="input-container">
      <div className={`input-wrapper ${error ? 'input-error' : ''} ${disabled ? 'input-disabled' : ''}`}>
        {icon && <Icon name={icon} className={`input-icon ${disabled ? 'icon-disabled' : ''}`} />}
        <input type={type} placeholder={placeholder} className="input-field" ref={ref} disabled={disabled} {...props} />
      </div>
      {error && <span className="input-error-message">{error.message}</span>}
    </div>
  );
});

export default Input;