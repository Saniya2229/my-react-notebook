import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    let mounted = true;
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((res) => {
        if (mounted && res && res[currency]) {
          setData(res[currency]);
        } else if (mounted) {
          setData({});
        }
      })
      .catch((err) => {
        console.error('Failed to fetch currency data', err);
        if (mounted) setData({});
      });
    return () => {
      mounted = false;
    };
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
