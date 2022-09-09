import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../redux/actions/authAction";

const FormRegister = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isConnected = useSelector((state) => {
    return state.auth.isConnected;
  });

  useEffect(() => {
    if (isConnected) {
      navigate("/search");
    }
  }, [isConnected]);

  const onSubmit = (data) => {
    dispatch(registerUser(data));
    console.log(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="inputs">
        <label htmlFor="mail">Email : </label>
        <input
          id="mail"
          type="mail"
          {...register("mail", { required: true })}
        />
        {errors.mail && <p>Email incorrect</p>}
      </div>
      <div className="inputs">
        <label htmlFor="firstname">Prénom : </label>
        <input
          id="firstname"
          type="text"
          {...register("firstname", { required: true })}
        />
      </div>
      <div className="inputs">
        <label htmlFor="lastname">Nom : </label>
        <input
          id="lastname"
          type="text"
          {...register("lastname", { required: true })}
        />
      </div>
      <div className="inputs">
        <label htmlFor="password">Mot de passe : </label>
        <input id="password" type="password" {...register("password")} />
      </div>
      <div className="inputs">
        <label htmlFor="phone">Numéro de téléphone : </label>
        <input id="phone" type="text" {...register("phone")} />
      </div>
      <div>
        <label htmlFor="country">Pays : </label>
        <select
          name="choixPays"
          id="country"
          className="selection"
          {...register("country")}
        >
          <option className="option" value="">
            Choisissez...
          </option>
          <option value="France">France</option>
          <option value="Italie">Italie</option>
          <option value="Pays-Bas">Pays-Bas</option>
          <option value="Belgique">Belgique</option>
          <option value="Allemagne">Allemagne</option>
        </select>
      </div>

      <button type="submit" variant="contained" color="secondary">
        Créer un compte{" "}
      </button>

      <p>Tous les champs sont obligatoires</p>
    </form>
  );
};

export default FormRegister;
