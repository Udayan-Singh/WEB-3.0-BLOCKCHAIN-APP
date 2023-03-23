import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get("https://api.coingecko.com/api/v3/coins/")
        .then((response) => setData(response.data))
        .catch((error) => console.error(error));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  /**
   * axios
      .get("https://api.coingecko.com/api/v3/coins/")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
   */
  if (!data) {
    return (<div className="loadingscreen">
      <h1 className="fetching">Fetching data ...</h1>
      <img src="https://media1.giphy.com/media/grNkIEN4dkiMXFLIE9/giphy.gif?cid=ecf05e47ikavad7chm40zvfm86xu1rd2mfhswgm5klw92jnw&rid=giphy.gif&ct=s" alt="loader" />
    </div>);
  }

  return (
    <div>
      <table>
        <tr>
          <th>Logo</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Price $</th>
          <th>Price ₹</th>
          <th>Price Change 24hr $</th>
          <th>Price Change 24hr ₹</th>
          <th>24 hr High ($)</th>
          <th>24 hr High (₹)</th>
          <th>24 hr Low ($)</th>
          <th>24 hr Low (₹)</th>
        </tr>
        {data.map((data) => (
          <tr>
            <td className="logo">
              <img src={data.image.small} alt={data.name} />
            </td>
            <td className="coinName">{data.name}</td>
            <td className="symbolName">{data.symbol.toUpperCase()}</td>
            <td className="prices">{data.market_data.current_price.usd}</td>
            <td className="prices">{data.market_data.current_price.inr}</td>
            <td className="Gprices">{Math.floor(data.market_data.price_change_24h_in_currency.usd)}</td>
            <td className="Gprices">{Math.floor(data.market_data.price_change_24h_in_currency.inr)}</td>
            <td className="additional">{data.market_data.high_24h.usd}</td>
            <td className="additional">{data.market_data.high_24h.inr}</td>
            <td className="additional">{data.market_data.low_24h.usd}</td>
            <td className="additional">{data.market_data.low_24h.inr}</td>
          </tr>
        ))}
      </table>

    </div>
  );
}
