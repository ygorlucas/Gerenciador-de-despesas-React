import React, { useState, useEffect } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

function App() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const total = expenses.reduce((acc, expense) => {
    const expenseDate = new Date(expense.date + 'T00:00:00');
    const now = new Date();
    if (expenseDate.getMonth() === now.getMonth() && expenseDate.getFullYear() === now.getFullYear()) {
      return acc + expense.amount;
    }
    return acc;
  }, 0);

  const currentMonth = new Date().toLocaleString('pt-BR', { month: 'long', year: 'numeric' });

  return (
    <div className="container">
      <h1>Gerenciador de Despesas</h1>
      
      <div className="card">
        <ExpenseForm onAddExpense={addExpense} />
      </div>

      <div className="card">
        <h2>Resumo Mensal</h2>
        <div className="summary-info">
          <p>Total de Despesas: <span>R$ {total.toFixed(2).replace('.', ',')}</span></p>
          <p>Mês Atual: <span>{currentMonth}</span></p>
        </div>
        <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
      </div>
    </div>
  );
}

export default App;