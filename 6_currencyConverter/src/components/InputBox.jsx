import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputId = useId()

    return (
      //  using this ${classname} we're getting css too from user and injecting it here
        <div className={`bg-gradient-to-br from-slate-800/80 via-gray-800/80 to-slate-900/80 backdrop-blur-lg p-6 rounded-xl text-sm border border-slate-600/50 shadow-xl hover:shadow-2xl transition-all duration-300 ${className}`}> 
            
            {/* Amount Input Section */}
            <div className="w-full mb-4">
                <label htmlFor={amountInputId} className="text-gray-300 mb-3 inline-block font-medium tracking-wide">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-3 text-xl font-semibold text-gray-100 placeholder-gray-400 focus:text-cyan-400 transition-colors duration-200 border-b border-slate-600/30 focus:border-cyan-400/50"
                    type="number"
                    placeholder="Enter amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    // we had to change the e.target.value to number becoz javascript events ko as string de deta hai 
                />
            </div>

            {/* Currency Selection Section */}
            <div className="w-full">
                <p className="text-gray-300 mb-3 font-medium tracking-wide">Currency Type</p>
                <select
                    className="w-full rounded-lg px-4 py-3 bg-gradient-to-br from-slate-700 to-slate-800 cursor-pointer outline-none border border-slate-600/50 text-gray-200 font-medium hover:bg-gradient-to-br hover:from-slate-600 hover:to-slate-700 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 transition-all duration-200"
                    style={{
                        colorScheme: 'dark'
                    }}
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                        {currencyOptions.map((currency) => (
                            <option 
                                key={currency} 
                                value={currency}
                                className="bg-slate-800 text-gray-200 hover:bg-slate-700"
                                style={{
                                    backgroundColor: '#1e293b',
                                    color: '#e5e7eb'
                                }}
                            >
                            {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
