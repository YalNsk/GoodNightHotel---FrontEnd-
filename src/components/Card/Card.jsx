const Card = ({ element }) => {
  return (
    <li className="card">
      <img src={element.img} alt="" />
      <div className="containerTxt">
        <h3 className="nomHotel">{element.name}</h3>
        <h5 className="slogan">{element.slogan}</h5>
        <p className="descr">{element.description}</p>
      </div>
      <button className="voirChambres">Voir les chambres</button>
      <div className="containerAdress">
        <h5>
          {element.adresse.street} {element.adresse.num}
        </h5>
        <h5>{element.tel}</h5>
        <h5>{element.email}</h5>
      </div>
    </li>
  );
};

export default Card;
