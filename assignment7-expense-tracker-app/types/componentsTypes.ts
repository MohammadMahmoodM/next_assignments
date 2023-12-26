export type ExpensePropTypes = {
    id: string,
    amount: number,
    category: string,
    note: string,
    date: string,
}

export type ExpenseModelProps = {
    isOpen: boolean,
    onClose: () => void,
    // onAddExpense: () => void,
    // onUpdateExpense: () => void,
    onAddExpense: (expense:expenseType)=> void
    UpdateValueofExpense: (expense:expenseType)=> void
    expenseProp: expenseType,
}

export type onChangeEventType = {
    target: {values: string, name: string}
}

export type expenseType = {
    note: string,
    date: string,
    amount: number,
    category: string,
    id: string,
}