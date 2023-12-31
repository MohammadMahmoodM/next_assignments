"use client";
import React, { useState } from "react";
import { ExpenseModelProps } from "../../types/componentsTypes";
import { ImCross } from "react-icons/im";

const ExpenseModal = ({
  isOpen,
  onClose,
  onAddExpense,
  UpdateValueofExpense,
  expenseProp,
}: ExpenseModelProps) => {
  const [amount, setAmount] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const categories = [
    "Groceries",
    "Rent",
    "Utilities",
    "Entertainment",
    "Online Purchases",
    "Other",
  ]; // Add your own categories

  const handleUpdateExpense = () => {
    const clickedExpensetoUpdate = {
      id: expenseProp.id,
      amount: amount || expenseProp.amount,
      category: category || expenseProp.category,
      note: note || expenseProp.note,
      date: note || expenseProp.date,
    };
    UpdateValueofExpense(clickedExpensetoUpdate);
  };

  const handleAddExpense = () => {
    // You can add validation logic here before adding the expense
    const newExpense = {
      id: `${Date.now()}`,
      amount: amount,
      category: category,
      note: note,
      date: date,
    };

    onAddExpense(newExpense);
    setAmount(0);
    setCategory('');
    setDate('');
    setNote('');
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "block" : "hidden"}`}>
      <div>Add Expense</div>
      <div onClick={onClose}>Close the form</div>
      <div className="modal-container bg-white w-96 mx-auto mt-20 p-6 rounded shadow-lg">
        <div className="mb-4">
          <div className="flex justify-between">
            <h3 className="text-2xl font-semibold mb-2">Add Expense</h3>
            <button onClick={onClose}>
              <ImCross />
            </button>
          </div>

          <label className="block text-gray-600 text-sm mb-2" htmlFor="amount">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount || expenseProp.amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            className="w-full border p-2 mb-2"
          />

          <label
            className="block text-gray-600 text-sm mb-2"
            htmlFor="category"
          >
            Category
          </label>

          <select
            id="category"
            value={category || expenseProp.category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border p-2 mb-2"
          >
            {/* <option value="" disabled>
              Select a category
            </option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))} */}

            <option disabled>Select Category</option>
            {categories.map((category) => {
              return <option key={category}>{category}</option>;
            })}
          </select>

          <label className="block text-gray-600 text-sm mb-2" htmlFor="note">
            Note
          </label>
          <textarea
            id="note"
            value={note || expenseProp.note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full border p-2 mb-2"
          />

          <label className="block text-gray-600 text-sm mb-2" htmlFor="date">
            Date
          </label>
          <input
            type="date"
            id="date"
            value={date || expenseProp.date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border p-2 mb-4"
          />
        </div>

        <div className="flex justify-end">
          {expenseProp.id === "" ? 
            <button
              onClick={handleAddExpense}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Expense
            </button>
           : 
            <button
              onClick={handleUpdateExpense}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Update Expense
            </button>
          }
        </div>
      </div>
    </div>
  );
};

export default ExpenseModal;
