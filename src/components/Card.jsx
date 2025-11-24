import './Card.css';

function Card({ image, name, role, bio, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <h3 className="card-name">{name}</h3>
        {role && <p className="card-role">{role}</p>}
        {bio && <p className="card-bio">{bio}</p>}
      </div>
    </div>
  );
}

export default Card;
