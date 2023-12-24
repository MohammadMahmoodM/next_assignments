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
    onAddExpense: () => void,
}