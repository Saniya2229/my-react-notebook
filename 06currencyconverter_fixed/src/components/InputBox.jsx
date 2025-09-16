import React from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = 'usd',
  amountDisable = false,
  currencyDisable = false,
  className = '',
}) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="text-sm text-gray-200 mb-1">{label}</label>
      <div className="flex gap-2">
        <input
          type="number"
          value={amount ?? ''}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          disabled={amountDisable}
          className="flex-1 px-3 py-2 rounded-md bg-gray-700 text-white outline-none"
        />
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          className="px-3 py-2 rounded-md bg-gray-700 text-white outline-none"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
