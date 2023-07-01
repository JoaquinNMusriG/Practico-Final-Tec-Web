import { Navbar } from "../components/Navbar";
import { LoginModal } from "../components/LoginModal";
import { RegisterModal } from "../components/RegisterModal";

export function IndexPage({ currentUser, verify }) {

  return (
    <div>
      <Navbar curUser={currentUser} verify={verify}/>
      <LoginModal verify={verify}/>
      <RegisterModal />
      <section className="container my-5">
        <div className="container">
          <h1 className="text-center mb-4">
            Hechos Históricos Argentinos por Generación
          </h1>
          <p>
            Esta aplicación tiene por objetivo demostrar los hechos que
            sucedieron en la historia reciente de nuestro país Argentina, según
            la generación a la que pertenezca el usuario que visita. La
            aplicación se basará en la siguientes clasificación de generaciones:
          </p>
          <ul>
            <li>Baby boomers (1946 y 1964)</li>
            <li>Generación X (1965 y 1980)</li>
            <li>Millennials o Generación Y (1981 y 1996)</li>
            <li>Generación Z (1997 y 2012)</li>
            <li>Generación Alpha (2013 hasta el presente)</li>
          </ul>
          <h2 className="text-center mb-4">Conceptos Claves</h2>
          <p>
            Un <strong>hecho</strong> es un suceso significativo que ocurrió en
            el pasado y que ha tenido un impacto en la historia de un país o de
            la humanidad en general. En esta aplicación, presentamos una lista
            de hechos históricos argentinos por generación.
          </p>
          <p>
            Un <strong>hito</strong>, por otro lado, es un evento que marca un
            momento importante en el desarrollo de algo, marca un punto de
            inflexión, ya sea un país, un proyecto, una organización o cualquier
            otra cosa. En el contexto de esta aplicación, usamos el término
            "hitos" para referirnos a los hechos históricos específicos que
            presentamos en la lista inicial de cada generación.
          </p>
          <p>
            Es importante distinguir entre los conceptos de "hecho" e "hito" ya
            que los hitos son eventos específicos y destacados que marcan un
            cambio significativo en el curso de los acontecimientos, mientras
            que los hechos son sucesos que pueden ser objetivamente descritos y
            documentados, pero que no necesariamente tienen el mismo nivel de
            importancia o significado en la historia. En esta aplicación nos
            enfocamos en los primeros, que son eventos que marcaron la historia
            de Argentina, pero no necesariamente son hitos en el sentido de ser
            eventos importantes en el desarrollo de la sociedad argentina.
          </p>
        </div>
      </section>
    </div>
  );
}
