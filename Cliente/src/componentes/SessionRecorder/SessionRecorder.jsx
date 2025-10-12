import React, { useState, useEffect, useRef } from 'react';

//Estilos
import './SessionRecorder.css';

//Loader
import { CircleLoader } from "react-spinners";

export default function SessionRecorder() {
  // Estado para gestionar los permisos de la cámara y el stream
  const [cameraStatus, setCameraStatus] = useState('loading'); // 'loading', 'granted', 'denied'
  const [mediaStream, setMediaStream] = useState(null);
  // Referencia al elemento <video>
  const videoRef = useRef(null);

  // Función asíncrona para solicitar acceso a la cámara
  const getCameraAccess = async () => {
    try {
      // Solicitamos acceso al video (cámara)
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      // Si el acceso es exitoso, actualizamos el estado con el stream y cambiamos el status
      setMediaStream(stream);
      setCameraStatus('granted');
    } catch (error) {
      // Manejo de errores
      console.error("Error al acceder a la cámara:", error);
      setCameraStatus('denied');
    }
  };

  // Usamos useEffect para asignar el stream al videoRef cuando el mediaStream cambie
  useEffect(() => {
    if (videoRef.current && mediaStream) {
      videoRef.current.srcObject = mediaStream;
      // Una vez que el stream se asigna, reproducimos el video
      videoRef.current.play().catch(error => {
        console.error("Error al intentar reproducir el video:", error);
      });
    }
  }, [mediaStream]);

  // Determinar qué mostrar basado en el estado de la cámara
  const renderContent = () => {
    switch (cameraStatus) {
      case 'loading':
        return (
          <div className="camera-loading">
            <CircleLoader color='#ed7140'/>
            <h3>Todo listo para tu nueva sesión...</h3>
          </div>
        ); // No mostramos nada mientras carga o antes de interactuar
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
            <video
              id='VideoActiveSession'
              ref={videoRef}
              autoPlay
              playsInline
              muted
            />
            <h2 id='BrandVoxifyVideoActive'>Voxify</h2>
          </section>
        );
      default:
        return null;
    }
  };


  
  return (
    <div id='SessionRecorderWrapper'>
      <div id='Contenedor-Pre-Render'>{renderContent()}</div>
      {/* El botón ahora solo solicita el acceso a la cámara */}
      <section id='Grabar-Stop_NS'>
        <div onClick={getCameraAccess} className='BotonGrabar_NS'>Grabar</div>
        <div onClick={() => setCameraStatus('loading')} className='BotonGrabar_NS'>Stop</div>
      </section>
    </div>
  );
}