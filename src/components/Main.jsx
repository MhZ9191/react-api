import axios from "axios";
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

  return <div></div>;
}
