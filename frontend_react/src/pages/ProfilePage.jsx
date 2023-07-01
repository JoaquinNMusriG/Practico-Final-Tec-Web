import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { ProfileForm } from "../components/ProfileForm";

export function ProfilePage({ currentUser, verify }) {
  useEffect(() => {
    // Al cargar el componente, eliminamos el backdrop y la clase modal-open
    const backdrop = document.querySelector(".modal-backdrop");
    const body = document.querySelector("body");

    if (backdrop) {
      backdrop.parentNode.removeChild(backdrop);
    }

    if (body.classList.contains("modal-open")) {
      body.classList.remove("modal-open");
      body.style.removeProperty("padding-right");
    }
  }, []);

  return (
    <div>
      <Navbar curUser={currentUser} verify={verify}/>
      <ProfileForm />
    </div>
  );
}
