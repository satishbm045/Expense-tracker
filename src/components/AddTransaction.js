import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    if(text == ''){
      document.getElementById('textBox').classList.add('error-blink');
      setTimeout(()=>{
        document.getElementById('textBox').classList.remove('error-blink');
      }, 1000)
      return;
    }
    if(amount == 0){
      document.getElementById('amountBox').classList.add('error-blink');
      setTimeout(()=>{
        document.getElementById('amountBox').classList.remove('error-blink');
      }, 1000)
      return;
    }
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
    const getData = JSON.parse(localStorage.getItem('transDetails'));
    getData.push(newTransaction);
    localStorage.transDetails = JSON.stringify(getData);
    addTransaction(newTransaction);
    setText('');
    setAmount(0);
    window.history.back();
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input id="textBox" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input id="amountBox" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Submit Transaction</button>
      </form>
    </>
  )
}
