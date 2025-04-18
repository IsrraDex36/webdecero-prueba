# Examen Prueba de Desarrollo Frontend - React

## Objetivo
El objetivo de este examen es evaluar tu capacidad para trabajar con React, manejar la autenticación de usuarios utilizando una API REST y la maquetación de una página web.

## Observaciones (LEER ATENTAMENTE)
**Documentación de evidencias (reports.md)**:
- Deberás utilizar el archivo `reports.md` localizado en la raíz del proyecto en el cual responderas las preguntas abiertas dentro del mismo. 
- Si instalas una dependencia o usas algún tipo de patrón, deberás redactar por qué lo utilizaste y por qué consideras que fue la mejor solución.
- Solo está permitido el uso de documentación oficial de dependencias o tecnologías usadas. El uso de algún motor de IA para generar la solución será motivo inmediatio de descarte.

## Consideraciónes de diseño
- Las vistas serán con base a los Sketch `login_screen.png` y `profile-screen.png`
- Usar colores Primario: #1F2226, Secundario: #EA4D88;
- Fuente a considerar: [https://fonts.google.com/specimen/Quicksand?query=Quicksand] o en su defecto Roboto.

## Instrucciones

- Clona este repositorio de GitHub

- Asegúrate de tener Node.js en su versión 20 o superior instalada en tu equipo.  

- Deberás generar un repositorio público para subir este examen. Al finalizar compartirás el link con el reclutador por el medio que se te haya indicado.

- Inicializar el proyecto y revisa la carpeta Views la cual contiene las vistas a trabajar y adjunto una imagen PNG la cual deberas tomar como guía para la maquetación de las mismas.

- Utiliza la vista de entrada `Login.jsx`, genera el layout con base al Sketch adjunto como `login-screen.png`. 

- Deberás agregar estilos necesarios y crear componentes para (Layouts, Botones, Inputs, Iconos etc...) de React para generar la maquetación necesaria y obtener un resultado igual a la imagen adjunta `login_screen.png`.

- Debes crear una carpeta a nivel "App" para guardar tus componentes. (Realizar la documentación para cada componente utilizado).

- Para la autenticación deberás consumir la API proporcionada en el siguiente enlace: (Lee atentamente las consultas posibles que proporciona cada servicio API)
[https://dummyjson.com/docs/auth](https://dummyjson.com/docs/auth)

- Procede a implementar la lógica de autenticación, deberás crear un Hook para encapsular la lógica de validación y autenticación del formulario.

- Podras usar `react-hook-form`, `Formik` u otro paquete de validación para tu formulario.

- Implementa la lógica para autenticar al usuario utilizando la API proporcionada.

- En caso de que las credenciales sean correctas, deberás obtener el token de autenticación y realizar la lógica adecuada para redirigir al usuario hacia la vista `Profile.jsx`, en caso contrario deberás mostrar un mensaje de error bajo el formulario.

- Debes usar `localStorage` para almacenar la sesión de usuario y cada vez que el navegador sea refrescado, deberás redireccionar automáticamente a la vista `Profile.jsx`.

- Realiza la maquetación de la vista `Profile.jsx` de acuerdo al Sketch adjunto `profile-screen.png` y muestra la informacion del usuario autenticado tal como se muestra en el Sketch.

- Añade una opción para cerrar sesión y redirija al usuario a la vista `Login.jsx`.

¡Buena suerte!
