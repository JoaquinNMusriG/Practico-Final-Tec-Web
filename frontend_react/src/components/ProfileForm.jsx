import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { getUser } from "../api/user.api";

export function ProfileForm() {
  const { register, setValue } = useForm();

  useEffect(() => {
    async function loadUser() {
      const { data } = await getUser();
      console.log(data);
      setValue("username", data.user.username);
      setValue("email", data.user.email);
      setValue("generation", data.user.generation);
    }
    loadUser();
  }, []);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h1 className="text-center mb-4">Mi perfil</h1>
          <form>
            <div className="form-group mb-3">
              <label htmlFor="username">Nombre de Usuario</label>
              <input
                type="text"
                className="form-control"
                id="username"
                {...register("username")}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                {...register("email")}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="generation">Generación</label>
              <input
                type="text"
                className="form-control"
                id="generation"
                readOnly
                {...register("generation")}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary" disabled>
                Guardar cambios
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
