import React from 'react';

function ExpenseItem({ expense, onDelete }) {
  return (
    <tr>
      <td>{expense.date}</td>
      <td>{expense.description}</td>
      <td>R$ {expense.amount.toFixed(2).replace('.', ',')}</td>
      <td>
        <button 
          className="delete-btn" 
          onClick={() => onDelete(expense.id)}
        >
          Remover
        </button>
      </td>
    </tr>
  );
}

export default ExpenseItem;