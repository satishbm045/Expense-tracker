import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { DownloadCsv } from './components/DownloadCsv';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  if(localStorage.getItem('transDetails') === null){
    localStorage.setItem('transDetails', '[]');
  }
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <div className="container">
          <Route exact path='/' render = {(props)=>
          <>
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <Link className="btn" to="/add">Add Transaction</Link>
            <DownloadCsv />
          </>}/>
          <Route exact path='/add' component={AddTransaction} />
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
