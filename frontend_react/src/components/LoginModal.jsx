import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { submitLogin } from "../api/user.api";

export function LoginModal({verify}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data, e) => {
    e.preventDefault();
    const res = await submitLogin(data);
    const modalElement = document.getElementById("loginModal"); //Modal bug
    const bootstrapModal = new bootstrap.Modal(modalElement);
    bootstrapModal.hide();
    if (res.statusText == "OK") {
      verify(true);
      navigate("/profile");
    } else {
      console.log(res.statusText);
    }
  });

  return (
    <div
      className="modal fade"
      id="loginModal"
      tabIndex="-1"
      aria-labelledby="loginModalLabel"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title" id="loginModalLabel">
              Iniciar sesión
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
                <label htmlFor="email-login" className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email-login"
                  {...register("email-login", { required: true })}
                />
                {errors.email && <span>Debes colocar un email</span>}
              </div>
              <div className="mb-3">
                <label htmlFor="password-login" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password-login"
                  {...register("password-login", { required: true })}
                />
                {errors.password && <span>Debes colocar una contraseña</span>}
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Iniciar sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
