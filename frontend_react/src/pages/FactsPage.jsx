import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { getFactsFiltered } from "../api/facts.api";

export function FactsPage({ currentUser, verify }) {
  const params = useParams();

  const [facts, setFacts] = useState([]);

  useEffect(() => {
    const matchGen = (gen) => {
      let result = "";
      if (gen == "Generación Alpha") {
        result = "A";
      } else if (gen == "Generación Z") {
        result = "Z";
      } else if (gen == "Millennials") {
        result = "M";
      } else if (gen == "Generación X") {
        result = "X";
      } else if (gen == "Baby boomers") {
        result = "B";
      }
      return result;
    };

    const fetchData = async (generation) => {
      try {
        const response = await getFactsFiltered(generation);
        setFacts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    let generation = matchGen(params.gen);
    fetchData(generation);
  }, [params.gen]);

  return (
    <div>
      <Navbar curUser={currentUser} verify={verify} />
      <h1 className="text-center mb-4 my-5">{params.gen}</h1>
      <ul className="list-unstyled">
        {facts.map((fact) => (
          <li className="container mb-4" key={fact.id}>
            <h2 className="text-center mb-4">{fact.title}</h2>
            <p>{fact.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
