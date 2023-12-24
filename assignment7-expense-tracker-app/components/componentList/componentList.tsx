// ExpenseList.js
import {useState} from 'react'
import {ExpensePropTypes} from '../../types/componentsTypes'
import ExpenseModal from '../componentList/expenseModel'


import React from 'react';

const ExpenseList = ({ expenses }: {expenses: ExpensePropTypes[] }) => {

    // const [expense , setExpense] = useState([]);
    const [isOpen, setIsOpen] = useState(false)

    const onAddExpense = () => {
        alert("Button Clicked")
    }
  
    const onClose = () => {
        setIsOpen(false)
    }

  return (
    <div className="max-w-screen-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Expense List</h2>

        <button onClick={ ()=>{setIsOpen(true)} }>Add Expense</button>
      <ExpenseModal isOpen={isOpen} onClose={onClose} onAddExpense={onAddExpense}/>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Amount</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Note</th>
            <th className="py-2 px-4 border-b">Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense:any) => (
            <tr key={expense.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{expense.id}</td>
              <td className="py-2 px-4 border-b">{expense.amount}</td>
              <td className="py-2 px-4 border-b">{expense.category}</td>
              <td className="py-2 px-4 border-b">{expense.note}</td>
              <td className="py-2 px-4 border-b">{expense.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
