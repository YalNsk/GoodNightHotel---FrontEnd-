import React, { useState } from "react";

const SelectBar = () => {
  const [choicePays, setchoicePays] = useState();

  let paysSelection = (e) => {
    setchoicePays(e.target.value);
  };

  console.log(choicePays);
  return (
    <div className="selection">
      <label htmlFor="pays">Choisissez votre destination</label>
      <select
        value={choicePays}
        onChange={paysSelection}
        name="choixPays"
        id="pays"
      >
        <option value="">Choisissez...</option>
        <option value="france">France</option>
        <option value="italie">Italie</option>
        <option value="espagne">Espagne</option>
        <option value="portugal">Portugal</option>
        <option value="suisse">Suisse</option>
      </select>
    </div>
  );
};

export default SelectBar;
