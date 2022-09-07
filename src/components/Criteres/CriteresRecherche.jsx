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
        <div className="dates">
          <label htmlFor="dateDebut">Date de début de réservation :</label>
          <input type="date" name="dateDebut" id="dateDebut" />
          <label htmlFor="dateDebut">Date de fin de réservation :</label>
          <input type="date" name="dateFin" id="dateFin" />
          <br />
          <hr />
          <br />

          <div className="nbrePersonnes">
            <label htmlFor="adultes">Nombre d'adultes :</label>
            <select className="select" name="nbreAdultes" id="nbreAdultes">
              <option value="">Faites votre choix</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <label htmlFor="nbreEnfants">Nombre d'enfants :</label>
            <select className="select" name="nbreEnfants" id="nbreEnfants">
              <option value="">Faites votre choix</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <br />
            <hr />
            <br />

            <div className="typeChambre">
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
        </div>
        <button id="envoi" type="submit">
          confirmation
        </button>
      </form>
    </>
  );
};

export default CriteresRecherche;
