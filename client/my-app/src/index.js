import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"

import { TransactionsProvider } from './context/TransactionContext';

ReactDOM.render(
  <TransactionsProvider>
    <div>
      <App />
    </div>
  </TransactionsProvider>
  ,
  document.getElementById("root"));