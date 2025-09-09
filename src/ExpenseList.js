import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses, onDeleteExpense }) {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const filteredExpenses = expenses.filter(expense => {
    const expenseDate = new Date(expense.date + 'T00:00:00');
    return expenseDate.getMonth() === currentMonth && expenseDate.getFullYear() === currentYear;
  });
  
  return (
    <table id="expense-table">
      <thead>
        <tr>
          <th>Data</th>
          <th>Descrição</th>
          <th>Valor (R$)</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {filteredExpenses.length > 0 ? (
          filteredExpenses.map(expense => (
            <ExpenseItem 
              key={expense.id} 
              expense={expense} 
              onDelete={onDeleteExpense} 
            />
          ))
        ) : (
          <tr>
            <td colSpan="4" style={{ textAlign: 'center' }}>Nenhuma despesa adicionada este mês.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default ExpenseList;