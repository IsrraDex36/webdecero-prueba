// ProtectedRoute.jsx
// Este componente protege rutas privadas verificando si el usuario esta autenticado.
// Si el usuario no esta autenticado, lo redirige a la pagina de login.
// Props:
// - children: Componentes hijos que se renderizan si el usuario esta autenticado.

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!isAuthenticated()) {
        navigate('/login');
      }
    }, [isAuthenticated, navigate]);
  
    return isAuthenticated() ? children : null;
};

export default ProtectedRoute;