import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="services-page">
      <h1>Servicios Veterinarios</h1>

      <div className="services-grid">
        <div
          className="service-card"
          onClick={() => setSelectedService("consulta")}
        >
          <div className="service-icon">🩺</div>

          <h3>Consulta General</h3>
          <p>Revisión médica completa.</p>
        </div>

        <div
          className="service-card"
          onClick={() => setSelectedService("vacunacion")}
        >
          <div className="service-icon">💉</div>

          <h3>Vacunación</h3>
          <p>Protección contra enfermedades.</p>
        </div>

        <div
          className="service-card"
          onClick={() => setSelectedService("cirugia")}
        >
          <div className="service-icon">🏥</div>

          <h3>Cirugía</h3>
          <p>Procedimientos especializados.</p>
        </div>
      </div>


      {selectedService && (
        <div className="service-info">
          {selectedService === "consulta" && (
            <>
              <h2>Consulta General</h2>
              <p>
                Evaluación completa de la salud de tu mascota realizada por
                veterinarios especializados.
              </p>
            </>
          )}

          {selectedService === "vacunacion" && (
            <>
              <h2>Vacunación</h2>
              <p>
                Aplicación de vacunas para prevenir enfermedades y fortalecer el
                sistema inmunológico de tu mascota.
              </p>
            </>
          )}

          {selectedService === "cirugia" && (
            <>
              <h2>Cirugía Veterinaria</h2>
              <p>
                Procedimientos quirúrgicos realizados por especialistas con
                tecnología moderna y cuidados profesionales.
              </p>
            </>
          )}

          <button className="service-btn" onClick={() => navigate("/contact")}>
            Agendar este servicio
          </button>
        </div>
      )}
    </div>
  );
}

export default Services;
