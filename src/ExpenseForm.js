import React, { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount || !date) return;

    onAddExpense({
      description,
      amount: parseFloat(amount),
      date
    });

    setDescription('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="description">Descrição</label>
        <input 
          type="text" 
          id="description" 
          placeholder="Ex: Aluguel, Supermercado" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required 
        />
      </div>
      <div className="form-control">
        <label htmlFor="amount">Valor (R$)</label>
        <input 
          type="number" 
          id="amount" 
          placeholder="0.00" 
          min="0.01" 
          step="0.01" 
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required 
        />
      </div>
      <div className="form-control">
        <label htmlFor="date">Data</label>
        <input 
          type="date" 
          id="date" 
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required 
        />
      </div>
      <button type="submit" className="btn">Adicionar Despesa</button>
    </form>
  );
}

export default ExpenseForm;