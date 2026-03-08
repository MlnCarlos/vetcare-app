import { useEffect, useState } from "react";
import PetCard from "../components/PetCard";
import petsData from "../data/pets";

function Pets() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedPets = localStorage.getItem("pets");

    if (savedPets) {
      setPets(JSON.parse(savedPets));
      setLoading(false);
    } else {
      setTimeout(() => {
        setPets(petsData);
        setLoading(false);
      }, 1000);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pets", JSON.stringify(pets));
  }, [pets]);

  const addPet = () => {
    if (!name || !age || !type || !image) {
      alert("Completa todos los campos");
      return;
    }

    const newPet = {
      id: Date.now(),
      name,
      age,
      type,
      image,
    };

    setPets([...pets, newPet]);
    setMessage("🐾 Mascota agregada correctamente");

    setTimeout(() => {
      setMessage("");
    }, 3000);

    setName("");
    setAge("");
    setType("");
    setImage("");
  };

  const deletePet = (id) => {
    const filtered = pets.filter((pet) => pet.id !== id);

    setPets(filtered);
  };

  const fetchPetImage = async () => {
    if (!type) {
      alert("Selecciona primero el tipo de mascota");
      return;
    }

    try {
      if (type === "perro") {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");

        const data = await response.json();

        setImage(data.message);
      }

      if (type === "gato") {
        const response = await fetch(
          "https://api.thecatapi.com/v1/images/search",
        );

        const data = await response.json();

        setImage(data[0].url);
      }
    } catch (error) {
      console.error("Error obteniendo imagen:", error);
    }
  };

  const filteredPets = pets
    .filter((pet) => pet.name.toLowerCase().includes(search.toLowerCase()))
    .filter((pet) => filter === "all" || pet.type === filter);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Cargando mascotas...</h2>;
  }

  return (
    <div className="pets-container">
      <h1>Nuestras Mascotas</h1>

      <div className="pet-form">
        <h2>Registrar Mascota</h2>

        {message && <p className="success-message">{message}</p>}

        <input
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Edad"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="pet-select"
        >
          <option value="">Seleccionar tipo</option>
          <option value="perro">Perro</option>
          <option value="gato">Gato</option>
        </select>

        <input
          placeholder="URL de Imagen"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        {image && (
          <div className="image-preview">
            <p>Vista previa:</p>

            <img src={image} alt="preview mascota" />
          </div>
        )}

        <button onClick={fetchPetImage}>Generar imagen desde API</button>

        <button onClick={addPet}>Agregar Mascota</button>
      </div>

      <div className="search-container">
        <input
          placeholder="Buscar mascota..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="filter-container">
        <button onClick={() => setFilter("all")}>Todos</button>
        <button onClick={() => setFilter("perro")}>Perros</button>
        <button onClick={() => setFilter("gato")}>Gatos</button>
      </div>

      <div className="pets-grid">
        {filteredPets.map((pet) => (
          <PetCard key={pet.id} pet={pet} deletePet={deletePet} />
        ))}
      </div>
    </div>
  );
}

export default Pets;
