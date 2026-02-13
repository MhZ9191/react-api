import axios from "axios";
import CreateCard from "./CreateCard";
import { useEffect, useState } from "react";

export default function Main() {
  const urlAPI = "https://lanciweb.github.io/demo/api/actresses/";

  const [getData, setGetData] = useState([]);

  const fetchData = () => {
    axios.get(urlAPI).then((res) => {
      setGetData(res.data);
    });
  };

  useEffect(fetchData, []);

  return (
    <main>
      <section className="sec-main">
        <div className="container">
          {getData.map(({ id, name, birth_year, awards, biography, image }) => {
            return (
              <CreateCard
                key={id}
                name={name}
                birth_year={birth_year}
                awards={awards}
                biography={biography}
                image={image}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
