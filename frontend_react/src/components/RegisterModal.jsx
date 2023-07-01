import { useForm } from "react-hook-form";
import { useState } from "react";
import { submitRegistration } from "../api/user.api";

export function RegisterModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [generation, setGeneration] = useState("");

  const onSubmit = handleSubmit(async (data, e) => {
    e.preventDefault();
    await submitRegistration(data, generation);
  });

  const onChange = (e) => {
    let year = e.target.valueAsDate.getFullYear();
    if (year > 2013) {
      setGeneration("A");
    } else if (year > 1997) {
      setGeneration("Z");
    } else if (year > 1981) {
      setGeneration("M");
    } else if (year > 1965) {
      setGeneration("X");
    } else {
      setGeneration("B");
    }
  };

  return (
    <div
      className="modal fade"
      id="registerModal"
      tabIndex="-1"
      aria-labelledby="registerModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title" id="registerModalLabel">
              Registro de usuario
            </h3>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Nombre de Usuario
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  {...register("username", { required: true })}
                />
                {errors.username && <span>Debes colocar un username</span>}
              </div>
              <div className="mb-3">
                <label htmlFor="birth-date-register" className="form-label">
                  Fecha de nacimiento
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="birth-date-register"
                  required
                  onChange={onChange}
                />
                {generation && (
                  <span>Perteneces a la generacion {generation}</span>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  {...register("email", { required: true })}
                />
                {errors.email && <span>Debes colocar un email</span>}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  {...register("password", { required: true })}
                />
                {errors.password && <span>Debes colocar una contraseña</span>}
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Registrarse
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
