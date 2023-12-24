'use client'
import ExpenseList from '../components/componentList/componentList'

export default function Home() {



  return (
    <main>
      <h1>expense tracker app</h1>
      <ExpenseList expenses={[{id:"5",amount:123, note:"a notes", category: "male, female", date: "23-2-2020"}]}/>
    </main>
  )
}
