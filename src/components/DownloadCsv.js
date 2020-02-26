import React, { useContext } from 'react';
import { JsonToExcel } from 'react-json-excel';
import { GlobalContext } from '../context/GlobalState';

export const DownloadCsv = () => {
  const { transactions } = useContext(GlobalContext);

  const className = 'btn',
  filename = `ExpenseData ${new Date()}`,
  fields = {
    "id": "Id",
    "text": "Text",
    "amount": "Amount"
  }
  return (
    <>
      <JsonToExcel
        data={transactions}
        className={className}
        filename={filename}
        fields={fields}
        />
    </>
  )
}
