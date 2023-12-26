// ExpenseList.js
import { useState } from "react";
import { ExpensePropTypes, expenseType } from "../../types/componentsTypes";
import ExpenseModal from "../componentList/expenseModel";

import React from "react";
// { expenses }: {expenses: ExpensePropTypes[] }
const ExpenseList = () => {
  const [expenses, setExpenses] = useState<expenseType[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [expense, setExpense] = useState<expenseType>({
    note: '',
    date: '',
    amount: 0,
    category: '',
    id: '',
  });
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const onAddExpense = (expense: expenseType) => {
    alert("Button Clicked");
    setExpenses([...expenses, expense]);
    setTotalAmount(totalAmount+ expense.amount)


  };

  const onClose = () => {
    setIsOpen(false);
    setExpense({
      note: '',
      date: '',
      amount: 0,
      category: '',
      id: '',
    })
  };

  const dontIncludeThis = (expense: expenseType) => {

    const filteredResult = expenses.filter((exp)=>{
      return (
        exp.id !== expense.id
      )
    })

    setExpenses(filteredResult)
    setTotalAmount(totalAmount - expense.amount)
  }

  const updateExpenseValueFunction = (expense: expenseType) => {
    setExpense(expense)
    setIsOpen(true)
  }
    
  const UpdateValueofExpense = (expense: expenseType) => {
    setExpenses(expenses.map((exp) => (exp.id === expense.id ? expense : exp)));
    setTotalAmount(totalAmount - expense.amount + expense.amount);
    setExpense({
      id: '',
      amount: 0,
      category: '',
      note: '',
      date: ''
    })
  }

  return (
    <div className="max-w-screen-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Expense List</h2>

      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Add Expense
      </button>
      <ExpenseModal
        expenseProp = {expense}
        isOpen={isOpen}
        onClose={onClose}
        onAddExpense={onAddExpense}
        UpdateValueofExpense = {UpdateValueofExpense}
      />

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Amount</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Note</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>

          {expenses.length > 0 ? (
            expenses.map((expense: any) => (
              <tr key={expense.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{expense.id}</td>
                <td className="py-2 px-4 border-b">{expense.amount}</td>
                <td className="py-2 px-4 border-b">{expense.category}</td>
                <td className="py-2 px-4 border-b">{expense.note}</td>
                <td className="py-2 px-4 border-b">{expense.date}</td>
                <td>
                  <button className="bg-green-600" onClick={()=> {updateExpenseValueFunction(expense)}}>
                    Edit
                  </button>
                  <button className="bg-red-600" onClick={()=>{dontIncludeThis(expense) } }>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No Record Found</td>
              </tr>
          )}
        </tbody>
      </table>
      <div>
     Total Pkr Amount : { totalAmount}
      </div>
    </div>
  );
};

export default ExpenseList;
