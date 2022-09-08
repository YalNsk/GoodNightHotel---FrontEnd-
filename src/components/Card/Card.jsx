const Card = ({ element }) => {
  return (
    <li className="card">
      <img src={element.img} alt="" />
      <div className="containerTxt">
        <h3 className="nomHotel">{element.name}</h3>
        <h5 className="slogan">{element.slogan}</h5>
        <p className="descr">{element.description}</p>
      </div>
    </li>
  );
};

export default Card;
