function PetCard({ pet, deletePet }) {
  return (
    <div className="pet-card">
      <img src={pet.image} alt={pet.name} />

      <h3>{pet.name}</h3>

      <p>Edad: {pet.age}</p>

      <p>Tipo: {pet.type}</p>

      <button onClick={() => deletePet(pet.id)} className="delete-btn">
        Eliminar
      </button>
    </div>
  );
}

export default PetCard;
