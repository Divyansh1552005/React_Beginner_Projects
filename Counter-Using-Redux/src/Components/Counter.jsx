import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, resetCounter } from '../Features/CounterSlice.js'



function Counter() {

    const count = useSelector((state) => {
        return state.counterReducer.value;
    })

    const dispatch = useDispatch();
    const [amount, setAmount] = useState(null);

    const handleDecrement = () => {
        if (count > 0){
            dispatch(decrement())
        } 
        else {
            alert("Counter value cannot be decreased below zero!")
        }
    }

    const handleIncrementByAmount = (e) => {
        e.preventDefault();
        const numAmount = parseInt(amount);
        if (!isNaN(numAmount) && numAmount > 0) {
            dispatch(incrementByAmount(numAmount));
            setAmount(''); // Reset the input after dispatching
        } else {
            alert("Please enter a valid positive number!");
        }
    }

    const handleReset = () => {
        if (window.confirm("Are you sure you want to reset the counter to 0?")) {
            dispatch(resetCounter());
        }
    }

  return (
    
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', textAlign: 'center' }}>
        <h1> Counter value : {count}</h1>
        <p style={{ color: 'gray', fontSize: '14px' }}>
            💾 Value automatically saved to localStorage
        </p>

        <div style={{ margin: '20px 0' }}>
            <button onClick={() => dispatch(increment())} style={{ margin : '10px', padding: '10px 15px' }}> 
                Increment 
            </button>
            <br/>

            <button onClick={()=> handleDecrement()} style={{ margin : '10px', padding: '10px 15px' }}> 
                Decrement 
            </button>
            
            <br/>
            
            <button onClick={handleReset} style={{ margin : '10px', padding: '10px 15px', backgroundColor: '#ff6b6b', color: 'white', border: 'none', borderRadius: '4px' }}> 
                Reset Counter 
            </button>
        </div>
        
        <form onSubmit={handleIncrementByAmount} style={{ margin: '20px 0' }}>
            <input 
                type="number" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount to increment"
                style={{ margin: '5px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                min="1"
            />
            <button type="submit" style={{ margin: '5px', padding: '8px 15px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}>
                Increment By Amount
            </button>
        </form>
    </div>
  )
}

export default Counter