// Icons.jsx
// Este componente es un wrapper para íconos reutilizables usando react-icons.
// Props:
// - name: Nombre del icono a renderizar ('user', 'lock').
// - size: Tamaño del icono (por defecto 20). 

import { IconContext } from "react-icons";
import { FiUser, FiLock, FiHelpCircle,FiMapPin } from "react-icons/fi"; // Importación específica
import './Icons.css';

const Icon = ({ name, size = 20}) => {

  const icons = {
    user: <FiUser size={size} />,
    lock: <FiLock size={size} />,
    location: <FiMapPin size={size} />,   
  };

  return (
    <IconContext.Provider value={{ size }}>
      <span className="icon-wrapper">
        {icons[name] || <FiHelpCircle size={size} />}
      </span>
    </IconContext.Provider>
  );
};

export default Icon;