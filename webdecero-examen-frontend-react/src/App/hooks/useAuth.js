// useAuth.js
// Hook personalizado para manejar la autenticacion de usuarios.
// aqui engloba la logica para consumir la api de dummyjson 
// Tambien incluye metodos para manejar formularios con react-hook-form.

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export const useAuth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState(null);
  
  // Añadimos el hook useForm directamente en useAuth
  const formMethods = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  });

  const login = async (credentials) => {
    setIsLoading(true);
    setAuthError(null);
    try {
      const authResponse = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...credentials,
          expiresInMins: 30
        })
      });

      const authData = await authResponse.json();
      const authToken = authData.token || authData.accessToken;

      if (!authResponse.ok) {
        let errorMsg = 'Credenciales incorrectas';
        if (authData.message?.includes('User not found')) errorMsg = 'Usuario no encontrado';
        if (authData.message?.includes('Invalid credentials')) errorMsg = 'Contraseña incorrecta';
        throw new Error(errorMsg);
      }

      const userResponse = await fetch(`https://dummyjson.com/users/${authData.id}`, {
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        }
      });

      const userData = await userResponse.json();

      if (!userResponse.ok) {
        throw new Error('Error al obtener datos del usuario');
      }

      const completeUserData = {
        ...authData,
        ...userData
      };

      localStorage.setItem('authToken', authToken);
      localStorage.setItem('userData', JSON.stringify(completeUserData));
      
      navigate('/profile');
      return completeUserData;
    } catch (err) {
      setAuthError(err.message);
      formMethods.setError('root', {
        type: 'manual',
        message: err.message
      });
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    navigate('/login');
  };

  const isAuthenticated = () => {
    const token = localStorage.getItem('authToken');
    return !!token && token !== 'undefined';
  };

  const getUserData = () => {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  };

   return { 
    login,
    logout,
    isAuthenticated,
    getUserData,
    isLoading,
    authError,
     
    formMethods,
    register: formMethods.register,
    handleSubmit: formMethods.handleSubmit,
    formState: formMethods.formState,
    setError: formMethods.setError
  };
};