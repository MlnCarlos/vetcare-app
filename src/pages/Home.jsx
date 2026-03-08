import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <section className="hero">
        <h1>Bienvenido a VetCare 🐶</h1>

        <p>Cuidamos la salud y bienestar de tus mascotas.</p>

        <button className="hero-btn" onClick={() => navigate("/contact")}>
          Agendar Cita
        </button>
      </section>
    </div>
  );
}

export default Home;
