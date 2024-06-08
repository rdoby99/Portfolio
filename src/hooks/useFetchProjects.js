import { useEffect, useState } from "react";

export default function useFetchProjects(uri) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiKey = import.meta.env.VITE_API_TOKEN;

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${apiKey}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(uri, requestOptions);
        if (response.ok) {
          const data = await response.json();
          setData(data.data);
        } else {
          throw new Error("Error", response.status);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [uri]);

  return { data, error, loading };
}
