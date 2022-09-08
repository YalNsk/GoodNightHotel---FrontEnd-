const CriteresRecherche = () => {
  const confirmer = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form
        onSubmit={(e) => confirmer(e)}
        className="formSearch"
        action="submit"
      >
        <div className="debut">
          <label htmlFor="dateDebut">Date de début de réservation :</label>
          <input type="date" name="dateDebut" id="dateDebut" />
        </div>
        <div className="fin">
          <label htmlFor="dateDeFin">Date de fin de réservation :</label>
          <input type="date" name="dateFin" id="dateFin" />
        </div>

        <div className="adu">
          <label htmlFor="adultes">Nombre d'adultes :</label>
          <select className="select" name="nbreAdultes" id="nbreAdultes">
            <option value="">Faites votre choix</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="enfants">
          <label htmlFor="nbreEnfants">Nombre d'enfants :</label>
          <select className="select" name="nbreEnfants" id="nbreEnfants">
            <option value="">Faites votre choix</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        <div className="typeChambre">
          <div className="room">
            <label htmlFor="choixChambre">Type de chambre :</label>
            <select className="select" name="choixChambre" id="choixChambre">
              <option value="">Faites votre choix</option>
              <option value="Single">Single</option>
              <option value="Double">Double</option>
              <option value="Famille">Famille</option>
              <option value="Suite">Suite</option>
            </select>
          </div>
        </div>
        <div className="confirmation">
          <label htmlFor="envoi">Confirmez vos choix :</label>
          <button id="envoi" type="submit">
            confirmation
          </button>
        </div>
      </form>
    </>
  );
};

export default CriteresRecherche;
