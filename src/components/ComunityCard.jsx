const CommunityCard = ({ name, description }) => {
    return (
      <div className="card">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    );
  };
  
  export default CommunityCard;
  