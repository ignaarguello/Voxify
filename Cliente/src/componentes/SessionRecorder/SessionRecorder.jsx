import React, { useState, useEffect, useRef } from 'react';
// Estilos
import './SessionRecorder.css';

export default function SessionRecorder() {
  // Estado para gestionar los permisos de la cámara
  const [cameraStatus, setCameraStatus] = useState('loading'); // 'loading', 'granted', 'denied'
  // Referencia al elemento <video>
  const videoRef = useRef(null);


    // Función asíncrona para solicitar acceso a la cámara
    const getCameraAccess = async () => {
      try {
        // Solicita acceso al video (cámara)
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        
        // Si el acceso es exitoso, actualiza el estado y asigna el stream al elemento video
        setCameraStatus('granted');
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        // Manejo de errores si el usuario deniega el acceso o si hay un problema técnico
        console.error("Error al acceder a la cámara:", error);
        setCameraStatus('denied');
      }
    };

    

  // Determinar qué mostrar basado en el estado de la cámara
  const renderContent = () => {
    switch (cameraStatus) {
      case 'loading':
        return ;
      case 'denied':
        return (
          <div className="camera-error">
            <h2>Acceso a la cámara denegado.</h2>
            <p>Por favor, revisa los permisos de tu navegador.</p>
          </div>
        );
      case 'granted':
        // Muestra el stream de video si el acceso fue exitoso
        return (
          <section id='VideoActiveSessionWrapper'>
            {/* El elemento video que mostrará el stream de la cámara */}
            <video id='VideoActiveSession' 
              ref={videoRef} 
              autoPlay 
              playsInline 
              muted // Añadimos muted para que se reproduzca automáticamente sin sonido, mejorando la UX
            />
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div id='SessionRecorderWrapper'>
      {renderContent()}
      <h2 onClick={getCameraAccess} id='BotonGrabar_NS'>Grabar</h2>
    </div>
  );
}