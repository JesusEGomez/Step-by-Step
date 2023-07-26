import { classInput, classButton, classForm, classSingleDiv } from "./style.js";
import logo from "../../assets/logo.png";
import authHooks from "./authHooks";

function Login({ handleLoginOrRegister }) {
  const { form, handleSubmit, handleChange, handleChangeCheck } = authHooks();

  // console.log(form);

  return (
    <form className={classForm} onSubmit={handleSubmit}>
      <img
        src={logo}
        alt="step by step"
        className="w-[30%] h-24 rounded mx-auto"
      />
      <h2>STEP BY STEP</h2>

      <div className={classSingleDiv}>
        <label htmlFor="user">Ingresa usuario</label>
        <input
          className={classInput}
          onChange={handleChange}
          type="text"
          name="user"
          id="user"
          placeholder="Usuario"
        />
      </div>
      <div className={classSingleDiv}>
        <label htmlFor="pass">Ingresa contraseña</label>
        <input
          className={classInput}
          onChange={handleChange}
          type="password"
          name="pass"
          id="pass"
          placeholder="**********"
        />
      </div>

      <div className="text-left">
        <input
          onChange={handleChangeCheck}
          type="checkbox"
          name="isAdmin"
          id="isAdmin"
        />
        <label className="ml-2" htmlFor="isAdmin">
          Eres administrador
        </label>
      </div>

      <input className={classButton} type="submit" value="Iniciar sesión" />

      <hr />

      <button onClick={handleLoginOrRegister} type="button">
        Crear una cuenta
      </button>
    </form>
  );
}

export default Login;
