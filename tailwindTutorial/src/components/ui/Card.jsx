const Card = ({ title, description }) => {
  return (
    <div>
      <h1 className="p-100">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Card;
