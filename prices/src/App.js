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
      
      https://media1.giphy.com/media/grNkIEN4dkiMXFLIE9/giphy.gif?cid=ecf05e47ikavad7chm40zvfm86xu1rd2mfhswgm5klw92jnw&rid=giphy.gif&ct=s
   */

  /* https://media0.giphy.com/media/EJNm9rPe4J8FSIfZqm/giphy.gif?cid=ecf05e47yft84zza5x0e4gj4uotxmerl8fevi1dyqzxckp15&rid=giphy.gif&ct=s */
  if (!data) {
    return (
      <div className="loadingscreen">
        <h1 className="fetching">Fetching data ...</h1>
        <img
          src="https://media0.giphy.com/media/EJNm9rPe4J8FSIfZqm/giphy.gif?cid=ecf05e47yft84zza5x0e4gj4uotxmerl8fevi1dyqzxckp15&rid=giphy.gif&ct=s"
          alt="loader"
        />
      </div>
    );
  }

  return (
    <div>
      <table>
        <tr className="stickyHead">
          <th>Logo</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Price ($)</th>
          <th>Price (₹)</th>

          <th>Market Cap ($)</th>
          <th>Market Cap (₹)</th>

          <th>Change_24h_($)</th>
          <th>Change_24h_(₹)</th>
          <th>24h_High_($)</th>
          <th>24h_High_(₹)</th>
          <th>24h Low ($)</th>
          <th>24h Low (₹)</th>

          <th>7 Days</th>
          <th>30 Days</th>
          <th>1 Year</th>
        </tr>
        {data.map((data) => (
          <tr className="newrow">
            <td className="logo">
              <img src={data.image.small} alt={data.name} />
            </td>
            <td className="coinName">{data.name}</td>
            <td className="symbolName">{data.symbol.toUpperCase()}</td>

            <td className="prices">${data.market_data.current_price.usd}</td>
            <td className="prices">₹{data.market_data.current_price.inr}</td>

            <td className="marketcap">${data.market_data.market_cap.usd}</td>
            <td className="marketcap">₹{data.market_data.market_cap.inr}</td>

            {data.market_data.price_change_24h_in_currency.usd < 0 ? (
              <td className="Rprices">
              ${Math.round(data.market_data.price_change_24h_in_currency.usd * Math.pow(10, 5)) / Math.pow(10, 5)}
              </td>
            ) : (
              <td className="Gprices">
              ${Math.round(data.market_data.price_change_24h_in_currency.usd * Math.pow(10, 5)) / Math.pow(10, 5)}
              </td>
            )}

            {data.market_data.price_change_24h_in_currency.inr < 0 ? (
              <td className="Rprices">
              ₹{Math.round(data.market_data.price_change_24h_in_currency.inr * Math.pow( 10, 5 ))/Math.pow( 10, 5 )}
              </td>
            ) : (
              <td className="Gprices">
              ₹{Math.round(data.market_data.price_change_24h_in_currency.inr * Math.pow( 10, 5 ))/Math.pow( 10, 5 )}
              </td>
            )}

            <td className="additional">${data.market_data.high_24h.usd}</td>
            <td className="additional">₹{data.market_data.high_24h.inr}</td>
            <td className="additional">${data.market_data.low_24h.usd}</td>
            <td className="additional">₹{data.market_data.low_24h.inr}</td>

            {data.market_data.price_change_percentage_7d > 0 ? (
              <td className="Gprices">{data.market_data.price_change_percentage_7d}% </td>
            ):(
              <td className="Rprices">{data.market_data.price_change_percentage_7d}% </td>
            )}

            {data.market_data.price_change_percentage_30d > 0 ? (
              <td className="Gprices">{data.market_data.price_change_percentage_30d}% </td>
            ):(
              <td className="Rprices">{data.market_data.price_change_percentage_30d}% </td>
            )}

            {data.market_data.price_change_percentage_1y > 0 ? (
              <td className="Gprices">{data.market_data.price_change_percentage_1y}% </td>
            ):(
              <td className="Rprices">{data.market_data.price_change_percentage_1y}% </td>
            )}
            
          </tr>
        ))}
      </table>
    </div>
  );
}
