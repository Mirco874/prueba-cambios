import { Link } from "react-router-dom";

export const RegisterForm = () => {
  return (
    <form className="mx-auto border border-dark rounded h-75 w-50 p-3">
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Nombre completo</label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Nombre Completo"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Email</label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Tipo de cuenta</label>
        <select className="form-control" id="exampleFormControlSelect1">
          <option>Estudiante</option>
          <option>Docente</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlPassword">Contraseña</label>
        <input
          type="password"
          className="form-control"
          id="exampleFormControlPassword"
          placeholder="Contraseña"
        />
      </div>
      <br />
      <button type="submit" className="btn btn-dark mb-3">
        Registrarse
      </button>
      <br />
      <span>
        ¿ya tienes una cuenta? <Link to="/inicio-sesion">Iniciar sesion</Link>.
      </span>
    </form>
  );
};
