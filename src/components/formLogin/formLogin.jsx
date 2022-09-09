import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/authAction";
import { Link } from "react-router-dom";

const Formlogin = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
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
    dispatch(login(data));
    console.log(data);
    reset();
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
        <label htmlFor="password">Mot de passe : </label>
        <input id="password" type="password" {...register("password", {required: true})} />
      </div>

      <button type="submit" variant="contained" color="secondary">
        Se connecter{" "}
      </button>
      <Link to = "/loginRegister">Vous n'avez pas de compte ? Inscrivez-vous</Link>
    </form>
  );
};

export default Formlogin;
