import { useEffect, useState } from "react";

export function useApiPolling(apiFunction, delay = 5000) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiFunction();
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const intervalId = setInterval(() => {
      apiFunction().then((response) => {
        setData(response);
      });
    }, delay);

    return () => clearInterval(intervalId);
  }, [apiFunction, delay]);

  return data;
}
