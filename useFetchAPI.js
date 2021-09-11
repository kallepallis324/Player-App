import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetchAPI(url) {
  const [apiResults, setapiResults] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const fetchAPI = () => {
    axios
      .get(url)
      .then((response) => {
        setapiResults(response.data);
        setisLoading(false);
      })
      .catch();
  };

  useEffect(() => {
    fetchAPI();
  }, [url]);

  return { apiResults, isLoading };
}
