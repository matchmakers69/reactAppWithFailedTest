import { useEffect, useState, useRef, useCallback } from "react";

export const useFetch = (responseDataFunction: () => Promise<unknown>) => {
  const [data, setData] = useState<null | unknown>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const isMounted = useRef(true);

  const fetchApi = useCallback(async () => {
    try {
      const response = await responseDataFunction();
      if (isMounted.current) {
        setData(response);
        setLoading(false);
      }
    } catch (err) {
      if (!isMounted.current) return;
      setLoading(false);
      setError(true);
    }
  }, [responseDataFunction]);

  useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  // Update to version React v.17 > // Unmount component
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  return { loading, error, data, refetch: () => fetchApi() };
};
