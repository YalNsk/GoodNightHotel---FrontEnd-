import { useForm, useFormState } from "react-hook-form";


const FormRegister = () => {

    const {handleSubmit, register, formState : {errors}, reset} = useForm()
    const onSubmit = (data) => {
        console.log(data);

        reset ()
    } 


    return (
        
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="inputs">
                <label htmlFor='email'>Email : </label>
                <input id='email' type='email' {...register("email", {required:true}) } />
                {errors.email && <p>Email incorrect</p>}
            </div>
            <div className="inputs">
                <label htmlFor='firstname'>Prénom : </label>
                <input id='firstname' type='text' {...register("firstname")} />
            </div>
            <div className="inputs">
                <label htmlFor='lastname'>Nom : </label>
                <input id='lastname' type='text' {...register("lastname")}/>
            </div>
            <div className="inputs">
                <label htmlFor='password'>Mot de passe : </label>
                <input id='password' type='password' {...register("password")} />
            </div>
            <div className="inputs">
                <label htmlFor='phonenumber'>Numéro de téléphone : </label>
                <input id='phonenumber' type='text' {...register("phonenumber")} />
            </div>
            <div>
                <label htmlFor='country'>Pays : </label>
                <select
                    name="choixPays"
                    id="pays"
                    className="selection"
                    {...register("pays")}
                >
                    <option className="option" value="">Choisissez...</option>
                    <option value="france">France</option>
                    <option value="italie">Italie</option>
                    <option value="espagne">Espagne</option>
                    <option value="portugal">Portugal</option>
                    <option value="suisse">Suisse</option>
                </select>
            </div>

            <button type='submit'
                variant='contained'
                color='secondary'
            >Créer un compte </button>

            <p>Tous les champs sont obligatoires</p>

        </form>


    )


}


export default FormRegister;