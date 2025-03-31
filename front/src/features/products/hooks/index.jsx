import { useEffect, useState } from "react";
import { getProduct, getStockPrice } from "../services";

export const useApi = (callback, params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    callback(params).then((res) => {
      setData(res);
      setLoading(false);
    });
  }, [callback]);

  return { data, loading };
};

export const useApiPolling = (params) => {
  const { id } = params;

  const [product, setProduct] = useState(null);
  const [stockPrice, setStockPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sku, setSku] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      getProduct({ id }).then((productResult) => {
        setProduct(productResult);
        getStockPrice({ sku: productResult?.skus[sku].code }).then(
          (stockPriceResult) => {
            setStockPrice(stockPriceResult);
            setLoading(false);
          }
        );
      });
    };

    fetchProduct();

    const interval = setInterval(() => {
      fetchProduct();
    }, 5000);

    return () => clearInterval(interval);
  }, [sku]);

  return { product, stockPrice, loading, sku, setSku };
};
